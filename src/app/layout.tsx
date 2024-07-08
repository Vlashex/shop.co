import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/widgets/Header/header";
import Footer from "@/widgets/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "FIND CLOTHES THAT MATCHES YOUR STYLE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
