import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  key?: React.Key;
  product: Product;
  onClick: () => void;
  index: number;
}

export default function ProductCard({ product, onClick, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group cursor-pointer flex flex-col"
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#1a1a1a] rounded-lg border border-white/5">
        <motion.img
          layoutId={`image-${product.id}`}
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <span className="bg-black/60 backdrop-blur-md px-8 py-3 text-xs tracking-[0.2em] text-white uppercase border border-white/20">
            Discover
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow items-center text-center">
        <h3 className="text-lg font-light tracking-wide text-white/90 mb-2">
          {product.name}
        </h3>
        <p className="text-xs font-serif tracking-widest text-white/40 mb-4">
          {product.japaneseName}
        </p>
      </div>
    </motion.div>
  );
}
