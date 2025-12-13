import { Suspense } from "react";
import ShopLayoutClient from "./ui/ShopLayoutClient";
import ShopContent from "./ui/Shop";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ShopLayoutClient>
        <ShopContent />
      </ShopLayoutClient>
    </Suspense>
  );
}
