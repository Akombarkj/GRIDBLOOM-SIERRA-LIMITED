import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "GridBloom Sierra Limited | Cleaner Energy, Stronger Communities",
  description: "Discover practical clean energy solutions for homes, businesses, and communities in Sierra Leone with GridBloom Sierra Limited.",
  openGraph: {
    title: "GridBloom Sierra Limited | Cleaner Energy, Stronger Communities",
    description: "Practical clean energy solutions for homes, businesses, and communities in Sierra Leone.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
