// import "./globals.css";
import styles from "./layout.module.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({ weight: "700", subsets: ["latin"] });

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
    <html lang="en" className={sans.className}>
      <body>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note App</h1>
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
