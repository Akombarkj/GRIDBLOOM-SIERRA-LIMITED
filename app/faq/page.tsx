import Link from "next/link";

const questions = [
  { question: "How do I request a connection?", answer: "Use the Request a Connection form and tell us your community, contact details, and what you need electricity for." },
  { question: "How can I check whether service is available where I live?", answer: "Send us your location through the connection form. Our team will review your area and follow up with the information available." },
  { question: "Who can ask about a connection?", answer: "Households, businesses, institutions, and community services can contact us about their energy needs." },
  { question: "How does a solar mini-grid work?", answer: "Solar panels generate electricity, batteries store energy, and local distribution lines carry power to connected premises. A meter records electricity use." },
  { question: "Where can I ask about tariffs or billing?", answer: "Tariffs and billing depend on the service available in your area. Contact our team with your location and connection type for relevant details." },
  { question: "How do I contact GridBloom?", answer: "Email hello@gridbloom.com or use the contact form to send your question to the team." },
];

export default function FAQPage() {
  return (
    <main className="public-page faq-page">
      <section className="public-hero faq-hero"><div className="public-container faq-hero-inner"><span className="public-eyebrow">Help and information</span><h1>Frequently asked questions.</h1><p>Quick answers about mini-grid energy, connection requests, and getting in touch.</p><Link className="public-button" href="/request-connection">Request a connection <span aria-hidden="true">→</span></Link></div></section>
      <section className="public-section"><div className="public-container faq-layout"><div className="faq-side-copy"><span className="public-eyebrow">Here to help</span><h2>Need a little more detail?</h2><p>Send us your question and we’ll help point you in the right direction.</p><Link className="public-inline-link" href="/contact">Contact GridBloom <span aria-hidden="true">→</span></Link></div><div className="faq-list">{questions.map((item, index) => <details className="faq-item" key={item.question}><summary><span className="faq-question-number">0{index + 1}</span><span>{item.question}</span><span className="faq-toggle" aria-hidden="true"></span></summary><p>{item.answer}</p></details>)}</div></div></section>
    </main>
  );
}
