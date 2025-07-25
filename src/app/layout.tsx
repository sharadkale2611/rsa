import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from 'next-themes'

import "./globals.css";
import { ThemeEnforcer } from "@/components/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Revolution Science Academy",
  description: "Revolution Science Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" 
      className="light" // Force light mode at HTML level
    suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Force light theme
          enableSystem={false} // Disable system preference detection
          storageKey="my-app-theme" // Unique key to prevent conflicts

        >
          <ThemeEnforcer />

          {/* defaultTheme="system | light | dark" */}
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
