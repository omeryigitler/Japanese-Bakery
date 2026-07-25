export default function Hero() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Center Large Text */}
      <div className="text-center w-full">
        <h1 className="font-display text-[24vw] sm:text-[18vw] leading-[0.75] tracking-normal text-[#087ca8] drop-shadow-lg">
          KYOTO
        </h1>
        <p className="text-[10px] sm:text-sm tracking-[0.6em] text-pink-600 font-bold uppercase mt-4 sm:mt-6 pl-[0.6em]">
          Japanese Bakery
        </p>
      </div>

      {/* Left Text Box */}
      <div className="absolute top-[75%] left-0 max-w-[280px] hidden md:block">
        <p className="text-xs text-cyan-950/90 leading-[1.8] font-medium text-left border-l-[3px] border-pink-400 pl-4 py-1">
          Experience the authentic taste of Kyoto. We craft our pastries and beverages with premium ingredients, bringing the delicate balance of tradition and modern flavors to you.
        </p>
      </div>

      {/* Right Text Box */}
      <div className="absolute top-[75%] right-0 max-w-[280px] hidden md:flex flex-col items-end text-right">
        <p className="text-xs text-cyan-950/90 leading-[1.8] font-medium border-r-[3px] border-pink-400 pr-4 py-1">
          From premium matcha lattes to perfectly scorched Basque cheesecakes, every bite is a journey to the heart of Japan's culinary heritage.
        </p>
      </div>
    </div>
  );
}
