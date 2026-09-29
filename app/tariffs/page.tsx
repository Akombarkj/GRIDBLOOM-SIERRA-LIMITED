import Link from "next/link";

const tariffPlans = [
  {
    title: "Home Energy",
    icon: "☀",
    price: "Flexible",
    copy: "Simple prepaid power for daily household needs.",
    list: ["Lighting and phone charging", "Small appliance support", "Pay-as-you-go top ups"],
  },
  {
    title: "Business Energy",
    icon: "▦",
    price: "Tied to usage",
    copy: "A connection model for shops, markets, and service businesses.",
    list: ["Longer service hours", "Shop and trade power", "Daily prepaid balancing"],
  },
  {
    title: "Institution Energy",
    icon: "◇",
    price: "Service review",
    copy: "Reliable energy planning for health, learning, and public services.",
    list: ["Clinic and school access", "Public service demand", "Energy planning support"],
  },
];

export default function TariffsPage() {
  return (
    <div className="tariffs-page">
      <section className="tariffs-hero">
        <div className="section-inner">
          <div className="page-intro-block">
            <span className="section-kicker">GridBloom Tariffs</span>
            <h1>Tariffs & billing</h1>
            <p>
              GridBloom service is structured around transparent prepaid power access that matches local community need and service reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-intro">
            <h2 className="section-title">Power packages designed around your daily use</h2>
          </div>
          <div className="tariffs-grid-list">
            {tariffPlans.map((plan) => (
              <article className="tariff-card" key={plan.title}>
                <span className="tariff-icon" aria-hidden="true">{plan.icon}</span>
                <h3>{plan.title}</h3>
                <p>{plan.copy}</p>
                <div className="tariff-price">{plan.price}</div>
                <ul>
                  {plan.list.map((line) => <li key={line}>{line}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--sage-muted)" }}>
        <div className="section-inner">
          <div className="final-cta-inner">
            <div>
              <span className="section-kicker">Need a first connection?</span>
              <h2 className="section-title">Start with a service check.</h2>
            </div>
            <Link className="primary-button" href="/request-connection">Request a Connection</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
