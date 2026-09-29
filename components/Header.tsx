"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Communities", href: "/communities" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-wrap">
        <Link className="brand" href="/" aria-label="GridBloom Sierra Limited">
          <span className="brand-logo">
            <Image src="/logo.png" alt="GridBloom Sierra Limited logo" width={56} height={56} priority />
          </span>
          <span className="brand-copy">
            <span className="brand-name">GRIDBLOOM</span>
            <span className="brand-subtitle">SIERRA LIMITED</span>
          </span>
        </Link>

        <nav className={`main-nav${mobileOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} className="nav-link" href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="nav-cta" href="/request-connection">
          Request a Connection
        </Link>

        <button className="mobile-menu-button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
