import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-[#111] overflow-hidden"
    >
      {/* Outer border frame */}
      <div className="relative w-full h-full border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col items-center justify-center">
        
        {/* Background Image with parallax */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Kyoto Bakery" 
            className="w-full h-[120%] object-cover opacity-60 origin-top"
            referrerPolicy="no-referrer"
          />
          {/* Moody gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111]/40 via-transparent to-[#111]/90" />
          <div className="absolute inset-0 bg-[#151c19]/30 mix-blend-overlay" />
        </motion.div>

        {/* Foreground Content */}
        <motion.div style={{ opacity }} className="absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-12">
          
          {/* Top Nav Area */}
          <div className="flex justify-center items-start gap-12 sm:gap-24 w-full pt-2">
            <div className="text-center mt-2">
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/80">Kyoto, Japan</p>
              <p className="font-serif text-sm sm:text-lg text-white mt-1">京都</p>
            </div>
            <div className="font-serif text-5xl sm:text-6xl text-white drop-shadow-md font-light">茶</div>
            <div className="text-center mt-2">
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/80">Kyoto, Japan</p>
              <p className="font-serif text-sm sm:text-lg text-white mt-1">京都</p>
            </div>
          </div>

          {/* Center Large Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-center w-full">
            <h1 className="font-display text-[24vw] sm:text-[18vw] leading-[0.75] tracking-normal text-white/95 drop-shadow-2xl">
              KYOTO
            </h1>
            <p className="text-[10px] sm:text-sm tracking-[0.6em] text-white/80 uppercase mt-4 sm:mt-6 pl-[0.6em]">
              Japanese Bakery
            </p>
          </div>

          {/* Left Text Box */}
          <div className="absolute bottom-[22%] left-6 sm:left-12 max-w-[280px] hidden md:block">
            <p className="text-xs text-white/90 leading-[1.8] font-light">
              Experience the authentic taste of Kyoto. We craft our pastries and beverages with premium ingredients, bringing the delicate balance of tradition and modern flavors to you.
            </p>
          </div>

          {/* Right Text Box & Button */}
          <div className="absolute bottom-[22%] right-6 sm:right-12 max-w-[280px] hidden md:flex flex-col items-end text-right">
            <p className="text-xs text-white/90 leading-[1.8] font-light mb-6">
              From premium matcha lattes to perfectly scorched Basque cheesecakes, every bite is a journey to the heart of Japan's culinary heritage.
            </p>
            <button className="px-10 py-3 border border-white/40 text-[10px] tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-colors">
              Explore Menu
            </button>
          </div>

          {/* Bottom Nav Area */}
          <div className="flex justify-between items-end w-full pb-2">
            <button className="text-[10px] tracking-[0.2em] uppercase flex items-center gap-6 text-white/80 hover:text-white transition-colors">
              <span>PREVIOUS</span>
              <div className="flex items-center">
                <span className="w-2 h-2 border-l border-b border-current transform rotate-45 translate-x-[1px]"></span>
                <span className="w-12 sm:w-24 h-[1px] bg-current"></span>
              </div>
            </button>
            <p className="font-serif text-sm sm:text-lg text-white/90 tracking-widest absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-14">
              京都の味を、あなたに。
            </p>
            <button className="text-[10px] tracking-[0.2em] uppercase flex items-center gap-6 text-white/80 hover:text-white transition-colors">
              <div className="flex items-center">
                <span className="w-12 sm:w-24 h-[1px] bg-current"></span>
                <span className="w-2 h-2 border-r border-t border-current transform rotate-45 -translate-x-[1px]"></span>
              </div>
              <span>NEXT</span>
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
