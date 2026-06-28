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
  title: "Maini Labs — AI Systems That Turn Leads Into Clients",
  description: "Maini Labs builds premium, enterprise-grade AI calling, SMS, and workflow automation systems that answer calls, qualify leads, and book appointments 24/7 so you never lose a deal.",
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
  authors: [{ name: "Maini Labs Team" }],
  creator: "Maini Labs",
  publisher: "Maini Labs",
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
    title: "Maini Labs — AI Systems That Turn Leads Into Clients",
    description: "Maini Labs builds premium, enterprise-grade AI calling, SMS, and workflow automation systems that answer calls, qualify leads, and book appointments 24/7 so you never lose a deal.",
    url: "https://mainilabs.com",
    siteName: "Maini Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maini Labs — AI Systems That Turn Leads Into Clients",
    description: "Enterprise-grade AI calling, SMS, and workflow automation systems operating 24/7.",
  },
  alternates: {
    canonical: "https://mainilabs.com",
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
    "name": "Maini Labs",
    "image": "https://mainilabs.com/og-image.jpg",
    "@id": "https://mainilabs.com/#organization",
    "url": "https://mainilabs.com",
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
      "https://twitter.com/mainilabs",
      "https://linkedin.com/company/mainilabs"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-dark text-white selection:bg-brand-blue/30 selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
