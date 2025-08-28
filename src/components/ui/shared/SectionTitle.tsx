"use client";

interface SectionTitleProps {
  sTitle: string;
  bTitle: string;
  description: string;
}

const SectionTitle = ({ sTitle, bTitle, description }: SectionTitleProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 text-center relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-4 sm:top-5 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-green-400 to-yellow-400 rounded-sm" />

      {/* Small Title */}
      <p className="text-yellow-400 text-sm sm:text-base lg:text-lg font-semibold mb-4 sm:mb-5 lg:mb-6 uppercase tracking-wider sm:tracking-widest relative">
        {sTitle}
      </p>

      {/* Main Content Container */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10">
        {/* Big Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl bg-gradient-to-br from-white via-green-400 to-yellow-400 bg-clip-text text-transparent text-center">
          {bTitle}
        </h2>

        {/* Description */}
        <div className="bg-green-400/5 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-green-400/20 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl relative">
          <div className="absolute -top-2 sm:-top-2.5 left-6 sm:left-8 w-4 sm:w-5 h-4 sm:h-5 bg-gradient-to-br from-green-400 to-yellow-400 rounded-full shadow-lg shadow-green-400/50" />
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed sm:leading-loose m-0 text-center">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-4 sm:bottom-5 left-1/2 transform -translate-x-1/2 w-10 sm:w-12 lg:w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-green-400 rounded-sm" />
    </div>
  );
};

export default SectionTitle;
