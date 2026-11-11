import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";

import "../globals.css";

import Footer from "@/components/sections/home/Footer";
import GlassHeader from "@/components/experience/arrival/GlassHeader/GlassHeader";
import StructuredData from "@/components/seo/StructuredData";

const siteUrl = "https://visiosonics.co.za";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Visio Sonics | Luxury Technology Integration",
    template: "%s | Visio Sonics",
  },

  description:
    "Visio Sonics engineers intelligent environments where architecture, technology, and human experience become one seamless system.",

  applicationName: "Visio Sonics",

  keywords: [
    "Visio Sonics",
    "luxury technology integration",
    "smart home automation",
    "home automation",
    "home cinema",
    "audio visual integration",
    "multi-room audio",
    "lighting control",
    "security integration",
    "building automation",
    "South Africa",
  ],

  category: "Technology",

  authors: [
    {
      name: "Visio Sonics",
      url: siteUrl,
    },
  ],

  creator: "Visio Sonics",
  publisher: "Visio Sonics",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "Visio Sonics",

    title: "Visio Sonics | Luxury Technology Integration",

    description:
      "Visio Sonics engineers intelligent environments where architecture, technology, and human experience become one seamless system.",

    images: [
      {
        url: "/images/og/visio-sonics-og.webp",
        width: 1200,
        height: 630,
        alt: "Visio Sonics luxury technology integration — Where Vision Meets Sound.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Visio Sonics | Luxury Technology Integration",

    description:
      "Visio Sonics engineers intelligent environments where architecture, technology, and human experience become one seamless system.",

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body className={`${inter.variable} ${fraunces.variable} font-sans`}>
        <StructuredData />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-6 focus:py-3 focus:text-black">
          Skip to content
        </a>
        <GlassHeader />
        <main id="main-content" tabIndex={-1}>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
