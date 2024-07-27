import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Till Hoffmann — @trxsson",
   description: "Webseite von Till Hoffmann aus Dresden.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <Head>
            <link
               rel="icon"
               href="/icon?<generated>"
               type="image/<generated>"
               sizes="<generated>"
            />
         </Head>
         <body className={inter.className}>{children}</body>
         <Toaster />
      </html>
   );
}
