import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons:{
    icon:"/images/cstad.png"
  },
  title:{
    template: "%s - My Shop",
    default: "My Shop"
  },
  description: "This is description shop",
  keywords: ['shop', 'sell'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <NextUILayout>
          <NavbarComponent/>
          <Suspense fallback={<LoadingComponent />} >
            {children}
          </Suspense>
        </NextUILayout>
      </body>
    </html>
  );
}
