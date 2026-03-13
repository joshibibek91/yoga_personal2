import Link from 'next/link';
import SiteChrome from '../components/SiteChrome';

const stories = [
  {
    name: 'Riya Sharma',
    journey: 'Anxiety Relief Journey',
    quote:
      'Within a month of mindful breath and movement sessions, I felt calmer, slept better, and stopped feeling overwhelmed during workdays.'
  },
  {
    name: 'Emma Wilson',
    journey: 'Posture and Strength Journey',
    quote:
      'My posture changed, my back pain reduced, and I gained confidence. The spiritual approach made the practice deeply meaningful.'
  },
  {
    name: 'Lucas Martin',
    journey: 'Emotional Balance Journey',
    quote:
      'This was not just exercise. The meditation and ritual-based routines helped me reconnect with myself and find peace in daily life.'
  },
  {
    name: 'Anaya Kapoor',
    journey: 'Beginner Transformation',
    quote:
      'I started as a complete beginner. The guidance was gentle, clear, and truly personalized. I now practice with consistency and joy.'
  }
];

export default function TestimonialsPage() {
  return (
    <SiteChrome activePath="/testimonials">
      <section className="innerHero">
        <p className="eyebrow">CLIENT TESTIMONIALS</p>
        <h1>Real Stories From Clients Trained by Astha Parajuli.</h1>
        <p>
          Each story reflects the results people achieved after enrolling in Astha&apos;s yoga and
          meditation coaching programs.
        </p>
      </section>

      <section className="container section">
        <div className="simpleCardGrid twoCols">
          {stories.map((story) => (
            <article key={story.name} className="simpleCard testimonialStory">
              <p>"{story.quote}"</p>
              <h3>{story.name}</h3>
              <span>{story.journey}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="container section miniCta">
        <h2>Become the next success story by booking a session with Astha.</h2>
        <Link href="/contact" className="btn btnPrimary">
          Book a Session
        </Link>
      </section>
    </SiteChrome>
  );
}
