import Link from "next/link";
import styles from "./layout.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "멋진제품사이트 | 전체 제품 확인",
  description: "멋진 제품을 확인해보세요.",
};

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
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
};
export default ProductLayout;
