import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Cyberpunk Black & Red",
  description: "Personal portfolio showcasing projects, experience, and contact.",
  metadataBase: new URL("https://example.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased glitch-bg`}
      >
        <div className="relative min-h-dvh overflow-x-clip">
          {/* Background canvas animation */}
          <div className="pointer-events-none fixed inset-0 -z-10 w-screen h-screen" aria-hidden>
            <div suppressHydrationWarning>
              <div id="circuit-canvas-root" className="w-full h-full" />
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
