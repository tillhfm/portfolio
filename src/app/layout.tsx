import type {Metadata} from "next"
import {Geist} from "next/font/google"
import "./globals.css"
import {Toaster} from "@/components/ui/sonner"
import {cn} from "@/lib/utils"
import {ErrorBoundary} from "@/components/error-boundary"
import {Providers} from "@/components/providers"

const geist = Geist({subsets: ['latin'], variable: '--font-sans'});

/**
 * Static Next.js metadata for all routes. `metadataBase` resolves relative
 * image paths in Open Graph / Twitter cards against the production domain.
 * Configures a 1200×630 OG image, Twitter large-image card, and permissive
 * robots rules.
 */
export const metadata: Metadata = {
    metadataBase: new URL("https://tillhfm.de"),
    title: "Till Hoffmann — Jr.-Softwareentwickler aus Dresden | Portfolio",
    description:
        "Portfolio von Till Hoffmann, Junior-Softwareentwickler bei XIMA MEDIA GmbH in Dresden. " +
        "Erfahrung in Java, TypeScript, Python, Kotlin, SpringBoot und Next.js.",
    alternates: {
        canonical: "https://tillhfm.de",
    },
    openGraph: {
        title: "Till Hoffmann — Jr.-Softwareentwickler aus Dresden",
        description:
            "Portfolio von Till Hoffmann, Junior-Softwareentwickler bei XIMA MEDIA GmbH in Dresden. " +
            "Erfahrung in Java, TypeScript, Python, Kotlin, SpringBoot und Next.js.",
        url: "https://tillhfm.de",
        siteName: "Till Hoffmann — Portfolio",
        locale: "de_DE",
        type: "website",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "Till Hoffmann — Jr.-Softwareentwickler aus Dresden",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: "Till Hoffmann — Jr.-Softwareentwickler aus Dresden",
        card: "summary_large_image",
        images: ["/opengraph-image"],
    },
}

/**
 * Root layout applied to every route. Wraps children in an {@link ErrorBoundary}
 * so rendering errors show a localised fallback instead of a blank page.
 * Centres content in a `max-w-2xl` container for readability on wide viewports.
 */
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="de" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
        <body
            className={cn(
                "min-h-screen bg-background antialiased !px-6 flex justify-center",
                geist.className
            )}
        >
        <Providers>
            <div className="max-w-2xl h-full w-full"><ErrorBoundary>{children}</ErrorBoundary></div>
            <Toaster/>
        </Providers>
        </body>
        </html>
    )
}
