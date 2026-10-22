import Link from "next/link";

const principles = [
  { number: "01", title: "Built around local needs", body: "Energy use is different in every home, business, and institution. We start by understanding the people and services a connection needs to support." },
  { number: "02", title: "Practical renewable power", body: "Solar generation, battery storage, and local distribution can bring electricity closer to the places people live and work." },
  { number: "03", title: "Clear next steps", body: "We help people understand how to check service availability and what to expect when they request a connection." },
];

export default function AboutPage() {
  return (
    <main className="public-page about-page">
      <section className="public-hero about-hero">
        <div className="public-container public-hero-grid">
          <div className="public-hero-copy">
            <span className="public-eyebrow">About GridBloom</span>
            <h1>Reliable energy for stronger communities.</h1>
            <p>GridBloom develops practical energy services that help people, businesses, and public services access dependable electricity.</p>
            <div className="public-actions">
              <Link className="public-button" href="/request-connection">Request a connection <span aria-hidden="true">→</span></Link>
              <Link className="public-text-link" href="/solutions">Explore our solutions</Link>
            </div>
          </div>
          <div className="public-hero-photo about-photo" role="img" aria-label="Solar panels beneath a bright sky">
            <span className="public-photo-caption"><span className="public-caption-mark" aria-hidden="true">✳</span> Local energy. Everyday possibility.</span>
          </div>
        </div>
      </section>
      <section className="public-section">
        <div className="public-container">
          <div className="public-section-heading">
            <span className="public-eyebrow">What guides our work</span>
            <h2>Good energy starts with people.</h2>
            <p>We focus on the parts of energy access that matter in daily life: useful service, thoughtful planning, and clear communication.</p>
          </div>
          <div className="public-card-grid three-up">
            {principles.map((item) => <article className="public-card principle-card" key={item.number}>
              <span className="public-card-number">{item.number}</span><h3>{item.title}</h3><p>{item.body}</p>
            </article>)}
          </div>
        </div>
      </section>
      <section className="public-band">
        <div className="public-container public-band-inner">
          <div><span className="public-eyebrow">A local energy system</span><h2>Designed to connect generation with everyday use.</h2></div>
          <Link className="public-button public-button-light" href="/how-it-works">See how it works <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}
