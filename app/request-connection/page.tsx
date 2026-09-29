import Link from "next/link";

export default function RequestConnectionPage() {
  return (
    <div className="request-page">
      <section className="request-hero">
        <div className="section-inner">
          <div className="page-intro-block">
            <span className="section-kicker">GridBloom Sierra Leone</span>
            <h1>Request a connection</h1>
            <p>
              Tell us about your location and energy needs. Our team will review the nearest service area and guide you through the connection process.
            </p>
          </div>
        </div>
      </section>

      <section className="section request-section">
        <div className="section-inner request-panel">
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

          <form className="request-form">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">First name</label>
                <input id="firstName" name="firstName" placeholder="First name" />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last name</label>
                <input id="lastName" name="lastName" placeholder="Last name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" name="phone" placeholder="+232..." />
              </div>
              <div className="form-field">
                <label htmlFor="community">Community</label>
                <input id="community" name="community" placeholder="Community or district" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="connectionType">Connection type</label>
                <select id="connectionType" name="connectionType">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Institutional</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="load">Estimated load</label>
                <select id="load" name="load">
                  <option>Lighting and basic appliances</option>
                  <option>Small shop or market</option>
                  <option>Institution or public service</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">How can we help?</label>
              <textarea id="message" name="message" placeholder="Tell us about your electricity needs" />
            </div>

            <button className="primary-button" type="button">Submit Request</button>
          </form>
        </div>
      </section>

      <section className="section" style={{ background: "var(--sage-muted)" }}>
        <div className="section-inner">
          <div className="final-cta-inner">
            <div>
              <span className="section-kicker">Need direct support?</span>
              <h2 className="section-title">Talk with a GridBloom advisor</h2>
            </div>
            <Link className="primary-button" href="/contact">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
