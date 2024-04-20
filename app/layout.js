import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    (
      <head>
        <meta
          property="og:title"
          content="Hi you👋, Welcome to my personal portfolio"
        />
        <meta
          name="image"
          property="og:image"
          content="https://i.imgur.com/ril8Lee.png"
        />
        <meta
          property="og:url"
          content="https://example.com/tech-innovations"
        />
        <meta property="og:description" content="DvzZ Portfolio" />
        <meta property="og:site_name" content="Tech World Daily" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content="2023-11-22T10:00:00+00:00" />
      </head>
    ),
    (
      <html className="scroll-smooth" lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    )
  );
}
