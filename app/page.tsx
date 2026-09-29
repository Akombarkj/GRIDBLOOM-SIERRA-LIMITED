import Link from "next/link";
import heroBackground from "../image/lv_0_20260124234054.jpg";

const quickStats = [
  { number: "24/7", label: "Reliable energy support" },
  { number: "25+", label: "Communities served" },
  { number: "70%", label: "Renewable focused" },
  { number: "99%", label: "Service commitment" },
];

const reasonsToChooseUs = [
  {
    icon: "⚡",
    title: "Power you can count on",
    text: "Dependable electricity and responsive local support for everyday life.",
  },
  {
    icon: "☀",
    title: "A cleaner way forward",
    text: "Solar-led energy systems designed to serve people and protect our planet.",
  },
  {
    icon: "↗",
    title: "Made for real needs",
    text: "Practical options for households, growing businesses, and entire communities.",
  },
  {
    icon: "⌂",
    title: "Rooted in community",
    text: "We listen first and build lasting relationships wherever we work.",
  },
];

const howItWorks = [
  { step: "01", title: "Tell us what you need", text: "Share your location and how you would like to use electricity." },
  { step: "02", title: "We plan together", text: "Our team learns about your needs and the best way to serve you." },
  { step: "03", title: "Get connected", text: "We coordinate the next steps and help bring your energy solution to life." },
];

