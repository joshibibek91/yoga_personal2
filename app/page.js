import Link from 'next/link';
import SiteChrome from './components/SiteChrome';

const programs = [
  {
    title: 'Private 1:1 Yoga',
    text: 'Personal sessions for flexibility, alignment, and strength at your pace.',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Stress Relief Yoga',
    text: 'Breath-led movement to reduce anxiety and improve emotional balance.',
    image:
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Online Live Classes',
    text: 'Join guided sessions from home with weekly progress reviews and support.',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80'
  }
];

const benefits = [
  'Book a session with Astha Parajuli for private yoga and meditation coaching',
  'Customized weekly plans with progress tracking and accountability',
  'Focused support for posture, flexibility, and stress relief',
  'Available for online sessions and in-person training'
];

const plans = [
  {
    name: 'Starter Plan',
    price: '$79',
    period: '/session',
    features: ['60-minute private class', 'Assessment and mobility test', 'Basic weekly routine']
  },
  {
    name: 'Transformation Plan',
    price: '$259',
    period: '/month',
    features: ['4 private sessions/month', 'Personal practice calendar', 'WhatsApp support'],
    featured: true
  },
  {
    name: 'Premium Plan',
    price: '$449',
    period: '/month',
    features: ['8 private sessions/month', 'Nutrition and recovery tips', 'Priority scheduling']
  }
];

const testimonials = [
  {
    name: 'Alicia Carter',
    role: 'Entrepreneur',
    quote:
      'Hiring Astha for private yoga sessions changed my routine. My lower back pain reduced and my posture improved dramatically.'
  },
  {
    name: 'Daniel Brooks',
    role: 'Product Manager',
    quote:
      'Astha is structured, professional, and supportive. I feel stronger and much less stressed during the work week.'
  },
  {
    name: 'Neha Patel',
    role: 'Doctor',
    quote:
      'Astha combines breathwork and movement in a practical way. Her training helped me build consistency for the first time.'
  }
];

export default function Home() {
  return (
    <SiteChrome activePath="/">
      <div className="hero">
        <div className="heroContent">
          <p className="eyebrow">SPIRITUAL YOGA TRAINER</p>
          <h1>Book a Session with Astha Parajuli for Yoga and Meditation Training.</h1>
          <p>
            Work one-to-one with Astha Parajuli to improve flexibility, reduce stress, and build a
            spiritual daily practice through guided yoga and meditation.
          </p>
          <div className="heroCta">
            <Link href="/contact" className="btn btnPrimary">
              Book a Session
            </Link>
            <Link href="/programs" className="btn btnGhost">
              View Programs
            </Link>
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
      </div>

      <section className="container section">
        <div className="sectionHead">
          <p className="eyebrow">SPIRITUAL BENEFITS</p>
          <h2>A Sacred Routine for the Body, Breath, and Inner Awareness</h2>
        </div>
        <div className="benefitGrid">
          {benefits.map((item) => (
            <article key={item} className="benefitCard">
              <span>✓</span>
              <p>{item}</p>
            </article>
          ))}
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

      <section className="container section about">
        <div className="aboutImage">
          <img
            src="https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Yoga trainer coaching a student"
          />
        </div>
        <div className="aboutContent">
          <p className="eyebrow">ABOUT ASTHA PARAJULI</p>
          <h2>About Astha Parajuli: Your Personal Yoga and Meditation Trainer.</h2>
          <p>
            Astha designs each class around your personal goals, whether you want to improve posture,
            reduce anxiety, or deepen your spiritual practice through meditation.
          </p>
          <ul>
            <li>Chakra-aligned breathwork and grounding asanas</li>
            <li>Mindful sequences for stress release and nervous system reset</li>
            <li>Simple daily rituals to sustain spiritual wellbeing</li>
          </ul>
          <Link href="/about" className="btn btnPrimary">
            Meet Astha
          </Link>
        </div>
      </section>

      <section className="container section">
        <div className="sectionHead center">
          <p className="eyebrow">PRICING PLANS</p>
          <h2>Choose the Path That Supports Your Practice</h2>
        </div>
        <div className="pricingGrid">
          {plans.map((plan) => (
            <article key={plan.name} className={`priceCard ${plan.featured ? 'featured' : ''}`}>
              <h3>{plan.name}</h3>
              <p className="price">
                {plan.price}
                <span>{plan.period}</span>
              </p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link href="/contact" className={`btn ${plan.featured ? 'btnDark' : 'btnGhost'}`}>
                Choose Plan
              </Link>
            </article>
          ))}
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
            <h2>Enroll and Book a Session for Your Personal Wellness Journey.</h2>
            <p>
              Share your goals and Astha will recommend a yoga and meditation plan that matches your
              schedule and experience level.
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
