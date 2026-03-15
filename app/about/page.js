import Link from 'next/link';
import SiteChrome from '../components/SiteChrome';

const roles = [
  {
    title: 'Wellness & Happiness Teacher',
    org: 'Art of Living Center, Kathmandu',
    period: 'Apr 2022 – Present',
    points: [
      'Conducted 50+ Happiness Programs and wellness workshops',
      'Trained thousands in SKY Breathing and yoga techniques',
      'Taught stress management, meditation, and breathwork to varied age groups',
      'Facilitated workshops helping participants overcome anxiety, depression, and lifestyle challenges',
      'Delivered corporate wellness sessions improving employee mental health and productivity',
    ],
  },
  {
    title: 'Internationally Certified Yoga Teacher',
    org: 'Self-employed, Kathmandu & International',
    period: 'Jan 2018 – Present',
    points: [
      'Lead yoga sessions for local clients and international corporate organizations',
      'Travel internationally to conduct corporate wellness and group yoga sessions',
      'Teach Hatha, Ashtanga, Iyengar, and Kundalini yoga with breathwork and philosophy',
      'Customize practices for diverse cultural backgrounds and fitness levels',
      'Facilitate sessions across multiple countries, online platforms, and local venues',
    ],
  },
  {
    title: 'Wellness Instructor – Women\'s Health',
    org: 'IAHV (International Association for Human Values), Kathmandu',
    period: 'Jan 2018 – Present',
    points: [
      'Led menstrual health workshops covering menstruation, menopause, and reproductive wellness',
      'Taught yoga, pranayama, mudras, and meditation for hormonal balance and symptom relief',
      'Educated on Ayurvedic practices, nutrition, and healthy lifestyle habits',
      'Empowered women and adolescent girls through compassionate health education in rural and urban communities',
    ],
  },
];

const certifications = [
  { label: 'Registered Yoga Teacher', detail: 'RYT 500-Hour', year: '2025' },
  { label: 'Yoga, Pranayama & Meditation Teacher', detail: 'Certified Instructor', year: '2022' },
  { label: 'Wellness Instructor', detail: 'Certified Facilitator', year: '2018' },
];

const pillars = [
  {
    title: 'Breath & SKY Techniques',
    text: 'Pranayama and Sudarshan Kriya Yoga practices that regulate the nervous system and elevate mood.',
  },
  {
    title: 'Multi-Style Yoga',
    text: 'Hatha, Ashtanga, Iyengar, and Kundalini — tailored to your body, goals, and experience level.',
  },
  {
    title: 'Women\'s Holistic Wellness',
    text: 'Specialised sessions for menstrual health, menopause, hormonal balance, and emotional well-being.',
  },
];

export default function AboutPage() {
  return (
    <SiteChrome activePath="/about">
      <section className="innerHero">
        <p className="eyebrow">ABOUT ASTHA PARAJULI</p>
        <h1>500-Hour Certified Yoga & Wellness Instructor Based in Kathmandu, Nepal.</h1>
        <p>
          Women's health facilitator, SKY Breathing trainer, and internationally active yoga teacher
          with over 7 years of experience transforming lives through mindful movement and breathwork.
        </p>
      </section>

      <section className="container section innerPageFirst splitSection">
        <div className="splitImage">
          <img
            src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Astha Parajuli – Yoga and Wellness Instructor"
          />
        </div>
        <div className="splitContent">
          <p className="eyebrow">HER PHILOSOPHY</p>
          <h2>Wellness is a Daily Practice, Not a Destination.</h2>
          <p>
            Astha brings together traditional yogic wisdom and modern wellness science to offer
            sessions that are grounded, practical, and deeply personal. Whether working with
            corporate teams, individual clients, or community groups, her approach is always
            compassionate, structured, and results-focused.
          </p>
          <ul className="softList">
            <li>500-hour RYT certified — highest international standard</li>
            <li>Trained thousands across Nepal and internationally</li>
            <li>Specialist in women's reproductive and emotional health</li>
          </ul>
          <div className="resumeBtnRow resumeBtnRowSpaced">
            <a
              href="/astha-parajuli-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnPrimary"
            >
              View Resume / CV
            </a>
            <a
              href="/astha-parajuli-resume.pdf"
              download="Astha_Parajuli_Resume.pdf"
              className="btn btnGhost"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="sectionHead center">
          <p className="eyebrow">THREE HEALING PILLARS</p>
          <h2>What Every Session Is Built Around</h2>
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

      <section className="container section">
        <div className="sectionHead">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>Professional Journey</h2>
        </div>
        <div className="timelineGrid">
          {roles.map((role) => (
            <article key={role.title} className="timelineCard">
              <div className="timelineHead">
                <div>
                  <h3>{role.title}</h3>
                  <p className="timelineOrg">{role.org}</p>
                </div>
                <span className="timelinePeriod">{role.period}</span>
              </div>
              <ul className="timelineList">
                {role.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="sectionHead">
          <p className="eyebrow">CERTIFICATIONS</p>
          <h2>Qualifications & Credentials</h2>
        </div>
        <div className="certGrid">
          {certifications.map((cert) => (
            <article key={cert.label} className="certCard">
              <span className="certYear">{cert.year}</span>
              <h3>{cert.label}</h3>
              <p>{cert.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section miniCta">
        <h2>Ready to begin your wellness journey with Astha?</h2>
        <Link href="/contact" className="btn btnPrimary">
          Book a Session
        </Link>
      </section>
    </SiteChrome>
  );
}
