import Link from 'next/link';
import SiteChrome from '../components/SiteChrome';

const programs = [
  {
    id: 'yoga-courses',
    eyebrow: 'PRIVATE & GROUP',
    title: 'Yoga Courses',
    badge: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
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
    id: 'retreat-ruchi',
    eyebrow: 'YOGA RETREAT + TOURISM',
    title: 'Yoga Retreat with House of Ruchi',
    badge: 'Cultural Immersion',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    description:
      'A unique fusion retreat combining guided yoga and meditation with Nepal cultural tourism and classical Kathak dance — in collaboration with House of Ruchi, a renowned classical arts institution. Experience inner stillness alongside the rich heritage of the Himalayan region.',
    highlights: [
      'Daily yoga, pranayama, and meditation sessions',
      'Classical Kathak dance introduction with House of Ruchi artists',
      'Curated Nepal cultural tourism: temples, monasteries, heritage sites',
      'Accommodation, meals, and guided experiences included',
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
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
    description:
      'Explore the sacred intersection of movement and meditation through classical Indian dance forms, cultural Nepali movement arts, and yogic dance — a practice that integrates physical expression with breath, rhythm, and spiritual awareness.',
    highlights: [
      'Classical dance: Kathak-inspired forms and mudras',
      'Cultural Nepali folk and ceremonial movement',
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
            key={program.id}
            className={`programRow ${index % 2 !== 0 ? 'programRowReverse' : ''}`}
          >
            <div className="programRowMobileTitle">
              <span className="programRowMobileName">{program.title}</span>
              <span className="programRowMobileCat">{program.eyebrow}</span>
            </div>
            <div className="programRowImage">
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
