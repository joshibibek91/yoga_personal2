"use client";

import { useState } from "react";
import Link from "next/link";
import BookingModal from "./BookingModal";

export default function HeroCta({ bookBtnText, initialMinWidth }) {
  const [isOpen, setIsOpen] = useState(false);
  const btnStyle = initialMinWidth > 0 ? { minWidth: initialMinWidth + "px" } : {};

  return (
    <div className="heroCta">
      <button
        className="btn btnPrimary"
        style={btnStyle}
        onClick={() => setIsOpen(true)}
      >
        {bookBtnText}
      </button>
      <Link href="/programs" className="btn btnGhost" style={btnStyle}>
        View Programs
      </Link>
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
