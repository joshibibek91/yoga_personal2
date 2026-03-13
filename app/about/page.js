import Link from 'next/link';
import SiteChrome from '../components/SiteChrome';

const pillars = [
  {
    title: 'Breath Awareness',
    text: 'Pranayama techniques that soften anxiety, improve clarity, and regulate daily energy.'
  },
  {
    title: 'Conscious Movement',
    text: 'Alignment-based flows that strengthen the body while keeping the nervous system calm.'
  },
  {
    title: 'Meditative Presence',
    text: 'Short rituals that help you develop focus, gratitude, and emotional stability.'
  }
];

export default function AboutPage() {
  return (
    <SiteChrome activePath="/about">
      <section className="innerHero">
        <p className="eyebrow">ABOUT ASTHA PARAJULI</p>
        <h1>Personal Yoga Training Rooted in Spiritual Awareness and Real-Life Consistency.</h1>
        <p>
          Astha guides students who want more than fitness. Her one-to-one method builds physical
          wellbeing, emotional grounding, and spiritual calm through daily practice.
        </p>
      </section>

      <section className="container section splitSection">
        <div className="splitImage">
          <img
            src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Yoga trainer in a peaceful pose"
          />
        </div>
        <div className="splitContent">
          <p className="eyebrow">THE PHILOSOPHY</p>
          <h2>Practice as a Path to Balance, Not Perfection.</h2>
          <p>
            My method combines traditional yogic principles with modern coaching. You receive clear
            guidance, gentle accountability, and a path that feels sustainable in your daily life.
          </p>
          <ul className="softList">
            <li>Mindful movement with body-safe alignment</li>
            <li>Breath and meditation for inner steadiness</li>
            <li>Compassionate coaching with practical progress tracking</li>
          </ul>
        </div>
      </section>

      <section className="container section">
        <div className="sectionHead center">
          <p className="eyebrow">THREE HEALING PILLARS</p>
          <h2>How Each Session Supports Holistic Growth</h2>
        </div>
        <div className="simpleCardGrid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="simpleCard">
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section miniCta">
        <h2>Ready to begin your spiritual yoga journey?</h2>
        <Link href="/contact" className="btn btnPrimary">
          Book a Session
        </Link>
      </section>
    </SiteChrome>
  );
}
