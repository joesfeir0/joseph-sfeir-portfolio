import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { headers } from "next/headers";

import { PortfolioEffects } from "@/components/portfolio-effects";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#0b1712",
};

export async function generateMetadata(): Promise<Metadata> {
  let origin = "https://josephsfeir.dev";

  try {
    const requestHeaders = await headers();
    const host =
      requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
    const protocol =
      requestHeaders.get("x-forwarded-proto") ??
      (host?.includes("localhost") ? "http" : "https");
    if (host) origin = `${protocol}://${host}`;
  } catch {
    // Static tooling can render without request headers; the canonical domain remains valid.
  }

  const socialImage = new URL("/og.png", origin).toString();

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Joseph Sfeir — Software Engineer & Curious Human",
      template: "%s — Joseph Sfeir",
    },
    description:
      "Joseph Sfeir is a recent Computer Science graduate in Lebanon building thoughtful products across web, mobile, AI, and systems.",
    applicationName: "Joseph Sfeir Portfolio",
    authors: [{ name: "Joseph Sfeir", url: "https://josephsfeir.dev" }],
    creator: "Joseph Sfeir",
    publisher: "Joseph Sfeir",
    keywords: [
      "Joseph Sfeir",
      "software engineer",
      "full-stack developer",
      "Flutter developer",
      "AI developer",
      "Lebanon developer",
      "AutoMatch",
      "FitAI",
    ],
    alternates: { canonical: "https://josephsfeir.dev" },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: origin,
      siteName: "Joseph Sfeir",
      title: "Joseph Sfeir — Software Engineer & Curious Human",
      description:
        "Thoughtful products across web, mobile, AI, and the systems behind them.",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Joseph Sfeir — Software Engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Joseph Sfeir — Software Engineer",
      description:
        "Thoughtful products across web, mobile, AI, and the systems behind them.",
      images: [socialImage],
    },
    category: "technology",
  };
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joseph Sfeir",
  url: "https://josephsfeir.dev",
  email: "mailto:joesfeir2004@gmail.com",
  telephone: "+96171589505",
  homeLocation: {
    "@type": "Place",
    name: "Sehaile, Lebanon",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Notre Dame University-Louaize",
  },
  sameAs: [
    "https://github.com/joesfeir0",
    "https://www.linkedin.com/in/joseph-sfeir-18b542322",
  ],
  jobTitle: "Software Engineer",
  knowsAbout: [
    "Full-stack development",
    "Mobile development",
    "Machine learning integration",
    "Product engineering",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      >
        <SiteHeader />
        <PortfolioEffects />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
