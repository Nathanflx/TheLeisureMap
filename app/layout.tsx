import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indonesia Travel Paradise - Pilih Destinasi Impian Anda",
  description: "Jelajahi keindahan Bali dan Lombok. Pilih destinasi favorit Anda untuk merencanakan perjalanan tak terlupakan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}