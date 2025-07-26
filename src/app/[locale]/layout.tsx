import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import "./../globals.css";
import { ThemeEnforcer } from "@/components/ThemeScript";

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
// app/[locale]/layout.tsx
import '@fontsource/noto-sans-devanagari/400.css'; // Regular weight
import '@fontsource/noto-sans-devanagari/700.css'; // Bold weight

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

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    return (
        <html lang={locale}
            className="light" // Force light mode at HTML level
            suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NextIntlClientProvider>
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
                </NextIntlClientProvider>
            </body>
        </html>
    );
}