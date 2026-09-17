const storefrontImage = 'https://images.unsplash.com/photo-1769921409450-def451ea6e4d?auto=format&fit=crop&fm=jpg&q=82&w=1800';

export default function Contact() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center max-w-4xl mx-auto px-4">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="font-display text-4xl sm:text-6xl tracking-widest text-[#0a93c7]">VISIT US</h2>
        <p className="font-serif text-[10px] sm:text-xs text-pink-500 tracking-[0.4em] mt-3 uppercase">Address & Contact</p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch w-full rounded-3xl overflow-hidden border border-cyan-900/10 shadow-sm bg-white/40 backdrop-blur-sm">
        <div className="flex-1 relative min-h-[160px] md:min-h-[200px] flex items-center justify-center md:justify-end p-6 md:pr-12 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(10,147,199,0.18),transparent_30%),radial-gradient(circle_at_78%_68%,rgba(244,114,182,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.86),rgba(224,242,254,0.72))]" />
          <div className="absolute inset-x-8 top-1/2 h-px bg-cyan-900/10 rotate-[-12deg]" />
          <div className="absolute inset-y-5 left-1/3 w-px bg-cyan-900/10 rotate-[18deg]" />
          <div className="relative z-10 text-center md:text-right pointer-events-none flex flex-col items-center md:items-end">
            <p className="text-[10px] tracking-[0.35em] uppercase text-pink-500 font-bold mb-3">Malta Studio</p>
            <p className="text-sm sm:text-base text-cyan-950 font-bold leading-[1.6] tracking-wide drop-shadow-sm">
              St Julian&apos;s<br />
              Malta
            </p>
          </div>
        </div>

        <div className="w-full h-px md:w-px md:h-auto bg-cyan-900/10 shrink-0 relative z-10"></div>

        <div className="flex-1 relative min-h-[160px] md:min-h-[200px] flex flex-col justify-center items-center md:items-start text-center md:text-left p-6 md:pl-12 group cursor-default overflow-hidden">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={storefrontImage}
              alt="Japanese bakery storefront"
              className="absolute inset-0 w-full h-full object-cover object-center scale-[1.04] opacity-42 blur-[1.5px] grayscale-[0.45] group-hover:opacity-72 group-hover:blur-0 group-hover:grayscale-0 transition-all duration-700 ease-in-out pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-white/45 group-hover:bg-white/18 transition-colors duration-700 pointer-events-none"></div>
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
              <a href="tel:+35699990000" className="pointer-events-auto text-base text-[#0a93c7] font-bold tracking-widest mb-1 drop-shadow-md hover:text-pink-600 transition-colors">
                +356 9999 0000
              </a>
              <p className="text-[10px] font-serif text-cyan-950/70 border-b border-pink-200 pb-1 tracking-widest drop-shadow-md mt-2">
                Kyoto Bakery · St Julian&apos;s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
