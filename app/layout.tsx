import type { Metadata } from "next";
import { Archivo, Figtree } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", weight: ["600", "700", "800", "900"] });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

export const metadata: Metadata = {
  title: "Ritz Auto Care LLC | Dealer Standard Auto Service in Dubai",
  description: "Free pick-up & drop-off, car wash and 360° inspection. Repairs, servicing, batteries, tyres and roadside support across Dubai & Abu Dhabi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
