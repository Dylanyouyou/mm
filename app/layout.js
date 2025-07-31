import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "$KITTY - Cryptocurrency Token",
  description: "Official landing page for $KITTY cryptocurrency token",
  keywords: ["cryptocurrency", "token", "blockchain", "crypto", "KITTY"],
  authors: [{ name: "KITTY Team" }],
  robots: "index, follow",
  openGraph: {
    title: "$KITTY - Cryptocurrency Token",
    description: "Official landing page for $KITTY cryptocurrency token",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "$KITTY - Cryptocurrency Token",
    description: "Official landing page for $KITTY cryptocurrency token",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#eac837" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
