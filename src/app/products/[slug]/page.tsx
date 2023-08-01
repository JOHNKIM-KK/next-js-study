import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default function PantsPage({ params }: Props) {
  if (params.slug === "noting") {
    notFound();
  }

  return <h1>{params.slug} 페이지</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
