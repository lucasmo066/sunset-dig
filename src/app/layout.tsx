import React from "react";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  showNav
}: Readonly<{
  children: React.ReactNode;
  showNav?: boolean;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
      
      <body className={inter.className}>
          {typeof window !== 'undefined' && showNav && <Nav />}
          {children}
       
      </body>
      </ThemeProvider>
    </html>
  );
}
