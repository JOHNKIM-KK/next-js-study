"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function ProductsError({ error, reset }: Props) {
  useEffect(() => {
    console.log("mj : error", error);
  }, [error]);

  return (
    <div>
      <h2>에러 발생 에러 발생!</h2>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  );
}
