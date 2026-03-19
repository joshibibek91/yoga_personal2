import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import SiteChrome from "./components/SiteChrome";

const programs = [
  {
    title: "Private 1:1 Yoga",
    text: "Personal sessions for flexibility, alignment, and strength at your pace.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Stress Relief Yoga",
    text: "Breath-led movement to reduce anxiety and improve emotional balance.",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Online Live Classes",
    text: "Join guided sessions from home with weekly progress reviews and support.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
  },
];

const benefits = [
  {
    icon: "🌬️",
    title: "SKY Breathing & Pranayama",
    text: "Sudarshan Kriya and pranayama techniques that calm the nervous system, reduce anxiety, and elevate daily energy.",
  },
  {
    icon: "🧘",
    title: "Multi-Style Yoga Practice",
    text: "Hatha, Ashtanga, Iyengar, and Kundalini — each session is tailored to your body, goals, and experience level.",
  },
  {
    icon: "🌸",
    title: "Women's Holistic Wellness",
    text: "Specialised programs addressing menstrual health, hormonal balance, menopause, and emotional well-being.",
  },
  {
    icon: "🏢",
    title: "Corporate Wellness Sessions",
    text: "On-site and online sessions that improve employee mental health, focus, and productivity for organisations.",
  },
  {
    icon: "🧠",
    title: "Stress & Anxiety Relief",
    text: "Evidence-informed meditation and breathwork to overcome anxiety, depression, and everyday lifestyle challenges.",
  },
  {
    icon: "🌍",
    title: "International & Online Reach",
    text: "Sessions delivered across multiple countries and online platforms — accessible wherever you are in the world.",
  },
];

const blogHighlights = [
  {
    title: "Weekly Movement Targets Made Simple",
    text: "WHO recommends 150-300 minutes of moderate activity weekly. This article shows how yoga can help you reach it.",
    source: "WHO Physical Activity Fact Sheet",
    href: "/blogs",
  },
  {
    title: "Meditation and Stress: What Evidence Supports",
    text: "NCCIH reports mindfulness and meditation may reduce stress, anxiety, and low mood symptoms for many people.",
    source: "NCCIH Meditation and Mindfulness",
    href: "/blogs",
  },
  {
    title: "Breathwork for Calm and Heart Health",
    text: "American Heart Association guidance highlights slow deep breathing for stress management and blood pressure support.",
    source: "American Heart Association",
    href: "/blogs",
  },
];

const testimonials = [
  {
    name: "Alicia Carter",
    role: "Entrepreneur",
    quote:
      "Hiring Astha for private yoga sessions changed my routine. My lower back pain reduced and my posture improved dramatically.",
  },
  {
    name: "Daniel Brooks",
    role: "Product Manager",
    quote:
      "Astha is structured, professional, and supportive. I feel stronger and much less stressed during the work week.",
  },
  {
    name: "Neha Patel",
    role: "Doctor",
    quote:
      "Astha combines breathwork and movement in a practical way. Her training helped me build consistency for the first time.",
  },
];

