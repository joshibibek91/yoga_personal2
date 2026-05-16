"use client";

import { useState, useRef, useEffect } from "react";

export default function BenefitCarousel({ benefits }) {
  const benefitGridRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const extendedBenefits = [...benefits, ...benefits, ...benefits];
  const displayBenefits = isMobile ? extendedBenefits : benefits;

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 680);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    if (benefitGridRef.current && isMobile) {
      const scrollPosition = 290 + 12;
      setTimeout(() => {
        benefitGridRef.current.scrollLeft = scrollPosition;
      }, 100);
    }
  }, [isMobile]);

  const handleScroll = () => {
    if (benefitGridRef.current) {
      setCanScrollLeft(true);
      setCanScrollRight(true);
    }
  };

  const scroll = (direction) => {
    if (benefitGridRef.current) {
      const cardWidth =
        benefitGridRef.current.querySelector(".benefitNewCard")?.offsetWidth || 290;
      const scrollAmount = cardWidth + 12;
      benefitGridRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="benefitCarouselWrapper">
      <div className="benefitCarouselContainer">
        <div
          className="benefitNewGrid"
          ref={benefitGridRef}
          onScroll={handleScroll}
        >
          {displayBenefits.map((item, idx) => (
            <article key={`${item.title}-${idx}`} className="benefitNewCard">
              <div className="benefitIcon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="benefitCarouselControls">
        <button
          className={`benefitCarouselArrow benefitCarouselArrowLeft ${!canScrollLeft ? "disabled" : ""}`}
          onClick={() => scroll("left")}
          aria-label="Scroll benefits left"
        >
          &lt;
        </button>
        <button
          className={`benefitCarouselArrow benefitCarouselArrowRight ${!canScrollRight ? "disabled" : ""}`}
          onClick={() => scroll("right")}
          aria-label="Scroll benefits right"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
