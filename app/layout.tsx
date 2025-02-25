import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useCartStore from "./useCartStore";
export const metadata: Metadata = {
  title: "Zee Store",
  description: "Built by Murad Siddiqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-[100vh] overflow-x-hidden  ">
        <Header />
        <div className="min-h-[calc(100vh-150px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}