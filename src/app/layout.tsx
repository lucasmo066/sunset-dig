import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
  showNav = true // Default to true, so Nav is shown by default
}: Readonly<{
  children: React.ReactNode;
  showNav?: boolean; // Prop to indicate whether to show Nav or not
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {typeof window !== 'undefined' && showNav && <Nav />}
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
