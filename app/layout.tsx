import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyber Mech - Epic Mech Battle Game for iOS",
  description:
    "Pilot your mech through a neon-lit cyberpunk city. Battle enemies, collect chips, and level up in this action-packed iOS game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${shareTechMono.variable} antialiased`}
      >
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 bg-[#0a0014]/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="font-orbitron text-xl font-bold tracking-wider text-cyan-400"
            >
              CYBER MECH
            </Link>
            <div className="flex gap-6 font-share-tech-mono text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-400 transition-colors hover:text-cyan-400"
              >
                Privacy
              </Link>
              <Link
                href="/support"
                className="text-gray-400 transition-colors hover:text-cyan-400"
              >
                Support
              </Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t border-cyan-500/20 bg-[#0a0014] py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
            <p className="font-share-tech-mono text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Cyber Mech. All rights reserved.
            </p>
            <div className="flex gap-6 font-share-tech-mono text-xs">
              <Link
                href="/privacy-policy"
                className="text-gray-500 transition-colors hover:text-cyan-400"
              >
                Privacy Policy
              </Link>
              <Link
                href="/support"
                className="text-gray-500 transition-colors hover:text-cyan-400"
              >
                Support
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
