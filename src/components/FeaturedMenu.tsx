import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { featuredProducts } from '../data';
import { Product } from '../types';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function FeaturedMenu() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-32 px-6 bg-[#111] relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="font-serif text-white/50 tracking-[0.4em] text-sm block mb-6 uppercase">
            おすすめ
          </span>
          <h2 className="text-4xl md:text-5xl font-display tracking-widest text-white/90 uppercase">
            Curated Selections
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
              onClick={() => setSelectedProduct(product)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
