import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.workwithomkar.com"),
  title: "Omkar Chhabra | Software Engineer",
  description:
    "Software Engineer specializing in full-stack development, AI applications, and scalable web systems. Explore my projects, experience, and technical skills.",
  keywords: [
    "Omkar Chhabra",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "AI Developer",
    "React Developer",
  ],
  authors: [{ name: "Omkar Chhabra" }],
  creator: "Omkar Chhabra",
  openGraph: {
    title: "Omkar Chhabra | Software Engineer",
    description:
      "Explore my portfolio featuring full-stack projects, AI applications, and modern web development work.",
    url: "https://www.workwithomkar.com",
    siteName: "Omkar Chhabra Portfolio",
    images: [
      {
        url: "/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Omkar Chhabra Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omkar Chhabra | Software Engineer",
    description:
      "Explore my portfolio featuring full-stack projects, AI applications, and modern web development work.",
    images: ["/portfolio-preview.png"],
  },
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