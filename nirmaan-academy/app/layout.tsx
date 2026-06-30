import type { Metadata } from "next";
import { Sora, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SideBranding from "@/components/SideBranding";
import CustomCursor from "@/components/ui/CustomCursor";
import InstantCallback from "@/components/InstantCallback";
import SecurityEnforcer from "@/components/SecurityEnforcer";
import Preloader from "@/components/Preloader";
import AppwriteInitializer from "@/components/AppwriteInitializer";

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

export const metadata: Metadata = {
  title: "Nirmaan Academy | DDCET Coaching in Ahmedabad",
  description:
    "Nirmaan Academy offers expert DDCET coaching, degree engineering, and diploma engineering classes in Ahmedabad with 2500+ trained students and 180+ top rankers.",
  keywords:
    "DDCET coaching, engineering classes, Ahmedabad coaching institute, diploma engineering, degree engineering",
  authors: [{ name: "Nirmaan Academy" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${playfair.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Preloader />
        <AppwriteInitializer />
        <SecurityEnforcer />
        <CustomCursor />
        <SideBranding />
        <InstantCallback />
        {children}
      </body>
    </html>
  );
}
