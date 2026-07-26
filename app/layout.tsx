import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const siteUrl = "https://visiosonics.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Visio Sonics | Luxury Technology Integration",
    template: "%s | Visio Sonics",
  },

  description:
    "Visio Sonics engineers intelligent environments where architecture, technology, and human experience become one seamless system.",

  applicationName: "Visio Sonics",

  authors: [
    {
      name: "Visio Sonics",
      url: siteUrl,
    },
  ],

  creator: "Visio Sonics",
  publisher: "Visio Sonics",

  keywords: [
    "luxury technology integration",
    "luxury home automation",
    "smart home automation",
    "home automation South Africa",
    "AV integration",
    "home cinema design",
    "multi-room audio",
    "intelligent lighting",
    "architectural technology integration",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "Visio Sonics",

    title: "Visio Sonics | Luxury Technology Integration",

    description:
      "Engineering intelligent environments where architecture, technology, and human experience become one seamless system.",

    images: [
      {
        url: "/images/og/visio-sonics-og.webp",
        width: 1200,
        height: 630,
        alt: "Visio Sonics luxury smart home and architectural technology integration",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Visio Sonics | Luxury Technology Integration",

    description:
      "Engineering intelligent environments where architecture, technology, and human experience become one seamless system.",

    images: ["/images/og/visio-sonics-og.webp"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body className={`${inter.variable} ${fraunces.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}