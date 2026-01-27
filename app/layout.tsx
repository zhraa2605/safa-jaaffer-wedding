import type { Metadata } from "next";
import { Geist, Geist_Mono, Amiri, Scheherazade_New } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['arabic', 'latin'],
  variable: '--font-amiri',
  display: 'swap',
});

const scheherazade = Scheherazade_New({
  weight: ['400', '700'],
  subsets: ['arabic', 'latin'],
  variable: '--font-scheherazade',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "صفا و جعفر - دعوة زفاف",
  description: "دعوة زفاف صفا و جعفر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${amiri.variable} ${scheherazade.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
