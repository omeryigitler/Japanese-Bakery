import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type MenuItem = {
  id: string;
  name: string;
  price: string;
  desc: string;
  image: string;
};

const menuItems: MenuItem[][] = [
  // Row 1: Cakes
  [
    { id: 'item1', name: 'Matcha Layer Cake', price: '€6.00', desc: 'Sponge cake with premium matcha', image: '/item1.png' },
    { id: 'item2', name: 'Hojicha Sandwich', price: '€5.50', desc: 'Soft sponge with roasted tea cream', image: '/item2.png' },
    { id: 'item3', name: 'Yuzu Butter Sand', price: '€5.80', desc: 'Citrusy tart with light cream', image: '/item3.png' }
  ],
  // Row 2: Cheesecakes & Tarts
  [
    { id: 'item4', name: 'Basque Cheesecake', price: '€4.50', desc: 'Classic burnt cheesecake', image: '/item4.png' },
    { id: 'item5', name: 'Pistachio Tart', price: '€4.90', desc: 'Rich pistachio and cream', image: '/item5.png' },
    { id: 'item6', name: 'Matcha Basque', price: '€3.50', desc: 'Burnt cheesecake with Kyoto matcha', image: '/item6.png' }
  ],
  // Row 3: Drinks
  [
    { id: 'item7', name: 'Strawberry Matcha', price: '€3.00', desc: 'Iced matcha latte with strawberry cream', image: '/item7.png' },
    { id: 'item8', name: 'Iced Hojicha', price: '€3.50', desc: 'Roasted green tea latte', image: '/item8.png' },
    { id: 'item9', name: 'Cold Brew Sencha', price: '€4.00', desc: 'Refreshing cold brew green tea', image: '/item9.png' }
  ]
];

export default function Menu() {
  const [focusedGroupIndex, setFocusedGroupIndex] = useState<number | null>(null);
  const [focusedItemIndex, setFocusedItemIndex] = useState<number>(0);

  const handlePrev = () => setFocusedItemIndex((prev) => (prev - 1 + 3) % 3);
  const handleNext = () => setFocusedItemIndex((prev) => (prev + 1) % 3);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center max-w-6xl mx-auto pt-8">
      
      <AnimatePresence mode="wait">
        {focusedGroupIndex === null ? (
          <motion.div 
            key="grid"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col h-full"
          >
            <div className="flex-1 flex flex-col justify-center gap-6 sm:gap-10 pb-12 px-2">
               {menuItems.map((row, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
                     {row.map((item, colIndex) => (
                        <div 
                           key={item.id} 
                           onClick={() => {
                             setFocusedGroupIndex(rowIndex);
                             setFocusedItemIndex(colIndex);
                           }}
                           className="flex items-center gap-4 cursor-pointer group p-3 transition-all duration-300"
                        >
                           <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 relative flex items-center justify-center overflow-visible">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-[120%] h-[120%] object-contain drop-shadow-md transition-transform duration-700 group-hover:scale-110" 
                                referrerPolicy="no-referrer"
                              />
                           </div>
                           <div className="flex flex-col">
                              <span className="font-sans text-base font-bold text-cyan-950 leading-tight group-hover:text-[#087ca8] transition-colors drop-shadow-sm">{item.name}</span>
                              <span className="font-sans text-xs text-cyan-800 leading-snug mt-1 opacity-80">{item.desc}</span>
                              <span className="font-sans text-sm font-bold text-pink-600 mt-2 tracking-widest">{item.price}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex flex-col items-center justify-center relative pb-8"
          >
            <div className="relative w-full h-[280px] sm:h-[380px] flex items-center justify-center mb-6 sm:mb-10 mt-8 sm:mt-12">
               {menuItems[focusedGroupIndex].map((item, index) => {
                  let position = 'center';
                  if (index === focusedItemIndex) position = 'center';
                  else if (index === (focusedItemIndex - 1 + 3) % 3) position = 'left';
                  else position = 'right';

                  return (
                     <motion.div
                        key={item.id}
                        initial={false}
                        animate={{
                           x: position === 'center' ? '0%' : position === 'left' ? '-110%' : '110%',
                           scale: position === 'center' ? 1 : 0.75,
                           opacity: position === 'center' ? 1 : 0.5,
                           filter: position === 'center' ? 'blur(0px)' : 'blur(3px)',
                           zIndex: position === 'center' ? 10 : 0,
                           y: 0
                        }}
                        whileHover={{ y: position === 'center' ? 0 : -10, opacity: position === 'center' ? 1 : 0.7 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute w-52 h-64 sm:w-72 sm:h-[340px] flex items-center justify-center p-4 cursor-pointer"
                        onClick={() => {
                          if (position !== 'center') {
                             setFocusedItemIndex(index);
                          }
                        }}
                     >
                        <img 
                           src={item.image} 
                           alt={item.name} 
                           className="w-full h-full object-contain drop-shadow-[0_15px_35px_rgba(0,10,30,0.15)]" 
                           referrerPolicy="no-referrer"
                        />
                     </motion.div>
                  )
               })}
            </div>

            <div className="text-center max-w-lg px-4 z-10 relative mt-4 sm:mt-8">
              <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-cyan-950 mb-1.5">
                {menuItems[focusedGroupIndex][focusedItemIndex].name}
              </h3>
              <p className="font-sans text-sm sm:text-base text-cyan-800/80 font-medium leading-relaxed mb-3">
                {menuItems[focusedGroupIndex][focusedItemIndex].desc}
              </p>
              <p className="font-sans text-lg sm:text-xl font-bold text-pink-600 tracking-widest">
                {menuItems[focusedGroupIndex][focusedItemIndex].price}
              </p>
            </div>
            
            <div className="flex gap-8 mt-6 items-center z-10 relative">
               <button onClick={handlePrev} className="text-cyan-950/40 hover:text-cyan-950 transition-colors p-2 outline-none hover:bg-white/30 rounded-full">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
               </button>
               <div className="flex gap-2.5">
                 {[0, 1, 2].map((idx) => (
                   <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === focusedItemIndex ? 'bg-cyan-950 scale-125' : 'bg-cyan-950/20'}`} />
                 ))}
               </div>
               <button onClick={handleNext} className="text-cyan-950/40 hover:text-cyan-950 transition-colors p-2 outline-none hover:bg-white/30 rounded-full">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
               </button>
            </div>

            <motion.button 
              onClick={() => setFocusedGroupIndex(null)}
              animate={{ 
                opacity: [0.75, 1, 0.75], 
                scale: [0.98, 1.02, 0.98],
                boxShadow: [
                  '0 4px 15px -3px rgba(8, 124, 168, 0.1)', 
                  '0 10px 25px -3px rgba(8, 124, 168, 0.25)', 
                  '0 4px 15px -3px rgba(8, 124, 168, 0.1)'
                ]
              }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, opacity: 1, boxShadow: '0 10px 25px -3px rgba(8, 124, 168, 0.3)', transition: { duration: 0.2 } }}
              className="mt-10 sm:mt-12 px-6 py-2.5 sm:px-8 sm:py-3 border border-white/50 bg-white/40 backdrop-blur-md rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-cyan-950 flex items-center gap-3 z-10 relative outline-none"
            >
              <motion.div
                animate={{ x: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              </motion.div>
              <span className="mt-[1px]">BACK TO MENU</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

