//app>page.tsx

import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <ProductGrid />
    </div>
  );
}