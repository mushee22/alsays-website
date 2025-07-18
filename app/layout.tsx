import Layout from "@/components/layout";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});



export const metadata: Metadata = {
  title: "Al Says Trading & Contracting",
  description: "Alsais Trading provides high-quality industrial materials, oilfield equipment, safety products, and construction materials in Saudi Arabia.",
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
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}  antialiased h-screen flex flex-col`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
