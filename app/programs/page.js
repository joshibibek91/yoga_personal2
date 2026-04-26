import Link from 'next/link';
import SiteChrome from '../components/SiteChrome';

const programs = [
  {
    id: 'yoga-courses',
    eyebrow: 'PRIVATE & GROUP',
    title: 'Yoga Courses',
    badge: 'Most Popular',
    image: '/images/program-yoga-courses.png',
    description:
      'One-to-one private sessions and small group classes tailored to your goals — flexibility, strength, stress relief, or spiritual deepening. Available online and in-person in Kathmandu.',
    highlights: [
      'Private 1:1 sessions with personalised plan',
      'Small group classes (2–8 participants)',
      'Hatha, Ashtanga, Iyengar & Kundalini styles',
      'Online and in-person options available',
    ],
    cta: 'Book a Session',
  },
  {
    id: 'yoga-trek',
    eyebrow: 'ADVENTURE + WELLNESS',
    title: 'Yoga Trek',
    badge: 'Unique Experience',
    image: '/images/program-yoga-trek.png',
    description:
      'Combine the magic of Nepal\'s Himalayan trails with guided yoga and meditation at altitude. Each morning and evening session is held amidst breathtaking mountain scenery, bringing body and soul into harmony.',
    highlights: [
      'Morning yoga and pranayama at scenic viewpoints',
      'Guided treks through Himalayan landscapes',
      'Evening meditation and sound healing',
      'Custom routes: Nagarkot, Langtang, Annapurna foothills',
    ],
    cta: 'Enquire Now',
  },
  {
    id: 'aol-happiness',
    eyebrow: 'ART OF LIVING',
    title: 'Happiness Course',
    badge: 'Research-Backed',
    image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=1200&q=80',
    description:
      'Astha is a certified Art of Living instructor who has led 50+ Happiness Programs since 2022. This 3-day program teaches Sudarshan Kriya (SKY Breathing), yoga, and meditation — shown to reduce stress by 37% and cortisol by 60% within months.',
    highlights: [
      'Sudarshan Kriya™ (SKY) breathing technique',
      '37% increased calm and 23% reduced anxiety (research-backed)',
      'Available for individuals, corporates, and communities',
      'Delivered at Art of Living Center, Kathmandu',
    ],
    cta: 'Join the Program',
  },
  {
    id: 'children-yoga',
    eyebrow: 'AGES 8-13',
    title: 'Children Yoga',
    badge: 'Kids Program',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    description:
      'Fun, creative yoga designed for children aged 8–13 that builds balance, concentration, and emotional resilience through playful movement, breath exercises, and mindful games.',
    highlights: [
      'Age-appropriate poses for strength and coordination',
      'Breathing practices to reduce anxiety and support focus',
      'Mindfulness games that build confidence and teamwork',
      'Healthy habits for body awareness and self-expression',
    ],
    cta: 'Book for Kids',
  },
  {
    id: 'yoga-therapy',
    eyebrow: 'HEALING + RESTORATION',
    title: 'Yoga and Therapy',
    badge: 'Healing Focus',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    description:
      'A therapeutic program combining restorative yoga, kriya cleansing practices, and sacred chanting to support healing, stress release, and emotional alignment.',
    highlights: [
      'Restorative asanas for nervous system balance',
      'Kriyas to cleanse the mind and body',
      'Chanting and mantra practices for inner calm',
      'Support for trauma recovery, chronic tension, and deep relaxation',
    ],
    cta: 'Start Healing',
  },
  {
    id: 'retreat-ruchi',
    eyebrow: 'YOGA RETREAT + TOURISM',
    title: 'Yoga Retreat with Astha',
    badge: 'Immersive Retreats',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    description:
      'Join Astha for international and national yoga retreats, with Basic, Intermediate, and Advanced yoga-and-wellness courses tailored to your level. Each retreat blends daily asana practice, breathwork, meditation, and nourishing self-care for deep renewal.',
    highlights: [
      'International and national retreat options',
      'Basic, Intermediate, and Advanced yoga & wellness courses',
      'Daily guided asana, pranayama, meditation, and restorative sessions',
      'Holistic guidance for balance, strength, and mindful living',
    ],
    cta: 'Request Itinerary',
  },
  {
    id: 'project-pavitra',
    eyebrow: 'IAHV INITIATIVE',
    title: 'Project Pavitra Trainer',
    badge: 'Women\'s Wellness',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=1200&q=80',
    description:
      'Astha is a certified Project Pavitra Trainer under IAHV (International Association for Human Values) — an evidence-based program empowering adolescent girls and women through menstrual health education, Ayurveda-based lifestyle guidance, and yogic practices. The program breaks stigma and builds confidence through knowledge, community, and natural wellness tools.',
    highlights: [
      'Menstrual health & hygiene education for girls aged 11–45',
      'Yogic practices and Ayurveda-based lifestyle changes',
      'Pranayama techniques to ease premenstrual tension',
      'Diet guidance using locally available foods to prevent anaemia',
      'Myth-busting activities and community-based empowerment',
    ],
    cta: 'Join the Program',
  },
  {
    id: 'dance',
    eyebrow: 'CLASSICAL & CULTURAL',
    title: 'Dance Classes',
    badge: 'Mind-Body Arts',
    image: '/images/program-dance-classes.png',
    description:
      'Discover Astha’s embodied dance classes enriched with House of Ruchi-inspired Kathak storytelling, classical Indian movement, and yogic rhythm. These sessions bring breath-led grace, strength, and mindful expression into every step.',
    highlights: [
      'Classical dance: Kathak-inspired forms and mudras',
      'House of Ruchi-inspired cultural narrative and movement',
      'Yogic dance — breath-synchronised meditative movement',
      'Open to beginners; no dance background required',
    ],
    cta: 'Start Classes',
  },
];

