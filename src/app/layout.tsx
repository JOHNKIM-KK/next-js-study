// import "./globals.css";
import styles from "./layout.module.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 전체 ",
  description: "G멋진 제품 을 판매하는 곳입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1>Demo Note App</h1>
          <nav className={styles.nav}>
            <Link href="/products">products</Link>
            <Link href="/contact">contact</Link>
            <Link href="/about">about</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
