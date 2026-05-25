import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, IBM_Plex_Sans, Instrument_Serif, Manrope } from "next/font/google";

import "./globals.css";

const sans = IBM_Plex_Sans({ variable: "--font-sans", weight: ["400", "500", "600", "700"], subsets: ["latin"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", weight: ["400", "500", "600"], subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", weight: ["400"], style: ["normal", "italic"], subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artystic — Design-polish skill",
  description: "A design-polish skill for authored, image-led, editorial web interfaces.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable} ${manrope.variable} scroll-smooth antialiased`}>
      <body>{children}</body>
    </html>
  );
}
