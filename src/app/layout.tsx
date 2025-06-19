import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // contoh, bisa disesuaikan
  style: ["normal"], // opsional
});

export const metadata: Metadata = {
  title: "Symponts AI",
  description: "A modern AI-powered platform for health symptom analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <body className="antialiased w-screen h-screen">
        <Navbar />

        {
          <main className="main-layout-container">
            {children}
            {/* <section className="w-2xl max-md:w-2xs">{children}</section> */}
          </main>
        }
      </body>
    </html>
  );
}
