import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ömer Faruk Uruç | Yazılım Mühendisi & Yapay Zeka Araştırmacısı",
  description:
    "Fırat Üniversitesi Yazılım Mühendisliği öğrencisi, Branchsight bünyesinde Yazılım Mühendisliği Stajyeri. Full-stack geliştirme, yapay zeka entegrasyonları ve çoklu ajan sistemleri üzerine çalışıyorum.",
  keywords: [
    "Ömer Faruk Uruç",
    "Yazılım Mühendisi",
    "Full Stack Developer",
    "Yapay Zeka",
    "Multi-Agent Systems",
    "Fırat Üniversitesi",
    "Branchsight",
  ],
  authors: [{ name: "Ömer Faruk Uruç" }],
  openGraph: {
    title: "Ömer Faruk Uruç | Yazılım Mühendisi & Yapay Zeka Araştırmacısı",
    description:
      "Full-stack geliştirme, yapay zeka entegrasyonları ve çoklu ajan sistemleri üzerine çalışan yazılım mühendisliği öğrencisi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
