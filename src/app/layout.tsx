import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dimitar Malamski | Full-stack Software Engineer",
    template: "%s | Dimitar Malamski",
  },
  description:
    "Full-stack software engineering student building scalable web applications with modern technologies like Spring Boot, Angular, React, and Docker.",
  keywords: [
    "software engineer",
    "full stack developer",
    "Java Spring Boot",
    "Angular",
    "React",
    "Docker",
    "student portfolio",
  ],
  authors: [{ name: "Dimitar Malamski" }],
  creator: "Dimitar Malamski",

  openGraph: {
    title: "Dimitar Malamski | Full-stack Software Engineer",
    description:
      "Full-stack software engineering student building scalable web applications with modern technologies.",
    url: "https://personal-portfolio-sigma-nine-41ebvcp2g8.vercel.app/",
    siteName: "Dimitar Malamski Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dimitar Malamski Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dimitar Malamski | Full-stack Software Engineer",
    description:
      "Full-stack software engineering student building scalable web applications.",
    images: ["/og-image.png"],
  },

  metadataBase: new URL(
    "https://personal-portfolio-sigma-nine-41ebvcp2g8.vercel.app/",
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
