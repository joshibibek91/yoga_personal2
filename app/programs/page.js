import Link from 'next/link';
import SiteChrome from '../components/SiteChrome';

const offerings = [
  {
    title: 'Inner Calm Foundation',
    duration: '4 Weeks',
    text: 'A beginner-friendly reset using breath, mobility, and guided relaxation.',
    image:
      'https://images.pexels.com/photos/432546/pexels-photo-432546.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    title: 'Chakra Balance Flow',
    duration: '6 Weeks',
    text: 'Intentional sequences, mantra focus, and deep stretching to rebalance energy.',
    image:
      'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Sacred Strength Mentorship',
    duration: '8 Weeks',
    text: 'A premium personal journey combining yoga, meditation, and lifestyle rituals.',
    image:
      'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function ProgramsPage() {
  return (
    <SiteChrome activePath="/programs">
      <section className="innerHero">
        <p className="eyebrow">PROGRAMS BY ASTHA PARAJULI</p>
        <h1>Enroll in Yoga and Meditation Programs Guided by Astha.</h1>
        <p>
          Choose your path and book a session with Astha Parajuli for focused yoga and meditation
          coaching designed around your goals and schedule.
        </p>
      </section>

      <section className="container section">
        <div className="programGrid">
          {offerings.map((item) => (
            <article className="programCard" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <p className="programMeta">{item.duration}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href="/contact" className="btn btnGhost">
                  Enroll / Hire
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section miniCta">
        <h2>Not sure which program fits you? Astha will help you choose.</h2>
        <Link href="/contact" className="btn btnDark">
          Contact Astha
        </Link>
      </section>
    </SiteChrome>
  );
}
