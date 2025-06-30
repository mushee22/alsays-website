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
  description: "Comprehensive Trading & Contracting Solutions Under One Roof",
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
