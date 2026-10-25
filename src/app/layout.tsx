import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MotionProvider } from "@/components/shared/MotionProvider";
import { companyInfo } from "@/lib/data/company";
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(companyInfo.url),
  title: {
    default: "Afrique Advisors | Management & Financial Consulting in Canada",
    template: "%s | Afrique Advisors",
  },
  description:
    "Management consulting and financial advisory for small businesses in Canada: business setup, resident director services, compliance, bookkeeping, T2 corporate tax and financial modelling.",
  openGraph: {
    title: "Afrique Advisors Canada Inc.",
    description: companyInfo.tagline,
    url: companyInfo.url,
    siteName: "Afrique Advisors",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased bg-ink text-fg">
        <MotionProvider>
          <Navbar />
          <main className="min-h-screen relative">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
