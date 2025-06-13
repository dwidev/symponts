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

        <main className="main-layout-container">
          {children}
          {/* <section className="w-2xl max-md:w-2xs">{children}</section> */}
        </main>
      </body>
    </html>
  );
}

// app/layout.tsx atau komponen Layout.tsx

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="h-screen overflow-hidden">
//         {/* Navbar fixed di atas */}
//         <div className="fixed top-0 left-0 w-full h-14 bg-white border-b z-50 px-4 flex items-center">
//           <h1 className="font-semibold text-lg">My App</h1>
//         </div>

//         {/* Layout utama */}
//         <div className="pt-14 h-full grid grid-cols-[250px_1fr]">
//           {/* Sidebar kiri */}
//           <aside className="h-full border-r bg-gray-50 px-4 py-6 overflow-y-auto">
//             <ul className="space-y-2">
//               <li>Menu 1</li>
//               <li>Menu 2</li>
//               <li>Menu 3</li>
//             </ul>
//           </aside>

//           {/* Kontainer isi yang scrollable */}
//           <main className="overflow-y-auto h-full px-6 py-6 bg-white">
//             <div className="max-w-3xl mx-auto space-y-4">
//               {children}
//             </div>
//           </main>
//         </div>
//       </body>
//     </html>
//   );
// }
