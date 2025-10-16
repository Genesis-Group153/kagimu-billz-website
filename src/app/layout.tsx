import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/nav/MainNav";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { siteConfig } from "@/lib/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s — Kagimu Billz",
    default: "Kagimu Billz — Build smart. Live better.",
  },
  description: siteConfig.site.description,
  keywords: [
    "construction advisory",
    "real estate development",
    "lifestyle branding",
    "Uganda",
    "Kampala",
    "property development",
    "construction consulting",
  ],
  authors: [{ name: "Kagimu Billz" }],
  creator: "Kagimu Billz",
  publisher: "Kagimu Billz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.site.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.site.url,
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    siteName: siteConfig.site.name,
    images: [
      {
        url: siteConfig.og.defaultImage,
        width: 1200,
        height: 630,
        alt: siteConfig.site.name,
      },
    ],
  },
  twitter: {
    card: siteConfig.og.twitterCard,
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    images: [siteConfig.og.defaultImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <MainNav />
          <main className="min-h-screen">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
