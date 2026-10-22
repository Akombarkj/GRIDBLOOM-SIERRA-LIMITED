import Link from "next/link";

const audiences = [
  { number: "01", title: "For homes", body: "Practical electricity for lighting, phone charging, fans, and everyday household needs.", points: ["Light for family time and study", "Power for small appliances", "A local connection to ask about"] },
  { number: "02", title: "For businesses", body: "Energy access for shops, markets, workshops, and local services that need power through the day.", points: ["Support for daily trading", "Power for tools and equipment", "Options shaped to local service"] },
  { number: "03", title: "For institutions", body: "Planning conversations for schools, clinics, and shared community services with energy needs.", points: ["Lighting and learning spaces", "Health and essential services", "Discuss demand with our team"] },
];

const systemParts = [
  { title: "Generate", body: "Solar panels capture energy from sunlight." },
  { title: "Store", body: "Batteries hold energy for use when the sun is not shining." },
  { title: "Distribute", body: "A local network carries electricity to connected premises." },
  { title: "Measure", body: "A meter records the electricity used at each connection." },
];

export default function SolutionsPage() {
  return (
    <main className="public-page solutions-page">
      <section className="public-hero solutions-hero">
        <div className="public-container public-hero-grid">
          <div className="public-hero-copy">
            <span className="public-eyebrow">GridBloom solutions</span>
            <h1>Mini-grid solar, made for local life.</h1>
            <p>A mini-grid generates electricity close to where people live and work. Solar panels, battery storage, and a local distribution network work together to serve connected homes, businesses, and community services.</p>
            <div className="public-actions"><Link className="public-button" href="/request-connection">Check your area <span aria-hidden="true">→</span></Link><Link className="public-text-link" href="/how-it-works">How a mini-grid works</Link></div>
          </div>
          <div className="public-hero-photo solutions-photo" role="img" aria-label="Solar panels in an open landscape"><span className="public-photo-caption"><span className="public-caption-mark" aria-hidden="true">✳</span> Generation, storage, local distribution</span></div>
        </div>
      </section>
      <section className="public-section">
        <div className="public-container">
          <div className="public-section-heading"><span className="public-eyebrow">Who it can serve</span><h2>Energy for the places that keep a community moving.</h2><p>Every connection is different. Share your location and intended use so our team can help explain what may be available.</p></div>
          <div className="public-card-grid three-up">
            {audiences.map((audience) => <article className="public-card audience-card" key={audience.number}><span className="public-card-number">{audience.number}</span><h3>{audience.title}</h3><p>{audience.body}</p><ul>{audience.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}
          </div>
        </div>
      </section>
      <section className="public-section public-section-tint">
        <div className="public-container">
          <div className="public-section-heading"><span className="public-eyebrow">The system</span><h2>Four parts working together.</h2><p>A local energy system connects generation with the people who use the electricity.</p></div>
          <ol className="public-process-grid">{systemParts.map((part, index) => <li key={part.title}><span className="public-process-number">0{index + 1}</span><h3>{part.title}</h3><p>{part.body}</p></li>)}</ol>
        </div>
      </section>
      <section className="public-cta"><div className="public-container public-cta-inner"><div><span className="public-eyebrow">Start with your location</span><h2>Let’s find out what may be available.</h2><p>Our team can review your area and discuss the next steps.</p></div><Link className="public-button" href="/request-connection">Request a connection <span aria-hidden="true">→</span></Link></div></section>
    </main>
  );
}
