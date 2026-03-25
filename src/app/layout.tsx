import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Till Hoffmann — tillhfm.de",
   description: "Portfolio von Till Hoffmann aus Dresden.",
   openGraph: {
      title: "Till Hoffmann — tillhfm.de",
      description: "Portfolio von Till Hoffmann aus Dresden.",
      url: "https://tillhfm.de/",
      siteName: "Till Hoffmann — tillhfm.de",
      locale: "de_DE",
      type: "website",
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
      title: "Till Hoffmann — tillhfm.de",
      card: "summary_large_image",
   },
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={cn(
               "min-h-screen bg-background antialiased !px-6 flex justify-center",
               inter.className
            )}
         >
            <div className="max-w-2xl h-full w-full"><ErrorBoundary>{children}</ErrorBoundary></div>
            <Toaster />
         </body>
      </html>
   )
}
