import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ascend AI — AI Systems That Turn Leads Into Clients",
  description: "Ascend AI builds premium, enterprise-grade AI calling, SMS, and workflow automation systems that answer calls, qualify leads, and book appointments 24/7 so you never lose a deal.",
  keywords: [
    "AI automation", 
    "real estate AI", 
    "lead generation", 
    "AI phone agents", 
    "AI SMS booking", 
    "CRM automation", 
    "Hubspot automation",
    "business automation agency",
    "conversational AI for business",
    "automated appointment booking"
  ],
  authors: [{ name: "Ascend AI Team" }],
  creator: "Ascend AI",
  publisher: "Ascend AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ascend AI — AI Systems That Turn Leads Into Clients",
    description: "Ascend AI builds premium, enterprise-grade AI calling, SMS, and workflow automation systems that answer calls, qualify leads, and book appointments 24/7 so you never lose a deal.",
    url: "https://ascendai.com",
    siteName: "Ascend AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascend AI — AI Systems That Turn Leads Into Clients",
    description: "Enterprise-grade AI calling, SMS, and workflow automation systems operating 24/7.",
  },
  alternates: {
    canonical: "https://ascendai.com",
  },
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ascend AI",
    "image": "https://ascendai.com/og-image.jpg",
    "@id": "https://ascendai.com/#organization",
    "url": "https://ascendai.com",
    "telephone": "+1-800-555-0199",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Congress Ave",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78701",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.2672,
      "longitude": -97.7431
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://twitter.com/ascendai",
      "https://linkedin.com/company/ascendai"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-dark text-white selection:bg-brand-red/30 selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
