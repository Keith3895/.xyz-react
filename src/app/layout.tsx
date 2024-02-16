import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";

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
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <NavBar />
          <div className="mt-16 pt-2">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>

  );
}
