import Link from "next/link";

const contacts = [
  {
    title: "General Enquiries",
    icon: "☎",
    body: "Speak with our team about supply, service areas, and community development opportunities.",
    detail: "hello@gridbloom-sl.com",
  },
  {
    title: "Community Connections",
    icon: "✦",
    body: "Request a connection or ask about service readiness in your area.",
    detail: "+232 (0) XX XXX XXX",
  },
  {
    title: "Operations",
    icon: "▣",
    body: "Coordinate installation, maintenance, meter access, and local service planning.",
    detail: "Mon–Fri · 8:00 AM – 5:00 PM",
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="section-inner">
          <div className="page-intro-block">
            <span className="section-kicker">GridBloom Sierra Leone</span>
            <h1>Contact the GridBloom team</h1>
            <p>
              We work with communities, households, businesses, and institutions that need dependable solar power and clear local service support.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="contact-grid">
            {contacts.map((contact) => (
              <article className="contact-card" key={contact.title}>
                <span className="contact-icon" aria-hidden="true">{contact.icon}</span>
                <h3>{contact.title}</h3>
                <p>{contact.body}</p>
                <p><a href={contact.title === "General Enquiries" ? "mailto:hello@gridbloom-sl.com" : "#"}>{contact.detail}</a></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--sage-muted)" }}>
        <div className="section-inner">
          <div className="final-cta-inner">
            <div>
              <span className="section-kicker">Need a connection?</span>
              <h2 className="section-title">Tell us where you live or work.</h2>
            </div>
            <Link className="primary-button" href="/request-connection">Request a Connection</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
