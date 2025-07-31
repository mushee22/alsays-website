import Layout from "@/components/layout";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title:
    "AL Says Company FZE – Global Supply & Logistics | Flooring, Food & Industrial Services",
  description: `
    AL Says Company FZE is a global trading and logistics company based in the UAE, India, and Kuwait. 
    We supply flooring items, construction materials, oil-field equipment, IT solutions, 
    and food products across the GCC and MENA regions. Trusted for operations, O&M, and turnkey services.
  `,
  keywords: [
    "Alsais Trading",
    "Saudi Arabia",
    "oilfield equipment",
    "industrial supplies",
    "safety materials",
    "construction materials",
    "automotive parts",
    "electrical supplies",
  ],
  metadataBase: new URL("https://alsaistrading.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alsaistrading.com",
    siteName: "AL Says Company FZE",
    title:
      "AL Says Company FZE – Global Supply & Logistics | Flooring, Food & Industrial Services",
    description: `
      AL Says Company FZE is a global trading and logistics company based in the UAE, India, and Kuwait. 
      We supply flooring items, construction materials, oil-field equipment, IT solutions, 
      and food products across the GCC and MENA regions. Trusted for operations, O&M, and turnkey services.
    `,
    images: [
      {
        url: "https://alsaistrading.com/menu-side-image.jpg", // Prefer JPG/PNG/WebP
        width: 1200,
        height: 630,
        alt: "AL Says Company FZE – Global Supply & Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@alsaiscompany", // Optional: your Twitter handle
    title:
      "AL Says Company FZE – Global Supply & Logistics | Flooring, Food & Industrial Services",
    description: `
      AL Says Company FZE is a global trading and logistics company based in the UAE, India, and Kuwait. 
      We supply flooring items, construction materials, oil-field equipment, IT solutions, 
      and food products across the GCC and MENA regions. Trusted for operations, O&M, and turnkey services.
    `,
    images: ["https://alsaistrading.com/menu-side-image.jpg"],
  },
  alternates: {
    canonical: "https://alsaistrading.com",
  },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-snippet": -1,
  //     "max-image-preview": "large",
  //     "max-video-preview": -1,
  //   },
  // },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },
  creator: "AL Says Company FZE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable}  antialiased h-screen flex flex-col`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
