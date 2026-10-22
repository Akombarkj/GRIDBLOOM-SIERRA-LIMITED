import Image from "next/image";
import Link from "next/link";

type IconName = "bolt" | "sun" | "home" | "community";

const reasonsToChooseUs: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "bolt",
    title: "Power you can count on",
    text: "Dependable electricity and responsive local support for everyday life.",
  },
  {
    icon: "sun",
    title: "A cleaner way forward",
    text: "Solar-led energy systems designed to serve people and protect our planet.",
  },
  {
    icon: "home",
    title: "Made for real needs",
    text: "Practical options for households, growing businesses, and entire communities.",
  },
  {
    icon: "community",
    title: "Rooted in community",
    text: "We listen first and build lasting relationships wherever we work.",
  },
];

const howItWorks = [
  { step: "01", title: "Tell us what you need", text: "Share your location and how you would like to use electricity." },
  { step: "02", title: "We plan together", text: "Our team learns about your needs and identifies the best way to serve you." },
  { step: "03", title: "Get connected", text: "We coordinate the next steps and help bring your energy solution to life." },
];

const solutions = [
  {
    title: "For your home",
    text: "Bring dependable power to the everyday moments that matter.",
    image: "/site/home-energy.webp",
    alt: "Solar panels collecting energy in warm evening light",
    number: "01",
  },
  {
    title: "For your business",
    text: "Keep your work moving with energy that supports your ambitions.",
    image: "/site/business-energy.webp",
    alt: "Solar panels above the supporting structure of an energy installation",
    number: "02",
  },
  {
    title: "For your community",
    text: "Explore shared energy solutions shaped around local priorities.",
    image: "/site/community-energy.webp",
    alt: "A rural settlement and a solar energy site viewed from above",
    number: "03",
  },
];

function LineIcon({ name }: { name: IconName }) {
  const shared = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (name === "bolt") {
    return <svg {...shared}><path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z" /></svg>;
  }
  if (name === "sun") {
    return <svg {...shared}><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>;
  }
  if (name === "home") {
    return <svg {...shared}><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z" /></svg>;
  }
  return <svg {...shared}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-container home-hero-layout">
          <div className="home-hero-copy">
            <span className="home-eyebrow">Energy for a brighter Sierra Leone</span>
            <h1>Powering the places <span>we call home.</span></h1>
            <p className="home-hero-intro">
              Reliable, cleaner electricity for Sierra Leonean homes, businesses, and communities—backed by a team that’s here to help.
            </p>
            <div className="home-hero-actions">
              <Link className="home-button home-button-light" href="/request-connection">
                Request a connection <span aria-hidden="true">→</span>
              </Link>
              <Link className="home-text-link" href="#solutions">
                Explore our solutions <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="home-hero-note">
              <span className="home-note-icon" aria-hidden="true">✓</span>
              <span>Local support. More possibilities.</span>
            </div>
          </div>

          <figure className="home-hero-visual">
            <Image
              src="/site/hero.webp"
              alt="A solar energy installation at sunset"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 52vw"
              className="home-hero-photo"
            />
            <figcaption className="home-photo-note">
              <span className="home-photo-note-icon"><LineIcon name="sun" /></span>
              <span><strong>Cleaner energy.</strong><small>Stronger communities.</small></span>
            </figcaption>
            <span className="home-photo-index">01 <span /> Solar-powered possibilities</span>
          </figure>
        </div>
        <div className="home-hero-bottom">
          <div className="home-container home-hero-bottom-inner">
            <span>Local energy. Lasting opportunity.</span>
            <a href="#why-gridbloom">Discover what dependable power can make possible <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="home-section home-why" id="why-gridbloom">
        <div className="home-container">
          <div className="home-section-heading">
            <div>
              <span className="home-section-kicker">Why GridBloom</span>
              <h2>Good energy changes<br />what’s possible.</h2>
            </div>
            <p>Dependable power should fit into your life—not the other way around. We bring practical energy solutions and local care together.</p>
          </div>
          <div className="home-reasons-grid">
            {reasonsToChooseUs.map((reason, index) => (
              <article className="home-reason-card" key={reason.title}>
                <span className="home-reason-index">0{index + 1}</span>
                <span className="home-reason-icon"><LineIcon name={reason.icon} /></span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-how" id="how-it-works">
        <div className="home-container home-how-layout">
          <div className="home-how-copy">
            <span className="home-section-kicker">A clear path to power</span>
            <h2>Let’s get you<br />connected.</h2>
            <p className="home-how-intro">We’ll help you understand the next steps, from the first conversation to finding the right solution.</p>
            <div className="home-steps-grid">
              {howItWorks.map((item) => (
                <article className="home-step" key={item.step}>
                  <span className="home-step-number">{item.step}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
            <Link className="home-how-link" href="/request-connection">Start with a connection request <span aria-hidden="true">→</span></Link>
          </div>
          <figure className="home-how-visual">
            <Image
              src="/site/how-it-works.webp"
              alt="Solar panels set among homes and trees in a rural landscape"
              fill
              sizes="(max-width: 760px) 100vw, 42vw"
              className="home-section-photo"
            />
            <figcaption>Energy designed around everyday life</figcaption>
          </figure>
        </div>
      </section>

      <section className="home-section home-solutions" id="solutions">
        <div className="home-container">
          <div className="home-section-heading">
            <div>
              <span className="home-section-kicker">Solutions for everyday life</span>
              <h2>Energy that meets you<br />where you are.</h2>
            </div>
            <Link className="home-inline-link" href="/solutions">View all solutions <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="home-solutions-grid">
            {solutions.map((solution) => (
              <article className="home-solution-card" key={solution.title}>
                <Link className="home-solution-image" href="/solutions" aria-label={`${solution.title}: learn about GridBloom solutions`}>
                  <Image src={solution.image} alt={solution.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" className="home-section-photo" />
                  <span className="home-solution-index">{solution.number}</span>
                </Link>
                <div className="home-solution-content">
                  <span className="home-solution-icon"><LineIcon name={solution.number === "01" ? "home" : solution.number === "02" ? "bolt" : "community"} /></span>
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                  <Link className="home-solution-link" href="/solutions">Find out more <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-impact" id="communities">
        <div className="home-container home-impact-layout">
          <figure className="home-impact-visual">
            <Image
              src="/site/community-impact.webp"
              alt="Aerial view of a solar energy site within a rural landscape"
              fill
              sizes="(max-width: 760px) 100vw, 52vw"
              className="home-section-photo"
            />
            <figcaption>Power with local possibility</figcaption>
          </figure>
          <div className="home-impact-copy">
            <span className="home-section-kicker">Rooted in Sierra Leone</span>
            <h2>When communities thrive, we all move forward.</h2>
            <p>Better access to electricity can create more time to learn, more room to grow a business, and more ways to stay connected. We’re working toward that future, one community at a time.</p>
            <Link className="home-inline-link" href="/communities">Meet the communities we serve <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="home-final-cta">
        <div className="home-container home-final-cta-inner">
          <div>
            <span className="home-section-kicker">Your next step starts here</span>
            <h2>Let’s talk about better power.</h2>
            <p>Tell us a little about what you need. Our team is ready to listen.</p>
          </div>
          <Link className="home-button home-button-light" href="/request-connection">Request a connection <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </div>
  );
}
