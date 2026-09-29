import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-card">
        <span className="not-found-kicker">GridBloom Sierra Limited</span>
        <h1>Page not found</h1>
        <p>The page you are looking for is not available right now.</p>
        <Link className="primary-button" href="/">
          Return to Home
        </Link>
      </section>
    </main>
  );
}
