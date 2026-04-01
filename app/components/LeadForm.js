"use client";

import { useState } from "react";

export default function LeadForm({
  variant = "full",
  submitLabel = "Send Request",
  source = "contact",
}) {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      preferredTime: variant === "full" ? fd.get("preferredTime") : "",
      message: variant === "full" ? fd.get("message") : "",
      source,
      _gotcha: fd.get("_gotcha"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        const parts = [data.error, data.hint].filter(Boolean);
        setFeedback(
          parts.length
            ? parts.join(" ")
            : "Something went wrong. Please try again or email us directly."
        );
        return;
      }

      setStatus("success");
      setFeedback("Thank you — we'll be in touch soon.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  }

  return (
    <form className="leadForm" onSubmit={handleSubmit} noValidate>
      <div className="leadFormHp" aria-hidden="true">
        <label htmlFor={`company-${source}`}>Company</label>
        <input
          type="text"
          id={`company-${source}`}
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <input
        type="text"
        name="name"
        placeholder={variant === "callback" ? "Your Full Name" : "Full Name"}
        required
        maxLength={200}
        autoComplete="name"
        disabled={status === "loading"}
      />
      <input
        type="email"
        name="email"
        placeholder={
          variant === "callback" ? "Your Email" : "Email Address"
        }
        required
        maxLength={320}
        autoComplete="email"
        disabled={status === "loading"}
      />

      {variant === "full" && (
        <>
          <input
            type="text"
            name="preferredTime"
            placeholder="Preferred Time Slot"
            maxLength={500}
            disabled={status === "loading"}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your goals..."
            maxLength={8000}
            disabled={status === "loading"}
          />
        </>
      )}

      <button
        type="submit"
        className="btn btnDark"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : submitLabel}
      </button>

      {feedback && (
        <p
          className={`leadFormStatus ${
            status === "success" ? "isSuccess" : "isError"
          }`}
          role="status"
          aria-live="polite"
        >
          {feedback}
        </p>
      )}
    </form>
  );
}
