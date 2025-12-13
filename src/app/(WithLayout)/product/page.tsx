import { Suspense } from "react";
import ProductClient from "./ui/product";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductClient />
    </Suspense>
  );
}
