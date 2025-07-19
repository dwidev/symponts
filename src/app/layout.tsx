import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppProvider from "@/components/providers";
import { Particles } from "@/components/magicui/particles";

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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} dark`}>
      <body className="antialiased w-screen h-screen">
        <div className="absolute overflow-hidden w-screen h-screen z-[-1]">
          <Particles
            color="#ffffff"
            quantity={500}
            size={0.3}
            className="h-screen w-screen"
          />
        </div>
        <AppProvider>
          {/* <Navbar>
            <Suspense fallback={<AvatarSkeleton />}>
              <UserAvatar />
            </Suspense>
          </Navbar> */}
          <main className="main-layout-container">{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
