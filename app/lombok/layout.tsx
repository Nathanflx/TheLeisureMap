import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lombok Travel - Paket Wisata Terbaik ke Lombok",
  description: "Jelajahi keindahan Lombok dengan paket wisata terbaik dan harga terjangkau. Dari Gili Islands hingga Gunung Rinjani.",
};

export default function LombokLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}