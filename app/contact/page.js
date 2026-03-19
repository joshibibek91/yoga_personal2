import SiteChrome from "../components/SiteChrome";
import { siteContact } from "../siteData";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  return (
    <SiteChrome activePath="/contact">
      <section className="innerHero">
        <p className="eyebrow">CONTACT & BOOKING</p>
        <h1>Book a Session with Astha Parajuli for Yoga and Meditation.</h1>
        <p>
          Share your goals and schedule. Astha will recommend the right program
          for you to enroll and begin your guided practice.
        </p>
      </section>

      <section className="container section innerPageFirst contactGrid">
        <article className="contactCard">
          <h2>Book a Call with Astha</h2>
          <p>
            Fill in your details and Astha&apos;s team will contact you within
            24 hours.
          </p>
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
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
            alt="Astha Parajuli, Yoga and Wellness Instructor"
            className="contactTrainerImg"
          />
          <p>
            <strong>Location:</strong> {siteContact.location}
          </p>
          <p>
            <strong>Email:</strong> {siteContact.email}
          </p>
          <p>
            <strong>Phone:</strong> {siteContact.phone}
          </p>
          <div className="contactSocial">
            <div className="contactSocialLinks" aria-label="Trainer social links">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contactSocialLink"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contactSocialLink"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contactSocialLink"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="contactQuote">"Pause, breathe, and healing begins within."</div>
        </article>
      </section>
    </SiteChrome>
  );
}
