import Link from "next/link";

const coverageSteps = [
  { number: "01", title: "Share your location", body: "Tell us your community and the kind of connection you need." },
  { number: "02", title: "We review the area", body: "Our team checks the request against service availability and local planning." },
  { number: "03", title: "Get a clear response", body: "We follow up to discuss what is possible and what the next steps could be." },
];

export default function CommunitiesPage() {
  return (
    <main className="public-page communities-page">
      <section className="public-hero communities-hero">
        <div className="public-container public-hero-grid">
          <div className="public-hero-copy">
            <span className="public-eyebrow">Community coverage</span>
            <h1>Let’s check what’s possible in your area.</h1>
            <p>Service availability depends on location and local planning. Share your community with our team and we’ll help you understand the next step.</p>
            <div className="public-actions"><Link className="public-button" href="/request-connection">Check my area <span aria-hidden="true">→</span></Link><Link className="public-text-link" href="/contact">Talk to our team</Link></div>
          </div>
          <div className="public-hero-photo communities-photo" role="img" aria-label="Solar energy infrastructure in a green landscape"><span className="public-photo-caption"><span className="public-caption-mark" aria-hidden="true">✳</span> Energy access starts with local needs</span></div>
        </div>
      </section>
      <section className="public-section">
        <div className="public-container">
          <div className="public-section-heading"><span className="public-eyebrow">A simple service check</span><h2>Coverage begins with a conversation.</h2><p>Send a connection request with your location and our team can review the service options for your area.</p></div>
          <ol className="public-process-grid">{coverageSteps.map((step) => <li key={step.number}><span className="public-process-number">{step.number}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol>
        </div>
      </section>
      <section className="public-band"><div className="public-container public-band-inner"><div><span className="public-eyebrow">Not sure where to start?</span><h2>Tell us where you live or work.</h2></div><Link className="public-button public-button-light" href="/request-connection">Request a connection <span aria-hidden="true">→</span></Link></div></section>
    </main>
  );
}
