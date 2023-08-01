import Link from "next/link";

const product = ["shirt", "pants", "skirt", "shoes"];

export default function PantsPage() {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {product.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
