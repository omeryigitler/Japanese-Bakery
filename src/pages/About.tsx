export default function About() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center max-w-4xl mx-auto text-center px-4">
      <h2 className="font-display text-5xl sm:text-7xl tracking-widest text-[#0a93c7] mb-10 sm:mb-12">ABOUT US</h2>
      <p className="font-serif text-lg sm:text-2xl text-pink-600 leading-[1.8] mb-10 italic font-medium">
        "A harmony of tradition and modernity, crafted with pure dedication."
      </p>
      <p className="text-xs sm:text-sm text-cyan-950/80 leading-[2.2] font-medium max-w-2xl mx-auto tracking-wide">
        Kyoto Japanese Bakery & Cafe was born from a deep respect for Japanese culinary traditions. 
        We meticulously source premium matcha from Uji, Kyoto, and blend it with contemporary 
        baking techniques to create pastries that are as delicate as they are profound. 
        Our signature Basque cheesecakes, fluffy Japanese sponges, and perfectly balanced beverages 
        offer a fleeting yet unforgettable sensory experience.
      </p>
      <div className="mt-16 w-px h-24 bg-pink-300 mx-auto"></div>
    </div>
  );
}
