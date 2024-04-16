import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "David Esteban",
  description: "David Esteban Portfolio",
  favicon: "/buscar.png",
};

export default function RootLayout({ children }) {
  return (
    (
      <head>
        <link rel="png" href="/buscar.png" sizes="any" />
      </head>
    ),
    (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    )
  );
}
