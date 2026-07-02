import type { Metadata } from "next";
import { Sora, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SideBranding from "@/components/SideBranding";
import CustomCursor from "@/components/ui/CustomCursor";
import InstantCallback from "@/components/InstantCallback";
import SecurityEnforcer from "@/components/SecurityEnforcer";
import AppwriteInitializer from "@/components/AppwriteInitializer";
import AppShell from "@/components/AppShell";
import JsonLd from "@/components/JsonLd";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nirmaanacademy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nirmaan Academy | DDCET Coaching in Ahmedabad",
    template: "%s | Nirmaan Academy",
  },
  description:
    "Nirmaan Academy offers expert DDCET coaching, degree engineering, and diploma engineering classes in Ahmedabad with 2500+ trained students and 180+ top rankers.",
  keywords: [
    "DDCET coaching",
    "engineering classes Ahmedabad",
    "diploma to degree coaching",
    "Nirmaan Academy",
    "best coaching institute Ahmedabad",
    "degree engineering tuition",
    "diploma engineering classes",
  ],
  authors: [{ name: "Nirmaan Academy" }],
  creator: "Nirmaan Academy",
  publisher: "Nirmaan Academy",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Nirmaan Academy",
    title: "Nirmaan Academy | DDCET Coaching in Ahmedabad",
    description:
      "Nirmaan Academy offers expert DDCET coaching, degree engineering, and diploma engineering classes in Ahmedabad with 2500+ trained students and 180+ top rankers.",
    url: "/",
    images: [
      {
        url: "/nirmaan-logo.png",
        width: 512,
        height: 512,
        alt: "Nirmaan Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirmaan Academy | DDCET Coaching in Ahmedabad",
    description:
      "Nirmaan Academy offers expert DDCET coaching, degree engineering, and diploma engineering classes in Ahmedabad with 2500+ trained students and 180+ top rankers.",
    images: ["/nirmaan-logo.png"],
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
  alternates: {
    canonical: "/",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${playfair.variable} min-h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <AppShell>
          <AppwriteInitializer />
          <SecurityEnforcer />
          <CustomCursor />
          <SideBranding />
          <InstantCallback />
          <JsonLd />
          {children}
        </AppShell>
      </body>
    </html>
  );
}
