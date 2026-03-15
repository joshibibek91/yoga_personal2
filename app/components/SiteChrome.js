 "use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { navItems, siteContact } from "../siteData";

export default function SiteChrome({ activePath = "/", children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined;
    }

    const handleOutsideClick = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  const scrollToTopQuick = () => {
    const startY = window.scrollY;
    if (startY <= 0) return;

    const duration = 460;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      window.scrollTo({ top: startY * (1 - eased) });

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <main className="site">
      <header className="topbar">
        <div className="container topbarInner">
          <p>
            {siteContact.location} | {siteContact.email}
          </p>
          <div className="topbarSocial" aria-label="Social links">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="topbarSocialLink"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="topbarSocialLink"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="topbarSocialLink"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </header>

      <section className="heroWrap heroWrapInner">
        <div className="container">
          <nav className="navbar">
            <Link href="/" className="brand" onClick={closeMobileMenu}>
              ASTHA PARAJULI
            </Link>
            <div className="navLinks">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className={activePath === item.href ? "isActive" : ""}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href="/contact" className="btn btnDark navBookBtn" onClick={closeMobileMenu}>
              Book a Session
            </Link>
            <div className="mobileMenuWrap" ref={mobileMenuRef}>
              <button
                type="button"
                className={`mobileMenuToggle ${isMobileMenuOpen ? "isOpen" : ""}`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav-menu"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                <span />
                <span />
                <span />
              </button>
              <div id="mobile-nav-menu" className={`mobileMenuPanel ${isMobileMenuOpen ? "isOpen" : ""}`}>
                {navItems.map((item) => (
                  <Link
                    href={item.href}
                    key={`mobile-${item.href}`}
                    className={activePath === item.href ? "isActive" : ""}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
          {children}
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div>
            <h4>ASTHA PARAJULI</h4>
            <p>
              Personal yoga and meditation trainer helping you build strength, calm, and spiritual
              balance through guided one-to-one practice.
            </p>
          </div>
          <div>
            <h5>Contact</h5>
            <p>{siteContact.phone}</p>
            <p>{siteContact.email}</p>
          </div>
          <div>
            <h5>Quick Links</h5>
            {navItems.slice(1).map((item) => (
              <p key={item.href}>{item.label}</p>
            ))}
          </div>
        </div>
      </footer>
      <button
        type="button"
        className={`scrollTopBtn ${showScrollTop ? "isVisible" : ""}`}
        aria-label="Back to top"
        onClick={scrollToTopQuick}
      >
        ↑
      </button>
    </main>
  );
}
