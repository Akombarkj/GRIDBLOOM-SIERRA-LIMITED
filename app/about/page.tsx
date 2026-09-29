import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about-page page-shell">
      <section className="about-intro">
        <span className="section-kicker">About GridBloom</span>
        <h1>Reliable energy for stronger communities.</h1>
        <p>
          GridBloom designs and operates practical energy services that help people, businesses, and public services stay connected to dependable electricity.
        </p>
        <div className="about-actions">
          <Link className="primary-button" href="/request-connection">Request a Connection</Link>
          <Link className="secondary-button" href="/solutions">Explore Solutions</Link>
        </div>
      </section>
    </main>
  );
}
