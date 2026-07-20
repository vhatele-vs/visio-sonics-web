import Script from "next/script";

import Footer from "@/components/sections/home/Footer";
import { organizationSchema } from "@/app/structuredData";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <main>{children}</main>

      <Footer />
    </>
  );
}