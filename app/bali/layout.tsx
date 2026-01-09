import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bali Travel - Paket Wisata Terbaik ke Bali",
  description: "Jelajahi keindahan Bali dengan paket wisata terbaik. Dari Ubud hingga Kuta, pengalaman tak terlupakan menanti.",
};

export default function BaliLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}