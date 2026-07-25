import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Hero from './pages/Hero';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

const pages = [Hero, Menu, About, Contact];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + pages.length) % pages.length);
  };

  const CurrentPage = pages[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <main className="min-h-screen bg-[#e8f4f8] font-sans text-cyan-950 selection:bg-pink-200 selection:text-pink-900 relative">
      <div className="relative h-screen w-full flex items-center justify-center p-4 sm:p-8 overflow-hidden">
        <div className="relative w-full h-full border border-cyan-200/50 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col items-center justify-center shadow-xl bg-[#e8f4f8]">
          
          {/* Global Background */}
          <div className="absolute inset-0 z-0">
            <motion.div
              initial={false}
              animate={{ opacity: currentIndex === 0 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img 
                src="/hero.png" 
                alt="Kyoto Bakery" 
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Top Nav (Fixed) */}
          <div className="absolute top-4 sm:top-10 left-0 w-full z-50 flex justify-center items-start gap-8 sm:gap-24 px-4 sm:px-6 pointer-events-none">
            <div className="text-center mt-1 sm:mt-2">
              <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-cyan-900/90 font-bold">Kyoto, Japan</p>
              <p className="font-serif text-xs sm:text-lg text-cyan-950 mt-0.5 sm:mt-1 font-medium">京都</p>
            </div>
            <div className="font-serif text-4xl sm:text-6xl text-[#087ca8] drop-shadow-md font-normal">茶</div>
            <div className="text-center mt-1 sm:mt-2">
              <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-cyan-900/90 font-bold">Sliema, Malta</p>
              <p className="font-serif text-xs sm:text-lg text-cyan-950 mt-0.5 sm:mt-1 font-medium">マルタ</p>
            </div>
          </div>

          {/* Page Content */}
          <div className="absolute inset-0 z-10 pt-16 sm:pt-20 pb-16 sm:pb-20">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full h-full no-scrollbar overflow-y-auto px-4 sm:px-12 flex flex-col justify-center"
              >
                <CurrentPage />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Nav (Fixed) */}
          <div className="absolute bottom-4 sm:bottom-10 left-0 w-full z-50 flex justify-between items-end px-4 sm:px-12 pointer-events-none">
            <button 
              onClick={() => paginate(-1)}
              className="pointer-events-auto group text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-4 sm:gap-6 text-cyan-950 hover:text-[#087ca8] transition-colors drop-shadow-sm"
            >
              <span className="hidden sm:inline group-hover:-translate-x-1 transition-transform duration-500">PREVIOUS</span>
              <motion.div 
                animate={{ x: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="flex items-center drop-shadow-sm"
              >
                <span className="w-2 h-2 border-l-[1.5px] border-b-[1.5px] border-current transform rotate-45 translate-x-[1px]"></span>
                <span className="w-12 sm:w-24 h-[1.5px] bg-current group-hover:w-16 sm:group-hover:w-32 transition-all duration-500"></span>
              </motion.div>
            </button>
            
            <div className="flex flex-col items-center gap-3">
              <p className="font-serif text-xs sm:text-base text-cyan-950 font-medium tracking-[0.2em] text-center whitespace-nowrap drop-shadow-sm">
                京都の味を、あなたに。
              </p>
              <div className="flex gap-3 pointer-events-auto mt-2">
                {pages.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      idx === currentIndex ? 'bg-[#087ca8] scale-125' : 'bg-cyan-900/30 hover:bg-[#087ca8]/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button 
              onClick={() => paginate(1)}
              className="pointer-events-auto group text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-4 sm:gap-6 text-cyan-950 hover:text-[#087ca8] transition-colors drop-shadow-sm"
            >
              <motion.div 
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="flex items-center drop-shadow-sm"
              >
                <span className="w-12 sm:w-24 h-[1.5px] bg-current group-hover:w-16 sm:group-hover:w-32 transition-all duration-500"></span>
                <span className="w-2 h-2 border-r-[1.5px] border-t-[1.5px] border-current transform rotate-45 -translate-x-[1px]"></span>
              </motion.div>
              <span className="hidden sm:inline group-hover:translate-x-1 transition-transform duration-500">NEXT</span>
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}

