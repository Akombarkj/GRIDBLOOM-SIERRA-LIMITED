import Link from "next/link";

const billingPoints = [
  { number: "01", title: "Your connection", body: "The service type and approved connection capacity help shape your energy plan." },
  { number: "02", title: "Your usage", body: "The electricity you use is measured at your premises by a meter." },
  { number: "03", title: "Your area", body: "Availability and service arrangements are confirmed with the local team." },
];

export default function TariffsPage() {
  return (
    <main className="public-page tariffs-page">
      <section className="public-hero tariffs-hero">
        <div className="public-container public-hero-grid">
          <div className="public-hero-copy"><span className="public-eyebrow">Tariffs and billing</span><h1>Clear information before you connect.</h1><p>Connection costs and billing details depend on the service available in your area. Our team can talk you through the relevant information for your home, business, or institution.</p><div className="public-actions"><Link className="public-button" href="/request-connection">Ask about a connection <span aria-hidden="true">→</span></Link><Link className="public-text-link" href="/contact">Contact our team</Link></div></div>
          <div className="public-hero-photo tariffs-photo" role="img" aria-label="Solar panels collecting sunlight"><span className="public-photo-caption"><span className="public-caption-mark" aria-hidden="true">✳</span> Understand the details for your area</span></div>
        </div>
      </section>
      <section className="public-section">
        <div className="public-container">
          <div className="public-section-heading"><span className="public-eyebrow">What affects billing</span><h2>Details shaped around the connection.</h2><p>We’ll confirm the applicable charges and payment information directly with you before you proceed.</p></div>
          <div className="public-card-grid three-up">{billingPoints.map((item) => <article className="public-card principle-card" key={item.number}><span className="public-card-number">{item.number}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </div>
      </section>
      <section className="public-section public-section-tint"><div className="public-container public-note-panel"><span className="public-note-icon" aria-hidden="true">i</span><div><h2>Need a specific tariff or billing detail?</h2><p>Share your location and connection type so we can direct your question to the right team.</p></div><Link className="public-inline-link" href="/contact">Get in touch <span aria-hidden="true">→</span></Link></div></section>
    </main>
  );
}
