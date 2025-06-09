import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'Dinas Pendidikan DKI Jakarta',
    template: '%s | Dinas Pendidikan DKI Jakarta',
  },
  description: 'Informasi dan artikel resmi dari Dinas Pendidikan DKI Jakarta.',
  openGraph: {
    title: 'Dinas Pendidikan DKI Jakarta',
    description: 'Informasi dan artikel resmi dari Dinas Pendidikan DKI Jakarta.',
    siteName: 'Dinas Pendidikan DKI Jakarta',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/assets/favicon.ico',
  },
  manifest: '/manifest.json',
}

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
        <AuthProvider>
        {children}
        <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
