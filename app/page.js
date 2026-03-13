const navItems = ['Pages', 'Blog', 'Shop', 'Portfolio', 'Contact'];

const featureCards = [
  { title: 'Workout Routines', icon: '🧘', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { title: 'Pleasant Situation', icon: '🌿', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { title: 'Qualified Instructors', icon: '✨', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' }
];

const coachingCards = [
  {
    title: 'Experienced Train',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Individual Approach',
    img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Free Trial Session',
    img: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Quality Health Tips',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80'
  }
];

const practiceCards = [
  {
    title: 'Absolute Beginners',
    type: 'Ashtanga Yoga',
    img: 'https://images.unsplash.com/photo-1506629905607-d9c297d8b8de?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Slow & Strong',
    type: 'Ashtanga Yoga',
    img: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Control Powerhouse',
    type: 'Hatha Yoga',
    img: 'https://images.unsplash.com/photo-1593810450967-f9c42742e326?auto=format&fit=crop&w=900&q=80'
  }
];

const testimonials = [
  { name: 'Joan Hober', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.' },
  { name: 'Mia Vicobu', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.' },
  { name: 'Robert Fox', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.' }
];

export default function Home() {
  return (
    <main>
      <section className="topBar">
        <span>📞 +21 457-7889</span>
        <span>✉️ sayana@yogastudio.com</span>
        <span>◉ ◉ ◉</span>
      </section>

      <header className="navbar sectionContent">
        <div className="logo">SAYANA</div>
        <nav>
          {navItems.map((item) => (
            <a key={item} href="#">{item}</a>
          ))}
        </nav>
        <button className="pillBtn">Book an Appointment</button>
      </header>

      <section className="hero sectionContent">
        <div className="heroText fadeUp">
          <p className="label">Hi! My Name is Jemmie</p>
          <h1>Start Healing Your Mind, Body & Soul</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <button className="pillBtn">Book a Session</button>
        </div>
        <div className="heroImageWrap floatIn">
          <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=700&q=80" alt="Yoga pose" />
          <div className="badge badgeTop">120+ Programs</div>
          <div className="badge badgeBottom">16 Years Of Experience</div>
          <div className="circleOne" />
          <div className="circleTwo" />
        </div>
      </section>

      <div className="wave" />

      <section className="sectionContent centerSection">
        <p className="sectionMini">New Yoga Classes</p>
        <h2>A Joyful Investment in Your Body & Mind</h2>
        <div className="cardGrid threeCol">
          {featureCards.map((card) => (
            <article key={card.title} className="card hoverLift">
              <div className="emoji">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about sectionContent">
        <div className="aboutImg hoverZoom">
          <img src="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?auto=format&fit=crop&w=900&q=80" alt="Instructor" />
        </div>
        <div>
          <p className="sectionMini">About Me</p>
          <h2>Hi! My name is Jemmie & I&apos;m Here To Help You Find The Confidence</h2>
          <div className="checkCard">A joyful investment in your body, mind & spirit.</div>
          <div className="checkCard">A joyful investment in reducing mental stress.</div>
        </div>
      </section>

      <section className="turquoiseBlock">
        <div className="sectionContent centerSection">
          <p className="sectionMini light">A Personal Practice</p>
          <h2 className="light">Coaching Program for Yoga</h2>
          <div className="cardGrid fourCol imageCards">
            {coachingCards.map((card) => (
              <article key={card.title} className="imageCard hoverLift">
                <img src={card.img} alt={card.title} />
                <div>{card.title}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="banner sectionContent hoverLift">
        <h3>Choose The Most Comfortable Way To Train</h3>
        <button className="pillBtn">Get Started</button>
      </section>

      <section className="about sectionContent reverseGap">
        <div className="collage">
          <img src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=800&q=80" alt="Meditation collage" />
        </div>
        <div>
          <p className="sectionMini">Improve Yourself</p>
          <h2>Choose The Most Comfortable Way to Meditation</h2>
          <ul className="list">
            <li>Pilates & Yoga Classes</li>
            <li>Zumba Classes</li>
          </ul>
        </div>
      </section>

      <section className="sectionContent centerSection">
        <p className="sectionMini">Explore The Yoga Lifestyle</p>
        <h2>A Personal Practice For Anxiety Relief</h2>
        <div className="cardGrid threeCol imageCards">
          {practiceCards.map((card) => (
            <article key={card.title} className="imageCard hoverLift">
              <img src={card.img} alt={card.title} />
              <div>
                <strong>{card.title}</strong>
                <p>{card.type}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <div className="sectionContent centerSection">
          <p className="sectionMini">Testimonial</p>
          <h2>Our Happy Customers</h2>
          <div className="cardGrid threeCol">
            {testimonials.map((t) => (
              <article key={t.name} className="card hoverLift">
                <p>“{t.text}”</p>
                <h4>{t.name}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about sectionContent">
        <div>
          <p className="sectionMini">Best Fitness Exercise</p>
          <h2>A Joyful Investment in Your Body Mind And Spirit</h2>
          <ol className="list ordered">
            <li>Enable body to fight disease effectively</li>
            <li>Ability to recover from illness</li>
          </ol>
        </div>
        <div className="aboutImg hoverZoom statImage">
          <img src="https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&w=1000&q=80" alt="Yoga bridge pose" />
          <div className="statBadge">289k+<span>Online Classes</span></div>
        </div>
      </section>

      <section className="newsletter">
        <div className="sectionContent newsletterInner">
          <h3>Join Our Newsletter</h3>
          <div className="newsletterForm">
            <input type="email" placeholder="Enter Your Email Address" />
            <button>Subscribe Now</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="sectionContent footerGrid">
          <div>
            <div className="logo">SAYANA</div>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
          <div>
            <h5>Get In Touch</h5>
            <p>Los Angeles, CA</p>
            <p>+001 987 7855</p>
          </div>
          <div>
            <h5>Information</h5>
            <p>About</p><p>Blog</p><p>Classes</p>
          </div>
          <div>
            <h5>Helpful Links</h5>
            <p>Services</p><p>Support</p><p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
