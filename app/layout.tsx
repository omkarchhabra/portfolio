import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omkar Chhabra | Portfolio",
  description: "Portfolio website of Omkar Chhabra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}