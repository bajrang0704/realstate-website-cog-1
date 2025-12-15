import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Deccan Veda Reality - Premium Real Estate in Hyderabad",
    description:
        "Discover premium plotted developments with Deccan Veda Reality. Heritage County offers world-class amenities and clear titles in prime locations.",
    keywords: [
        "real estate",
        "hyderabad plots",
        "plotted development",
        "deccan veda",
        "heritage county",
        "premium plots",
    ],
    authors: [{ name: "Deccan Veda Reality" }],
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#0F172A",
    openGraph: {
        type: "website",
        locale: "en_IN",
        siteName: "Deccan Veda Reality",
        title: "Deccan Veda Reality - Premium Real Estate",
        description: "Premium plotted developments in Hyderabad",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
            </head>
            <body className="font-sans" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
