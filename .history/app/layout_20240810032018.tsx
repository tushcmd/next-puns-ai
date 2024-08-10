import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from '../components/providers'

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
    <html lang="en">
      <body className={`bg-background text-color {inter.className} w-full overflow-y-visible overflow-x-hidden`}>
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}
