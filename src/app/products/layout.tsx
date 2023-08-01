import styles from "./layout.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 전체 제품 확인 ",
  description: "G멋진 제품 을 확인해 보세요.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <nav className={styles.nav}>
          <Link href="/products/women">여성옷</Link>
          <Link href="/products/men">남성옷</Link>
        </nav>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
