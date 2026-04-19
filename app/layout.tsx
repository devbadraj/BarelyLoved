import type { Metadata } from "next";
import { Geist, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./_components/ThemeProvider";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "BarelyLoved",
  description: "A AI Website to make Website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoSlab.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
