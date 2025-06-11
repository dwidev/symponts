import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <main className="w-full min-h-screen flex flex-col justify-center items-center ">
          <section className="w-2xl max-md:w-2xs">{children}</section>
        </main>
      </body>
    </html>
  );
}
