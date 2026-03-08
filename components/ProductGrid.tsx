//components>ProductGrid.tsx

"use client";
import { motion } from "framer-motion";
import { Box, TrendingUp, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProductGrid() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching live data from BambooMall backend
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/products");
        const data = await res.json();
        
        // Updated to perfectly match your Supabase public.products schema
        const liveData = data.map((item: any) => ({
          id: item.id,
          name: item.title || "Unnamed Product", 
          sku: `SKU-${item.id.toString().split('-')[0].toUpperCase()}`, 
          price: item.price ? `$${item.price}` : "N/A",
          moq: item.min_order || 0, 
          factory: item.brand || item.supplier || "Verified Factory", 
        }));

        setProducts(liveData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto md:px-6 pb-20">
      {/* Section Header */}
      <div className="flex items-center justify-between px-4 md:px-0 mb-6">
        <h2 className="text-xl font-bold text-zinc-100">Live Sourcing Feed</h2>
        <div className="flex items-center gap-2 text-sm text-emerald-500 font-mono">
          <TrendingUp className="w-4 h-4" />
          <span>Market Active</span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
        </div>
      ) : (
        /* Grid Container: Flat edge-to-edge on mobile, Bento cards on desktop */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col p-4 md:p-6 bg-transparent md:bg-zinc-900/40 border-b border-zinc-800 md:border md:rounded-2xl hover:bg-zinc-900/80 transition-colors"
            >
              {/* Factory Badge (Sky Blue) */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-medium px-2 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {product.factory}
                </span>
                <Box className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              </div>

              {/* Product Info */}
              <h3 className="text-lg font-semibold text-zinc-100 mb-1">{product.name}</h3>
              <p className="text-sm text-zinc-500 font-mono mb-6">SKU: {product.sku}</p>

              {/* Financial Data: Mono Font & Tabular Nums */}
              <div className="mt-auto grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800/50">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Wholesale</p>
                  <p className="text-lg font-medium text-emerald-400 font-mono tabular-nums">{product.price}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-1">MOQ</p>
                  <p className="text-lg font-medium text-zinc-300 font-mono tabular-nums">{product.moq}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}