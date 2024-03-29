import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "..styles/globals";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`background color {inter.className} w-full overflow-y-visible overflow-x-hidden`}>{children}</body>
    </html>
  );
}
