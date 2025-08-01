import Layout from "@/components/layout";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const title = "Al Says Company FZE the flagship business business organisation.";
const description = `
Description: distribute branded products across flooring mats/ FMCG / automotive parts / Safety and oilfield / foodstuffs/ climate chnage and environmental products and many more.
`

export const metadata: Metadata = {
  title: title,
  description: description,
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
    title: title,
    description: description,
    images: [
      {
        url: "https://alsaistrading.com/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "AL Says Company FZE – Global Supply & Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@alsaiscompany",
    title: title,
    description: description,
    images: ["https://alsaistrading.com/og-image.jpeg"],
  },
  alternates: {
    canonical: "https://alsaistrading.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
