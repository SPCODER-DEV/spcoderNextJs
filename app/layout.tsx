import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbare from "@/components/naveBare/Navbare";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "spcoder",
  description: " موقع الكتروني الرسمي للاستاذ [name ] ولاية تجربة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbare/>
        {children}
        </body>
    </html>
  );
}
