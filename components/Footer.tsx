import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="footer-logo-word">GRIDBLOOM</span>
          <span className="footer-sub">SIERRA LIMITED</span>
          <p className="footer-copy">
            Reliable, cleaner energy for homes, businesses and communities.
          </p>
          <div className="social-links" aria-label="Social links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="WhatsApp">wa</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Solutions</h3>
          <ul>
            <li><Link href="/solutions">Home Energy</Link></li>
            <li><Link href="/solutions">Business Energy</Link></li>
            <li><Link href="/solutions">Community Energy</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/communities">Our Impact</Link></li>
            <li><Link href="/contact">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><Link href="/contact">Help Center</Link></li>
            <li><Link href="/request-connection">Request a Connection</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul className="footer-contact">
            <li>hello@gridbloom.com</li>
            <li>+XXX XXX XXX XXX</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 GridBloom. All rights reserved.</span>
      </div>
    </footer>
  );
}
