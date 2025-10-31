import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// metadata for the whole application
export const metadata: Metadata = {
    title: {
        template: "%s | WordPress & Webflow Expert | Helping Coaches Get 30% More Clients | Codloom",
        default: "WordPress & Webflow Expert | Helping Coaches Get 30% More Clients | Codloom",
    },
    description:
        "Codloom helps coaches, trainers, and consultants build high-converting, SEO-optimized websites using WordPress and Webflow. Increase your credibility and get up to 30% more client inquiries with a stunning, fast website.",
    keywords: [
        "Codloom",
        "WordPress Developer for Coaches",
        "Webflow Developer for Coaches",
        "SEO Friendly Websites",
        "Coaching Website Design",
        "Personal Trainer Website",
        "Fitness Coach Website",
        "Business Coach Web Design",
        "Web Developer for Coaches",
        "Next.js SEO",
        "Freelance Web Developer Bangladesh",
    ],
    authors: [{ name: "Codloom", url: "https://codloom.com" }],
    creator: "Codloom",
    publisher: "Codloom",
    openGraph: {
        title: "WordPress & Webflow Developer for Coaches | Codloom",
        description:
            "Professional website design & development for coaches and trainers. Get a high-performing, SEO-friendly website that attracts more clients — powered by Codloom.",
        url: "https://codloom.com",
        siteName: "Codloom",
        images: [
            {
                url: "https://codloom.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Codloom - Web Developer for Coaches",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Codloom | WordPress & Webflow Developer for Coaches",
        description:
            "Helping coaches build SEO-friendly, credible websites that generate 30% more client inquiries.",
        site: "@codloom",
        creator: "@codloom",
        images: [
            {
                url: "https://codloom.com/og-image.png",
                alt: "Codloom - Helping Coaches Grow Online",
            },
        ],
    },
    verification: {
        google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    metadataBase: new URL("https://codloom.com"),
    alternates: {
        canonical: "https://codloom.com",
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
