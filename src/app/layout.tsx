import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });

//set the metadata
// export const meta = {
//   title: "Sunset Digital",
//   description: "Sunset Digital is a digital agency that helps businesses grow online.",
//   keywords: "web design, web development, digital marketing",
// };

export default function RootLayout({
  children,
  showNav = true // Default to true, so Nav is shown by default
}: Readonly<{
  children: React.ReactNode;
  showNav?: boolean;
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