export default function ProgramsPage() {
  return (
    <SiteChrome activePath="/programs">
      <section className="innerHero">
        <p className="eyebrow">PROGRAMS BY ASTHA PARAJULI</p>
        <h1>Yoga, Retreats, Dance, and Wellness Programs in Kathmandu & Beyond.</h1>
        <p>
          From private yoga sessions and Himalayan yoga treks to Art of Living courses and cultural
          retreats — each program is guided personally by Astha Parajuli, RYT 500-hour certified instructor.
        </p>
      </section>

      <div className="container section innerPageFirst programsWrapper">
        {programs.map((program, index) => (
          <article
            id={program.id}
            key={program.id}
            className={`programRow ${index % 2 !== 0 ? 'programRowReverse' : ''}`}
          >
            <div className="programRowMobileTitle">
              <span className="programRowMobileName">{program.title}</span>
              <span className="programRowMobileCat">{program.eyebrow}</span>
            </div>
            <div
              className={[
                'programRowImage',
                program.id === 'yoga-courses' && 'programRowImageYogaCourses',
                program.id === 'yoga-trek' && 'programRowImageYogaTrek',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <img src={program.image} alt={program.title} />
              {program.badge && <span className="programBadge">{program.badge}</span>}
            </div>
            <div className="programRowContent">
              <p className="eyebrow">{program.eyebrow}</p>
              <h2>{program.title}</h2>
              <p className="programRowDesc">{program.description}</p>
              <ul className="programRowList">
                {program.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn btnPrimary">
                {program.cta}
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="collaborateSection">
        <div className="container section">
          <div className="collaborateInner">
            <div className="collaborateText">
              <p className="eyebrow">WORK WITH ASTHA</p>
              <h2>Partner, Collaborate, or Join the Community</h2>
              <p>
                Astha is open to meaningful collaborations — whether you are a wellness brand,
                retreat organiser, corporate HR team, cultural organisation, travel company,
                or an individual looking to co-create something transformative.
              </p>
            </div>
            <div className="collaborateCta">
              <div className="collaborateCtaCard">
                <h3>Let's Create Something Together</h3>
                <p>
                  Reach out with your idea or proposal and Astha's team will respond within 48 hours.
                </p>
                <Link href="/contact" className="btn btnDark">
                  Get in Touch
                </Link>
                <Link href="/about" className="btn btnGhost">
                  Learn About Astha
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
