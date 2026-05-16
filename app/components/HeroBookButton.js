"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

export default function HeroBookButton({ initialText = "Book a Session" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="btn btnPrimary" onClick={() => setIsOpen(true)}>
        {initialText}
      </button>
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
