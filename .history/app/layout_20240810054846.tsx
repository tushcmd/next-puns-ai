import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Puns AI",
  description: "Generate puns from a topic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </NextThemeProvider>
      </body>
    </html>
  );
}