import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { Product } from '../types';
import { useEffect } from 'react';

interface ModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl bg-[#151515] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/10 rounded-xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white hover:text-black backdrop-blur-md rounded-full text-white transition-colors"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-[#111]">
          <motion.img
            layoutId={`image-${product.id}`}
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent md:bg-gradient-to-r" />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
          {/* Subtle Watermark */}
          <div className="absolute top-12 right-12 text-6xl font-serif text-white/5 select-none pointer-events-none">
            {product.japaneseName.substring(0, 2)}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[10px] font-light tracking-[0.3em] text-white/50 uppercase mb-4 block">
              {product.category}
            </span>
            
            <h2 className="text-3xl md:text-5xl font-light text-white/90 mb-2 leading-tight">
              {product.name}
            </h2>
            
            <p className="text-sm font-serif text-white/40 mb-8 tracking-widest">
              {product.japaneseName}
            </p>

            <p className="text-white/70 leading-relaxed mb-10 font-light text-sm md:text-base">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-8 border-t border-white/10 pt-8">
              <span className="text-2xl font-light text-white tracking-wider">
                {product.price}
              </span>
              
              <button className="px-8 py-3 border border-white/30 text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">
                Order Now
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
