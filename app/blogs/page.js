import Link from 'next/link';
import SiteChrome from '../components/SiteChrome';

const blogPosts = [
  {
    title: 'How Much Weekly Movement Is Actually Enough?',
    category: 'Evidence-based Basics',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1549570652-97324981a6fd?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'A practical plan to hit global activity targets with yoga, brisk walks, and short mobility sessions.',
    fact: 'WHO recommends adults aim for 150-300 minutes of moderate-intensity activity per week.',
    sourceLabel: 'WHO Physical Activity Fact Sheet',
    sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity'
  },
  {
    title: 'Meditation for Stress: What Research Says',
    category: 'Mindfulness',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Why short daily meditation can improve emotional regulation and lower stress symptoms over time.',
    fact: 'NCCIH reports mindfulness and meditation may help reduce symptoms of stress, anxiety, and depression.',
    sourceLabel: 'NCCIH Meditation and Mindfulness',
    sourceUrl: 'https://www.nccih.nih.gov/health/meditation-in-depth'
  },
  {
    title: 'Breathwork and Blood Pressure: A Beginner Guide',
    category: 'Breath & Recovery',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Simple breathing drills you can practice in 3-5 minutes to calm the nervous system and reset your day.',
    fact: 'The American Heart Association notes that slow deep breathing can help reduce stress and support healthy blood pressure.',
    sourceLabel: 'American Heart Association: Stress Management',
    sourceUrl:
      'https://www.heart.org/en/healthy-living/healthy-lifestyle/mental-health-and-wellbeing/time-is-right-to-focus-on-mental-health'
  }
];

const quickFacts = [
  'CDC guidance: adults need at least 150 minutes of moderate-intensity activity weekly.',
  'WHO 2020 update: aim for 150-300 minutes/week for broader health benefits.',
  'NHS sleep guidance: meditation may help people fall asleep faster and sleep better.'
];

export default function BlogsPage() {
  return (
    <SiteChrome activePath="/blogs">
      <section className="innerHero blogHero">
        <p className="eyebrow">YOGA & WELLNESS BLOGS</p>
        <h1>Practical Yoga, Meditation, and Lifestyle Articles Backed by Trusted Sources.</h1>
        <p>
          Explore actionable guides from Astha with science-backed facts on movement, stress relief,
          sleep, and breathwork for modern life.
        </p>
      </section>

      <section className="container section innerPageFirst">
        <div className="sectionHead">
          <p className="eyebrow">LATEST ARTICLES</p>
          <h2>Read, Practice, and Build a Better Routine</h2>
        </div>
        <div className="blogGrid">
          {blogPosts.map((post) => (
            <article className="blogCard" key={post.title}>
              <img src={post.image} alt={post.title} />
              <div className="blogCardBody">
                <div className="blogMeta">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <blockquote>{post.fact}</blockquote>
                <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer" className="blogSourceLink">
                  Source: {post.sourceLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="blogFactsStrip">
          {quickFacts.map((fact) => (
            <article key={fact} className="blogFactCard">
              <span>Fact</span>
              <p>{fact}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section miniCta">
        <h2>Want these insights turned into a personal weekly plan?</h2>
        <Link href="/contact" className="btn btnPrimary">
          Book a Session
        </Link>
      </section>
    </SiteChrome>
  );
}
