import Link from "next/link";
import ConnectionForm from "../../components/ConnectionForm";

export default function RequestConnectionPage() {
  return (
    <main className="public-page request-page">
      <section className="public-hero request-hero">
        <div className="public-container request-hero-inner">
          <span className="public-eyebrow">Request a connection</span>
          <h1>Start with your location and what you need.</h1>
          <p>Tell us about your energy needs. Our team will review your area and guide you through the information available.</p>
          <span className="request-hero-note"><span aria-hidden="true">✳</span> Homes · Businesses · Institutions</span>
        </div>
      </section>

      <section className="public-section public-section-tint request-section">
        <div className="public-container request-panel">
          <aside className="request-intro">
            <span className="section-kicker">Connection process</span>
            <h2>Let’s check your service availability.</h2>
            <p>
              We review each request for location, local demand, and nearby grid planning needs before confirming the next steps.
            </p>
            <ul>
              <li>1. Fill in your community and contact information.</li>
              <li>2. Our team reviews your area and demand profile.</li>
              <li>3. We contact you to confirm connection planning.</li>
            </ul>
          </aside>

          <ConnectionForm />
        </div>
      </section>

      <section className="public-section request-support-section">
        <div className="public-container">
          <div className="public-cta-inner">
            <div>
              <span className="public-eyebrow">Need direct support?</span>
              <h2>Talk with the GridBloom team.</h2>
            </div>
            <Link className="primary-button" href="/contact">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
