import Link from "next/link";
import howItWorksBackground from "../../image/1 (3).png";

const systemSteps = [
  {
    number: "01",
    icon: "☀",
    title: "Sunlight becomes electricity",
    description: "Solar panels capture energy from the sun and turn it into electricity for the local mini-grid.",
  },
  {
    number: "02",
    icon: "▤",
    title: "Energy is stored",
    description: "Battery storage holds solar energy so power can be available beyond daylight hours.",
  },
  {
    number: "03",
    icon: "⌁",
    title: "Power reaches the community",
    description: "A local distribution network carries electricity to connected homes, businesses, and institutions.",
  },
  {
    number: "04",
    icon: "◉",
    title: "Your meter tracks usage",
    description: "A prepaid smart meter at each connection records the electricity used at your premises.",
  },
];

const connectionSteps = [
  {
    number: "01",
    title: "Send a request",
    description: "Tell us where you are and whether the connection is for a home, business, or institution.",
  },
  {
    number: "02",
    title: "Check your area",
    description: "Our team reviews your location and helps confirm whether service is available or planned nearby.",
  },
  {
    number: "03",
    title: "Discuss your needs",
    description: "We learn how you plan to use electricity and talk through the next steps for your connection.",
  },
  {
    number: "04",
    title: "Prepare to connect",
    description: "When your area and connection are ready, our team coordinates the practical details with you.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="how-it-works-page">
      <section
        className="how-page-hero"
        style={{
          backgroundImage: `radial-gradient(circle at 78% 22%, rgba(142, 209, 79, 0.2), transparent 24%), linear-gradient(125deg, rgba(15, 61, 34, 0.92), rgba(32, 91, 52, 0.8)), url(${howItWorksBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="how-page-container how-page-hero-layout">
          <div className="how-page-hero-copy">
            <span className="how-page-kicker">Your guide to getting connected</span>
            <h1>From sunshine to power, made simple.</h1>
            <p>
              GridBloom mini-grids bring solar electricity closer to the people who use it. Here’s how the system works—and what to expect when you ask for a connection.
            </p>
            <div className="how-page-actions">
              <Link className="how-page-button" href="/request-connection">
                Request a connection <span aria-hidden="true">→</span>
              </Link>
              <Link className="how-page-hero-link" href="/communities">
                Check community coverage
              </Link>
            </div>
          </div>
          <div className="how-page-hero-visual" aria-hidden="true">
            <div className="how-page-sun">☀</div>
            <div className="how-page-orbit how-page-orbit-one"></div>
            <div className="how-page-orbit how-page-orbit-two"></div>
            <div className="how-page-solar-panel"><span></span><span></span><span></span><span></span></div>
            <div className="how-page-energy-path">↓</div>
            <div className="how-page-battery"><span></span><span></span><span></span></div>
            <div className="how-page-energy-line"></div>
            <div className="how-page-home">⌂</div>
            <span className="how-page-visual-caption">Local solar. Power for daily life.</span>
          </div>
        </div>
      </section>

      <section className="how-page-system">
        <div className="how-page-container">
          <div className="how-page-section-heading">
            <span className="how-page-section-kicker">How a mini-grid works</span>
            <h2>Four parts. One local energy system.</h2>
            <p>
              Electricity is generated, stored, distributed, and measured close to where people live and work—without relying on the national grid.
            </p>
          </div>
          <ol className="how-page-system-grid">
            {systemSteps.map((step) => (
              <li className="how-page-system-card" key={step.number}>
                <div className="how-page-card-top">
                  <span className="how-page-step-icon" aria-hidden="true">{step.icon}</span>
                  <span className="how-page-step-number">{step.number}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="how-page-connection">
        <div className="how-page-container">
          <div className="how-page-section-heading how-page-connection-heading">
            <span className="how-page-section-kicker">Your connection journey</span>
            <h2>Start with a conversation.</h2>
            <p>
              Every location is different. We’ll learn what you need and help you understand the next steps for your area.
            </p>
          </div>
          <ol className="how-page-journey-list">
            {connectionSteps.map((step) => (
              <li className="how-page-journey-step" key={step.number}>
                <span className="how-page-journey-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {step.number !== "04" && <span className="how-page-journey-arrow" aria-hidden="true">↓</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="how-page-details">
        <div className="how-page-container how-page-details-grid">
          <div>
            <span className="how-page-section-kicker">Designed around real needs</span>
            <h2>Power for homes, businesses, and essential services.</h2>
            <p>
              A mini-grid can serve households, shops, schools, clinics, and community spaces. What’s possible depends on your location and connection, so our team will discuss your needs with you.
            </p>
            <Link className="how-page-inline-link" href="/solutions">
              Explore our energy solutions <span aria-hidden="true">→</span>
            </Link>
          </div>
          <aside className="how-page-help-card">
            <span className="how-page-help-icon" aria-hidden="true">?</span>
            <h3>Have a question?</h3>
            <p>Find answers about service, connections, and what to expect.</p>
            <Link href="/faq">Visit frequently asked questions <span aria-hidden="true">→</span></Link>
          </aside>
        </div>
      </section>

      <section className="how-page-cta">
        <div className="how-page-container how-page-cta-inner">
          <div>
            <span className="how-page-section-kicker">Take the first step</span>
            <h2>Let’s find out what’s possible for you.</h2>
            <p>Share your location and our team will help you understand your options.</p>
          </div>
          <Link className="how-page-button" href="/request-connection">
            Request a connection <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
