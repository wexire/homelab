import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: profile.name,
  description: `${profile.title} — ${profile.bio}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} bg-zinc-950 text-zinc-300 antialiased`}>
        {children}
      </body>
    </html>
  );
}
