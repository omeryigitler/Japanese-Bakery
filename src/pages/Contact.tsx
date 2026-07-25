export default function Contact() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center max-w-4xl mx-auto px-4">
      <div className="text-center mb-8 sm:mb-12">
         <h2 className="font-display text-4xl sm:text-6xl tracking-widest text-[#0a93c7]">VISIT US</h2>
         <p className="font-serif text-[10px] sm:text-xs text-pink-500 tracking-[0.4em] mt-3 uppercase">Address & Contact</p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch w-full rounded-3xl overflow-hidden border border-cyan-900/10 shadow-sm bg-white/40 backdrop-blur-sm">
        
        {/* Left Side (Map + Address) */}
        <div className="flex-1 relative min-h-[160px] md:min-h-[200px] flex items-center justify-center md:justify-end p-6 md:pr-12 group cursor-pointer">
          <a 
            href="https://maps.google.com/?q=15+Ghar+il-Lembi+Street,+Sliema,+Malta" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute inset-0 w-full h-full overflow-hidden rounded-l-3xl md:rounded-tr-none md:rounded-l-3xl"
          >
            <img 
              src="/harita.png" 
              alt="Map"
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[2px] grayscale group-hover:opacity-70 group-hover:blur-0 group-hover:grayscale-0 transition-all duration-700 ease-in-out pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-white/40 group-hover:bg-white/10 transition-colors duration-700 pointer-events-none"></div>
          </a>
          
          <div className="relative z-10 text-center md:text-right pointer-events-none flex flex-col items-center md:items-end">
            <p className="text-sm sm:text-base text-cyan-950 font-bold leading-[1.6] tracking-wide drop-shadow-md">
              15, Ghar il-Lembi Street<br />
              Tas-Sliema, SLM 1562<br />
              Malta
            </p>
          </div>
        </div>

        {/* Center Divider */}
        <div className="w-full h-px md:w-px md:h-auto bg-cyan-900/10 shrink-0 relative z-10"></div>

        {/* Right Side (Hours & Contact) */}
        <div className="flex-1 relative min-h-[160px] md:min-h-[200px] flex flex-col justify-center items-center md:items-start text-center md:text-left p-6 md:pl-12 group cursor-default">
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-r-3xl md:rounded-tl-none md:rounded-r-3xl">
            <img 
              src="/shop.png" 
              alt="Shop" 
              className="absolute inset-0 w-full h-full object-cover object-top scale-[1.25] origin-top opacity-40 blur-[2px] grayscale group-hover:opacity-70 group-hover:blur-0 group-hover:grayscale-0 transition-all duration-700 ease-in-out pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-white/40 group-hover:bg-white/10 transition-colors duration-700 pointer-events-none"></div>
          </div>
          
          <div className="relative z-10 pointer-events-none flex flex-col items-center md:items-start">
            <div className="mb-5">
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-cyan-950 mb-2 font-bold drop-shadow-md">Hours</h3>
              <p className="text-sm sm:text-base text-cyan-950 font-bold leading-[1.6] tracking-wide drop-shadow-md">
                Open Daily<br />
                Closes at 20:00
              </p>
            </div>
            
            <div>
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-cyan-950 mb-2 font-bold drop-shadow-md">Contact</h3>
              <p className="text-base text-[#0a93c7] font-bold tracking-widest mb-1 drop-shadow-md">2708 5059</p>
              <a href="#" className="pointer-events-auto text-[10px] font-serif text-cyan-950/70 hover:text-pink-600 transition-colors border-b border-pink-200 pb-1 tracking-widest drop-shadow-md">
                facebook.com/kyotomalta
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
