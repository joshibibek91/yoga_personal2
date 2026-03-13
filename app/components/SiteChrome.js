import Link from 'next/link';
import { navItems, siteContact } from '../siteData';

export default function SiteChrome({ activePath = '/', children }) {
  return (
    <main className="site">
      <header className="topbar">
        <div className="container topbarInner">
          <p>
            {siteContact.location} | {siteContact.email}
          </p>
          <p>{siteContact.hours}</p>
        </div>
      </header>

      <section className="heroWrap heroWrapInner">
        <div className="container">
          <nav className="navbar">
            <Link href="/" className="brand">
              ASTHA PARAJULI
            </Link>
            <div className="navLinks">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className={activePath === item.href ? 'isActive' : ''}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href="/contact" className="btn btnDark navBookBtn">
              Book a Session
            </Link>
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
    </main>
  );
}