export default function Home() {
  return (
    <SiteChrome activePath="/">
      <div className="hero">
        <div className="heroContent">
          <div className="heroSocial" aria-label="Social links">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="heroSocialLink"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="heroSocialLink"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="heroSocialLink"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <p className="eyebrow">SPIRITUAL YOGA TRAINER</p>
          <h1>Astha Parajuli for Yoga &amp; Wellness.</h1>
          <p>
            Work one-to-one with Astha Parajuli to improve flexibility, reduce
            stress, and build a spiritual daily practice through guided yoga and
            meditation.
          </p>
          <div className="heroCta">
            <Link href="/contact" className="btn btnPrimary">
              Book a Session
            </Link>
            <Link href="/programs" className="btn btnGhost">
              View Programs
            </Link>
          </div>
        </div>

        <div className="heroVisual">
          <div className="shapeOne" />
          <div className="shapeTwo" />
          <img
            src="https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&w=1000&q=80"
            alt="Personal yoga trainer"
          />
          <div className="floatingCard">
            <strong>Moonlight Sound Healing</strong>
            <span>Friday at 7:30 PM</span>
          </div>
        </div>

        <div className="heroStats">
          <article>
            <h3>3.5k+</h3>
            <p>Guided Sessions</p>
          </article>
          <article>
            <h3>108+</h3>
            <p>Meditation Circles</p>
          </article>
          <article>
            <h3>12+</h3>
            <p>Years of Practice</p>
          </article>
        </div>
      </div>

      <section className="benefitSection">
        <div className="container section">
          <div className="benefitSectionHead">
            <div>
              <p className="eyebrow">WHAT YOU GAIN</p>
              <h2>Real Benefits From a Certified Instructor With 7+ Years of Practice</h2>
            </div>
            <p className="benefitSubtext">
              Thousands trained across Nepal and internationally — each benefit below is drawn
              directly from Astha's certified programs and workshops.
            </p>
          </div>
          <div className="benefitNewGrid">
            {benefits.map((item) => (
              <article key={item.title} className="benefitNewCard">
                <div className="benefitIcon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="programSection">
        <div className="container section">
          <div className="sectionHead center">
            <p className="eyebrow">SIGNATURE PROGRAMS</p>
            <h2>Yoga and Meditation Programs With Spiritual Depth</h2>
          </div>
          <div className="programGrid">
            {programs.map((program) => (
              <article key={program.title} className="programCard">
                <img src={program.image} alt={program.title} />
                <div>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="sectionHead center">
          <p className="eyebrow">WELLNESS BLOGS</p>
          <h2>Latest Evidence-Informed Reads for Yoga and Meditation</h2>
        </div>
        <div className="homeBlogGrid">
          {blogHighlights.map((post) => (
            <article key={post.title} className="homeBlogCard">
              <h3>{post.title}</h3>
              <p>{post.text}</p>
              <span>{post.source}</span>
              <Link href={post.href} className="homeBlogLink">
                Read Blog
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container section about">
        <div className="aboutImage">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80"
            alt="Astha Parajuli – Certified Yoga and Wellness Instructor"
          />
        </div>
        <div className="aboutContent">
          <p className="eyebrow">ABOUT ASTHA PARAJULI</p>
          <h2>500-Hour Certified Yoga & Wellness Instructor, Kathmandu.</h2>
          <p>
            With over 7 years of experience, Astha has trained thousands across
            Nepal and internationally — through the Art of Living Center, IAHV,
            and private corporate wellness programs. She specialises in SKY
            Breathing, multi-style yoga, and women's holistic health.
          </p>
          <ul>
            <li>RYT 500-hour certified — highest international standard</li>
            <li>50+ Happiness Programs & wellness workshops conducted</li>
            <li>Specialist in women's reproductive and emotional health</li>
          </ul>
          <Link href="/about" className="btn btnPrimary">
            Meet Astha
          </Link>
        </div>
      </section>

      <section className="testimonialSection">
        <div className="container section">
          <div className="sectionHead center">
            <p className="eyebrow">CLIENT STORIES</p>
            <h2>Stories of Healing and Inner Transformation</h2>
          </div>
          <div className="testimonialGrid">
            {testimonials.map((item) => (
              <article className="testimonialCard" key={item.name}>
                <p>"{item.quote}"</p>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="container ctaInner">
          <div>
            <p className="eyebrow">BEGIN YOUR JOURNEY</p>
            <h2>
              Enroll and Book a Session for Your Personal Wellness Journey.
            </h2>
            <p>
              Share your goals and Astha will recommend a yoga and meditation
              plan that matches your schedule and experience level.
            </p>
          </div>
          <form className="leadForm">
            <input type="text" placeholder="Your Full Name" />
            <input type="email" placeholder="Your Email" />
            <button type="button" className="btn btnDark">
              Request Callback
            </button>
          </form>
        </div>
      </section>
    </SiteChrome>
  );
}