const solutions = [
  {
    icon: "⌂",
    title: "For your home",
    text: "Bring dependable power to the everyday moments that matter.",
  },
  {
    icon: "▥",
    title: "For your business",
    text: "Keep your work moving with energy that supports your ambitions.",
  },
  {
    icon: "✳",
    title: "For your community",
    text: "Explore shared energy solutions shaped around local priorities.",
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section
        className="home-hero"
        style={{
          backgroundImage: `radial-gradient(circle at 18% 18%, rgba(142, 209, 79, 0.22), transparent 26%), linear-gradient(120deg, rgba(10, 35, 24, 0.84), rgba(16, 71, 42, 0.7)), url(${heroBackground.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="home-container home-hero-layout">
          <div className="home-hero-copy">
            <span className="home-eyebrow">Energy for a brighter Sierra Leone</span>
            <h1>Powering the places <span>we call home.</span></h1>
            <p className="home-hero-intro">
              Reliable, cleaner electricity for Sierra Leonean homes, businesses, and communities—backed by a team that’s here to help.
            </p>
            <div className="home-hero-actions">
              <Link className="home-button home-button-light" href="/request-connection">
                Request a connection <span aria-hidden="true">→</span>
              </Link>
              <Link className="home-text-link" href="/solutions">
                Explore our solutions <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="home-hero-note">
              <span className="home-note-icon" aria-hidden="true">✓</span>
              <span>Local support. More possibilities.</span>
            </div>
          </div>

          <figure className="home-scene" role="img" aria-label="Illustration of a solar-powered community in Sierra Leone">
            <svg className="home-scene-art" viewBox="0 0 640 520" aria-hidden="true">
              <defs>
                <linearGradient id="home-sky" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#e2f3c9" />
                  <stop offset="100%" stopColor="#a9d878" />
                </linearGradient>
                <linearGradient id="home-hill" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#619c52" />
                  <stop offset="100%" stopColor="#28653c" />
                </linearGradient>
                <linearGradient id="home-house" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#fffdf3" />
                  <stop offset="100%" stopColor="#e8e8d4" />
                </linearGradient>
              </defs>
              <rect width="640" height="520" fill="url(#home-sky)" />
              <circle cx="480" cy="102" r="52" fill="#f5ce60" />
              <circle cx="480" cy="102" r="68" fill="#f5ce60" opacity=".18" />
              <path d="M0 282c90-67 166-77 255-32 76 39 125 43 200 4 68-35 114-45 185-15v281H0z" fill="#8ebd6c" />
              <path d="M0 350c81-53 149-48 232-16 79 31 132 36 217 0 67-29 126-29 191-3v189H0z" fill="url(#home-hill)" />
              <path d="M0 425c120-35 218-14 310 16 113 37 207 15 330-18v97H0z" fill="#214b32" />
              <path d="M63 344v-58l47-36 53 36v58z" fill="#f1e8ce" />
              <path d="m53 288 57-45 63 45-9 10-54-38-48 38z" fill="#624e39" />
              <rect x="83" y="305" width="18" height="39" rx="2" fill="#7e9a70" />
              <rect x="120" y="304" width="28" height="21" rx="2" fill="#bad8a1" />
              <path d="M254 369V264l91-70 101 70v105z" fill="url(#home-house)" />
              <path d="m235 269 107-83 116 83-13 16-103-72-94 72z" fill="#684a34" />
              <path d="m284 235 51-39 72 39-7 15-63-30-46 31z" fill="#263e3d" />
              <path d="m287 236 62-1 56 18" fill="none" stroke="#71b0ae" strokeWidth="3" />
              <path d="M299 248 355 219m15 40 38-18" stroke="#71b0ae" strokeWidth="2" opacity=".8" />
              <rect x="282" y="292" width="36" height="34" rx="2" fill="#9ac9ad" />
              <path d="M300 292v34m-18-17h36" stroke="#fffdf3" strokeWidth="3" />
              <rect x="357" y="286" width="35" height="83" rx="3" fill="#75513a" />
              <circle cx="384" cy="329" r="2.5" fill="#f5ce60" />
              <rect x="425" y="314" width="24" height="55" rx="2" fill="#a7c58f" />
              <path d="M437 314v55m-12-28h24" stroke="#fffdf3" strokeWidth="2" />
              <path d="M213 369h256" stroke="#e7d8b4" strokeWidth="8" strokeLinecap="round" />
              <path d="M500 357v-46m0 20-21-18m21 9 17-17m-17 33-18-5m18 1 18-9" fill="none" stroke="#254f34" strokeWidth="7" strokeLinecap="round" />
              <circle cx="496" cy="306" r="13" fill="#78a95a" />
              <circle cx="518" cy="299" r="15" fill="#78a95a" />
              <circle cx="478" cy="304" r="12" fill="#78a95a" />
              <path d="M565 385v-38m0 20-17-15m17 8 15-14m-15 28 17-5" fill="none" stroke="#254f34" strokeWidth="6" strokeLinecap="round" />
              <circle cx="562" cy="340" r="12" fill="#78a95a" />
              <circle cx="580" cy="337" r="13" fill="#78a95a" />
              <path d="M201 406c45-15 80-13 119 1m94 15c35-11 67-10 102 2" fill="none" stroke="#a4c978" strokeWidth="3" strokeLinecap="round" opacity=".7" />
            </svg>
            <figcaption className="home-scene-caption">
              <span className="home-caption-sun" aria-hidden="true">☀</span>
              <span><strong>Powered by possibility</strong><small>Cleaner energy, closer to home</small></span>
            </figcaption>
            <div className="home-energy-badge">
              <span className="home-badge-dot" aria-hidden="true"></span>
              <span><strong>Here for your community</strong><small>Every connection starts with a conversation</small></span>
            </div>
          </figure>
        </div>
        <div className="home-hero-bottom">
          <div className="home-container home-hero-bottom-inner">
            <span>Local energy. Lasting opportunity.</span>
            <a href="#home-impact">See what dependable power can make possible <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="home-section home-why">
        <div className="home-container">
          <div className="home-section-heading">
            <div>
              <span className="home-section-kicker">Why GridBloom</span>
              <h2>Good energy changes<br />what’s possible.</h2>
            </div>
            <p>
              Dependable power should fit into your life—not the other way around. We bring practical energy solutions and local care together.
            </p>
          </div>
          <div className="home-reasons-grid">
            {reasonsToChooseUs.map((reason, index) => (
              <article className="home-reason-card" key={reason.title}>
                <span className="home-reason-index">0{index + 1}</span>
                <span className="home-reason-icon" aria-hidden="true">{reason.icon}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-how" id="how-it-works">
        <div className="home-container">
          <div className="home-section-heading home-how-heading">
            <div>
              <span className="home-section-kicker">A clear path to power</span>
              <h2>Let’s get you connected.</h2>
            </div>
            <p>We’ll help you understand the next steps, from the first conversation to finding the right solution.</p>
          </div>
          <div className="home-steps-grid">
            {howItWorks.map((item) => (
              <article className="home-step" key={item.step}>
                <span className="home-step-number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <Link className="home-how-link" href="/request-connection">
            Start with a connection request <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="home-section home-solutions">
        <div className="home-container">
          <div className="home-section-heading">
            <div>
              <span className="home-section-kicker">Solutions for everyday life</span>
              <h2>Energy that meets you<br />where you are.</h2>
            </div>
            <Link className="home-inline-link" href="/solutions">
              View all solutions <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="home-solutions-grid">
            {solutions.map((solution, index) => (
              <article className={`home-solution-card home-solution-${index + 1}`} key={solution.title}>
                <div className="home-solution-top">
                  <span className="home-solution-icon" aria-hidden="true">{solution.icon}</span>
                  <span className="home-solution-index">0{index + 1}</span>
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
                <Link className="home-solution-link" href="/solutions">
                  Find out more <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-impact" id="home-impact">
        <div className="home-container home-impact-layout">
          <div className="home-impact-art" aria-hidden="true">
            <div className="home-impact-sun"></div>
            <div className="home-impact-hill home-impact-hill-back"></div>
            <div className="home-impact-hill home-impact-hill-front"></div>
            <div className="home-impact-house">
              <div className="home-impact-roof"></div>
              <div className="home-impact-wall">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="home-impact-panel">
              <span></span><span></span><span></span><span></span>
            </div>
            <span className="home-impact-label">Energy that brings us closer</span>
          </div>
          <div className="home-impact-copy">
            <span className="home-section-kicker">Rooted in Sierra Leone</span>
            <h2>When communities thrive, we all move forward.</h2>
            <p>
              Better access to electricity can create more time to learn, more room to grow a business, and more ways to stay connected. We’re working toward that future, one community at a time.
            </p>
            <Link className="home-inline-link" href="/communities">
              Meet the communities we serve <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-final-cta">
        <div className="home-container home-final-cta-inner">
          <div>
            <span className="home-section-kicker">Your next step starts here</span>
            <h2>Let’s talk about better power.</h2>
            <p>Tell us a little about what you need. Our team is ready to listen.</p>
          </div>
          <Link className="home-button home-button-light" href="/request-connection">
            Request a connection <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
