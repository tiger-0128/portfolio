import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asahi Nakamura 中村朝陽 | Developer Portfolio",
  description:
    "Full-stack developer specializing in Web, Mobile, AI/SaaS, automation, games, and 3D — Asahi Nakamura portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- CDN fonts match original static site */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;700;900&family=Inter:wght@300;400;500;600;700;800&family=Orbitron:wght@400;500;700;900&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
