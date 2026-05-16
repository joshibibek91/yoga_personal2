"use client";

import { useState, useEffect } from "react";

export default function BookingModal({ isOpen, onClose }) {
  const [status, setStatus] = useState("idle"); // idle | loading | duplicate | success | error
  const [feedback, setFeedback] = useState("");
  const [pendingPayload, setPendingPayload] = useState(null);

  // Lock scroll + close on Escape when open
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  // Reset all state when modal closes so it's fresh on next open
  useEffect(() => {
    if (isOpen) return;
    setStatus("idle");
    setFeedback("");
    setPendingPayload(null);
  }, [isOpen]);

  if (!isOpen) return null;

  async function doSubmit(payload) {
    setStatus("loading");
    try {
      const res = await fetch("/api/book-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName:    fd.get("fullName"),
      address:     fd.get("address"),
      whatsapp:    fd.get("whatsapp"),
      email:       fd.get("email"),
      age:         fd.get("age"),
      healthIssue: fd.get("healthIssue"),
      message:     fd.get("message"),
    };

    // Check for duplicate entry
    try {
      const res = await fetch(
        `/api/check-duplicate?name=${encodeURIComponent(payload.fullName)}&email=${encodeURIComponent(payload.email)}`
      );
      const { isDuplicate } = await res.json();
      if (isDuplicate) {
        setPendingPayload(payload);
        setStatus("duplicate");
        return;
      }
    } catch {
      // If check fails, proceed with submission anyway
    }

    await doSubmit(payload);
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className="bookingOverlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Book a session"
    >
      <div className="bookingModal">
        <button className="bookingClose" onClick={onClose} aria-label="Close booking form">
          &#x2715;
        </button>

        {/* ── Success ── */}
        {status === "success" && (
          <div className="bookingSuccess">
            <div className="bookingSuccessIcon">&#10003;</div>
            <h3>Session Booked!</h3>
            <p>
              Thank you for reaching out. Astha will contact you shortly to
              confirm your personalised session.
            </p>
            <button className="btn btnPrimary" onClick={onClose}>
              Close
            </button>
          </div>
        )}

        {/* ── Duplicate confirmation ── */}
        {status === "duplicate" && (
          <div className="bookingSuccess">
            <div className="bookingDuplicateIcon">!</div>
            <h3>Already Registered</h3>
            <p>
              We found an existing submission with this name and email address.
              Would you like to submit again?
            </p>
            <div className="bookingDuplicateActions">
              <button className="btn btnGhost" onClick={onClose}>
                No, Go Back
              </button>
              <button
                className="btn btnPrimary"
                onClick={() => doSubmit(pendingPayload)}
              >
                Yes, Submit Again
              </button>
            </div>
          </div>
        )}

        {/* ── Form ── */}
        {(status === "idle" || status === "loading" || status === "error") && (
          <>
            <div className="bookingModalHead">
              <p className="eyebrow">BOOK A SESSION</p>
              <h2>Start Your Wellness Journey</h2>
              <p>
                Fill in your details and Astha will get in touch to arrange
                your personalised session.
              </p>
            </div>

            <form className="bookingForm" onSubmit={handleSubmit} noValidate>
              <div className="bookingFormGrid">
                <div className="bookingField">
                  <label htmlFor="bk-fullName">Full Name <span className="bookingRequired">*</span></label>
                  <input type="text" id="bk-fullName" name="fullName"
                    placeholder="Your full name" required maxLength={200}
                    autoComplete="name" disabled={status === "loading"} />
                </div>

                <div className="bookingField">
                  <label htmlFor="bk-email">Email <span className="bookingRequired">*</span></label>
                  <input type="email" id="bk-email" name="email"
                    placeholder="your@email.com" required maxLength={320}
                    autoComplete="email" disabled={status === "loading"} />
                </div>

                <div className="bookingField">
                  <label htmlFor="bk-whatsapp">WhatsApp Number <span className="bookingRequired">*</span></label>
                  <input type="tel" id="bk-whatsapp" name="whatsapp"
                    placeholder="+977 98XXXXXXXX" required maxLength={25}
                    autoComplete="tel" disabled={status === "loading"} />
                </div>

                <div className="bookingField">
                  <label htmlFor="bk-age">Age <span className="bookingRequired">*</span></label>
                  <input type="number" id="bk-age" name="age"
                    placeholder="Your age" required min={1} max={120}
                    disabled={status === "loading"} />
                </div>

                <div className="bookingField bookingFieldFull">
                  <label htmlFor="bk-address">Address</label>
                  <input type="text" id="bk-address" name="address"
                    placeholder="City, Country" maxLength={300}
                    autoComplete="address-level2" disabled={status === "loading"} />
                </div>

                <div className="bookingField bookingFieldFull">
                  <label htmlFor="bk-healthIssue">Health Issue / Goal</label>
                  <input type="text" id="bk-healthIssue" name="healthIssue"
                    placeholder="e.g. back pain, stress, flexibility, weight loss…"
                    maxLength={500} disabled={status === "loading"} />
                </div>

                <div className="bookingField bookingFieldFull">
                  <label htmlFor="bk-message">Message</label>
                  <textarea id="bk-message" name="message" rows={4}
                    placeholder="Tell us more about your goals or any questions you have…"
                    maxLength={2000} disabled={status === "loading"} />
                </div>
              </div>

              {feedback && status === "error" && (
                <p className="bookingFeedback isError" role="alert">{feedback}</p>
              )}

              <button type="submit" className="btn btnPrimary bookingSubmit"
                disabled={status === "loading"}>
                {status === "loading" ? "Submitting…" : "Book My Session"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
