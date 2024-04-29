import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunset Digital",
  description: "Sunset Digital is a digital agency that crafts innovative solutions to propel your online presence and drive growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <body className={inter.className}>
        
          <main>
          <Nav />
            {children}
          </main>
      
      </body>
      </ThemeProvider>
    </html>
  );
}

