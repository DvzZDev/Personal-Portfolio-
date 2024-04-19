import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    (<head></head>),
    (
      <html className="scroll-smooth" lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    )
  );
}
