import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keith Franklin",
  description: "Website for keith franklin's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8211628022281722" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8211628022281722"
          crossOrigin="anonymous"></script>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>


        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning={true}>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <NavBar />
          <div className="mt-16 pt-2">
            {children}
            <SpeedInsights />
          </div>
          <Footer />
        </div>
      </body>
    </html>

  );
}
