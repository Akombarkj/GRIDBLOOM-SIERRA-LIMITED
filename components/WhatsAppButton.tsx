import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      className="whatsapp-button"
      // [PLACEHOLDER] Replace the WhatsApp placeholder number with the live Sierra Leone business number.
      href="https://wa.me/232XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 3.5C18.7 1.9 16.4 1 13.9 1C7.9 1 3 5.9 3 11.9C3 14 3.6 16 4.6 17.6L3.4 21l3.5-1C8.5 20.5 10.5 21 12.5 21C18.5 21 23 16.1 23 11.9C23 9.8 22.4 7.5 20.5 3.5ZM13.1 17.9H13C12.1 17.9 11.5 17.5 11.4 17.2C11.3 16.9 10.7 16.7 10.2 16.7C9.7 16.6 9.1 16.4 8.4 16H8.3C7.8 15.8 7.2 15.2 7 14.7C6.9 14.2 6.8 13.7 6.8 13.3C6.8 12.9 7 12.5 7.4 12.2L7.8 11.8C8.2 11.4 8.3 10.7 8.1 10.2L7.8 9.2C7.6 8.5 7.1 8.2 6.5 8.2C6.4 8.2 6.3 8.2 6.2 8.2H5.7C5.2 8.2 4.7 8.5 4.5 9.1C4.2 10 4.1 11.1 4.1 12.1C4.1 14 4.8 16 5.7 17.5C7 19.3 8.8 20.4 11 20.4H11.3C12.1 20.3 12.9 19.8 13.3 19.2C13.7 18.6 14.1 18.3 14.4 17.8C14.6 17.2 14.5 16.7 14.1 16.3L13.8 16.1C14 16.2 13.9 16.5 13.1 17.9Z" fill="currentColor" />
      </svg>
    </Link>
  );
}
