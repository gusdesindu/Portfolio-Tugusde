import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - I.B.Gede Ambara Sindu Negara",
  description: "Portfolio website showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" translate="no" className="notranslate">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 