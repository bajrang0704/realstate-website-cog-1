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
    title: "Deccan Veda Realty - Premium Real Estate in Hyderabad",
    description:
        "Discover premium plotted developments with Deccan Veda Realty. Heritage County offers world-class amenities and clear titles in prime locations.",
    keywords:
        "Deccan Veda Realty, Real Estate Hyderabad, Open Plots, Shadnagar, Heritage County, Premium Plots",
    authors: [{ name: "Deccan Veda Realty" }],
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#0F172A",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://deccanvedarealty.com",
        siteName: "Deccan Veda Realty",
        title: "Deccan Veda Realty - Premium Real Estate",
        description: "Premium plotted developments in Hyderabad",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
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
