import Link from "next/link";

export default function FAQPage() {
  return (
    <main className="faq-page page-shell">
      <section className="faq-intro">
        <span className="section-kicker">Help Center</span>
        <h1>Frequently asked questions</h1>
        <div className="faq-list">
          <article className="faq-item">
            <h3>How do I request a connection?</h3>
            <p>Use the Request a Connection form and tell us your community and energy needs.</p>
          </article>
          <article className="faq-item">
            <h3>What services do you provide?</h3>
            <p>We provide home, business, and community energy solutions using reliable solar and mini-grid systems.</p>
          </article>
        </div>
        <Link className="primary-button" href="/request-connection">Request a Connection</Link>
      </section>
    </main>
  );
}
