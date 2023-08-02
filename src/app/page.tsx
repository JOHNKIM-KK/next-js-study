import Image from "next/image";
import os from "os";
import Counter from "@/components/Counter";

export default function Home() {
  console.log("mj : 11");
  console.log("mj : os", os.hostname());
  return (
    <>
      <h1>home page!</h1>
      <Counter />
    </>
  );
}
