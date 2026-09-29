const audiences = [
  {
    title: "Residential connections",
    description: "For homes that need safe light, phone charging, fans, and small household appliances.",
    examples: ["Lighting for evening study and family time", "Charging phones and radios", "Power for fans and small TVs"],
  },
  {
    title: "Commercial connections",
    description: "For shops, markets, and small businesses that need more reliable daily power.",
    examples: ["Cold storage for food and drinks", "Power for tools and repair work", "Longer service hours for customers"],
  },
  {
    title: "Institutional connections",
    description: "For schools, health clinics, and community centers that depend on dependable electricity.",
    examples: ["Reliable lighting for evening classes", "Vaccine refrigeration and medical equipment", "Power for computers and shared community services"],
  },
];

const systemSteps = [
  "Solar panels generate power",
  "Batteries store it",
  "Power is distributed through the mini-grid",
  "Prepaid meters at each connection track usage",
];

const components = [
  "Solar panels installed where the sun reaches them",
  "Battery storage to keep power available after sunset",
  "Distribution lines connecting homes, shops, and services",
  "Prepaid smart meter at the premises",
];

const capacityTiers = [
  { label: "[PLACEHOLDER — confirm with client]", capacity: "[PLACEHOLDER — confirm with client]", price: "[PLACEHOLDER — confirm with client]" },
  { label: "[PLACEHOLDER — confirm with client]", capacity: "[PLACEHOLDER — confirm with client]", price: "[PLACEHOLDER — confirm with client]" },
  { label: "[PLACEHOLDER — confirm with client]", capacity: "[PLACEHOLDER — confirm with client]", price: "[PLACEHOLDER — confirm with client]" },
];

export default function SolutionsPage() {
  return (
    <div className="solutions-page">
      <section
        className="solutions-hero"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(15, 61, 34, 0.85), rgba(63, 163, 65, 0.72)), url('/solutions-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="section-inner solution-inner">
          <div className="section-kicker">GridBloom Solutions</div>
          <div className="solutions-title-grid">
            <div>
              <h1>Mini-grid solar for your community</h1>
              <p className="intro-copy">
                A mini-grid is a local solar power system that makes electricity close to where people live and work.
                It generates power from the sun, stores it, and sends it through a small network of lines directly to a community,
                without needing the national grid.
              </p>
              <p className="intro-copy">
                That means homes, shops, schools, and clinics can use lights, appliances, and services in a more dependable way.
              </p>
            </div>
            <aside className="intro-aside">
              <span className="aside-orbit"></span>
              <span className="aside-icon">✦</span>
              <span className="aside-label">Local solar distribution</span>
            </aside>
          </div>
        </div>
      </section>

      <section className="section solution-section">
        <div className="section-inner">
          <h2 className="section-title">Who it is for</h2>
          <div className="audience-grid">
            {audiences.map((audience) => (
              <article className="audience-card" key={audience.title}>
                <span className="audience-icon" aria-hidden="true">✦</span>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
                <ul className="example-list">
                  {audience.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section solution-section system-section">
        <div className="section-inner">
          <h2 className="section-title">How the system works</h2>
          <div className="system-steps">
            {systemSteps.map((step, index) => (
              <div className="system-step" key={step}>
                <span className="step-index">{index + 1}</span>
                <span className="step-line" aria-hidden="true"></span>
                <span className="step-text">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section solution-section">
        <div className="section-inner">
          <h2 className="section-title">System components</h2>
          <div className="components-grid">
            {components.map((component, index) => (
              <article className="component-line" key={component}>
                <span className="component-index">{index + 1}</span>
                <span className="component-text">{component}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section solution-section tiers-section">
        <div className="section-inner">
          <h2 className="section-title">Connection tiers</h2>
          <div className="tiers-grid">
            <div className="tier-heading">
              <span className="tier-label">Tier</span>
              <span className="tier-label">Capacity</span>
              <span className="tier-label">Price</span>
            </div>
            {capacityTiers.map((tier, index) => (
              <div className="tier-row" key={index}>
                <span className="tier-value">{tier.label}</span>
                <span className="tier-value">{tier.capacity}</span>
                <span className="tier-value">{tier.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>Ready to get connected?</h2>
          <a className="primary-button" href="/request-connection">Request a Connection</a>
        </div>
      </section>
    </div>
  );
}
