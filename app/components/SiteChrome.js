"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { footerPrograms, navItems, siteContact, socialLinks } from "../siteData";

const socialIconMap = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
};

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
            {socialLinks.map((s) => {
              const Icon = socialIconMap[s.icon];
              if (!Icon) return null;
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="topbarSocialLink"
                  aria-label={s.label}
                >
                  <Icon />
                </a>
              );
            })}
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
          <div className="footerCol footerColIntro">
            <h4>ASTHA PARAJULI</h4>
            <p>
              Personal yoga and meditation trainer helping you build strength, calm, and spiritual
              balance through guided one-to-one practice.
            </p>
            <div className="footerSocial" aria-label="Social links">
              {socialLinks.map((s) => {
                const Icon = socialIconMap[s.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={`footer-${s.href}`}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footerSocialLink"
                    aria-label={s.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="footerCol">
            <h5>Contact</h5>
            <p>{siteContact.location}</p>
            <p>
              <a href={`tel:${siteContact.phone.replace(/\s/g, "")}`}>{siteContact.phone}</a>
            </p>
            <p>
              <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
            </p>
          </div>
          <div className="footerCol">
            <h5>Programs</h5>
            <ul className="footerList">
              {footerPrograms.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footerCol">
            <h5>Menu</h5>
            <ul className="footerList">
              {navItems
                .slice(1)
                .filter((item) => item.href !== "/contact")
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              <li className="footerInquireItem">
                <Link href="/contact" className="btnFooterInquire">
                  Inquire
                </Link>
              </li>
            </ul>
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
