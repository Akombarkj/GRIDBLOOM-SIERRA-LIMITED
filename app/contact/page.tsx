import Link from "next/link";
import ConnectionForm from "../../components/ConnectionForm";

const contacts = [
  {
    title: "General Enquiries",
    icon: "✉",
    body: "Speak with our team about supply, service areas, and community development opportunities.",
    detail: "hello@gridbloom.com",
    href: "mailto:hello@gridbloom.com",
  },
  {
    title: "Community Connections",
    icon: "↗",
    body: "Request a connection or ask about service readiness in your area.",
    detail: "Request a connection online",
    href: "/request-connection",
  },
  {
    title: "Operations",
    icon: "◷",
    body: "Coordinate installation, maintenance, meter access, and local service planning.",
    detail: "Mon–Fri · 8:00 AM – 5:00 PM",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <main className="public-page contact-page">
      <section className="public-hero contact-hero">
        <div className="public-container contact-hero-inner">
          <span className="public-eyebrow">Contact GridBloom</span>
          <h1>We’re here to help you find a way forward.</h1>
          <p>Ask about energy services, service availability, or community connections. Share a little about what you need and our team will follow up.</p>
          <a className="contact-email-link" href="mailto:hello@gridbloom.com">hello@gridbloom.com <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="public-section contact-options-section">
        <div className="public-container">
          <div className="public-card-grid three-up contact-grid">
            {contacts.map((contact) => (
              <article className="contact-card" key={contact.title}>
                <span className="contact-icon" aria-hidden="true">{contact.icon}</span>
                <h3>{contact.title}</h3>
                <p>{contact.body}</p>
                <p>{contact.href ? <a href={contact.href}>{contact.detail}</a> : contact.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="public-section public-section-tint request-section">
        <div className="public-container request-panel">
          <aside className="request-intro">
            <span className="section-kicker">Send a message</span>
            <h2>Tell us about your energy needs.</h2>
            <p>
              Share your location, service needs, and preferred connection type. We will review your request and get back to you.
            </p>
            <ul>
              <li>1. Share your community and contact information.</li>
              <li>2. Tell us what connection type or energy support you need.</li>
              <li>3. Receive a follow-up from our team.</li>
            </ul>
          </aside>

          <ConnectionForm />
        </div>
      </section>

      <section className="public-section contact-connection-cta">
        <div className="public-container">
          <div className="public-cta-inner">
            <div>
              <span className="public-eyebrow">Need a connection?</span>
              <h2>Tell us where you live or work.</h2>
            </div>
            <Link className="primary-button" href="/request-connection">Request a Connection</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
