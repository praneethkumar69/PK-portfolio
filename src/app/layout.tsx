import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Potupu Reddy Praneeth Kumar | Senior Creative Developer & Club advisor Hult Prize VIT-AP",
  description: "Portfolio of Potupu Reddy Praneeth Kumar — Computer Science undergraduate at VIT-AP, Club advisor of Hult Prize VIT-AP, Senior Creative Developer specializing in Next.js 14, WebGL, Three.js 3D, and scroll-driven Canvas scrubbing.",
  keywords: ["Potupu Reddy Praneeth Kumar", "Praneeth Kumar", "VIT-AP", "Hult Prize VIT-AP", "Creative Developer", "Next.js 14", "TypeScript", "Three.js", "MindQuest 3D", "Portfolio"],
  authors: [{ name: "Potupu Reddy Praneeth Kumar" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="bg-[#0a0a0a] text-white selection:bg-cyan-500 selection:text-black antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
