import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      className="whatsapp-button"
      href="/contact"
      aria-label="Contact GridBloom"
      title="Contact GridBloom"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.5A8.5 8.5 0 1 1 20.5 11.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8.5 11.2h.01M12 11.2h.01M15.5 11.2h.01" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      </svg>
    </Link>
  );
}
