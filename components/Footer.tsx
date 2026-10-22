import Image from "next/image";
import Link from "next/link";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.5 6.5h17v11h-17z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="footer-brand-lockup" href="/" aria-label="GridBloom Sierra Limited home">
            <Image src="/site/gridbloom-mark.webp" alt="" width={58} height={58} />
            <span><strong>GRIDBLOOM</strong><small>SIERRA LIMITED</small></span>
          </Link>
          <p className="footer-tagline">Cleaner Energy.<br />Stronger Communities.</p>
        </div>

        <nav className="footer-column" aria-label="Solutions">
          <h2>Solutions</h2>
          <ul>
            <li><Link href="/solutions">Home Energy</Link></li>
            <li><Link href="/solutions">Business Energy</Link></li>
            <li><Link href="/solutions">Community Energy</Link></li>
          </ul>
        </nav>

        <nav className="footer-column" aria-label="Company">
          <h2>Company</h2>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="footer-column footer-contact-block">
          <h2>Support &amp; Contact</h2>
          <ul>
            <li><Link href="/contact">Help Center</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
          </ul>
          <a className="footer-email" href="mailto:hello@gridbloom.com">
            <MailIcon />
            <span>hello@gridbloom.com</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} GridBloom Sierra Limited. All rights reserved.</span>
        <span className="footer-bottom-note">Cleaner energy, built around community.</span>
      </div>
    </footer>
  );
}
