import SiteChrome from '../components/SiteChrome';
import { siteContact } from '../siteData';

export default function ContactPage() {
  return (
    <SiteChrome activePath="/contact">
      <section className="innerHero">
        <p className="eyebrow">CONTACT & BOOKING</p>
        <h1>Book a Session with Astha Parajuli for Yoga and Meditation.</h1>
        <p>
          Share your goals and schedule. Astha will recommend the right program for you to enroll and
          begin your guided practice.
        </p>
      </section>

      <section className="container section contactGrid">
        <article className="contactCard">
          <h2>Book a Call with Astha</h2>
          <p>Fill in your details and Astha&apos;s team will contact you within 24 hours.</p>
          <form className="leadForm">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Preferred Time Slot" />
            <textarea rows="5" placeholder="Tell us about your goals..." />
            <button type="button" className="btn btnDark">
              Send Request
            </button>
          </form>
        </article>

        <article className="contactCard contactInfo">
          <h3>Trainer Details</h3>
          <p>
            <strong>Location:</strong> {siteContact.location}
          </p>
          <p>
            <strong>Email:</strong> {siteContact.email}
          </p>
          <p>
            <strong>Phone:</strong> {siteContact.phone}
          </p>
          <p>
            <strong>Hours:</strong> {siteContact.hours}
          </p>
          <div className="contactQuote">
            "Healing begins the moment you choose to pause, breathe, and listen inward."
          </div>
        </article>
      </section>
    </SiteChrome>
  );
}
