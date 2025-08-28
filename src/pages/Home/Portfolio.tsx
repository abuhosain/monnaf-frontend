"use client"

import PortfolioTabs from "../../components/PortfolioTabs" 
import SectionTitle from "../../components/ui/shared/SectionTitle"

export default function Portfolio() {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Background Effects */}
      <div className="absolute top-[10%] left-[2%] sm:left-[5%] w-56 sm:w-72 md:w-80 lg:w-96 xl:w-[400px] h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] bg-gradient-radial from-green-400/3 to-transparent rounded-full blur-3xl sm:blur-[80px] animate-float" />

      <div className="absolute bottom-[10%] right-[2%] sm:right-[5%] w-40 sm:w-56 md:w-64 lg:w-72 xl:w-[300px] h-40 sm:h-56 md:h-64 lg:h-72 xl:h-[300px] bg-gradient-radial from-yellow-400/3 to-transparent rounded-full blur-2xl sm:blur-[60px] animate-float-reverse" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        {/* Section Title */}
        <SectionTitle
          sTitle="My Portfolio"
          bTitle="Showcasing My Creative Journey"
          description="Explore my diverse portfolio of creative projects spanning graphics design, motion graphics, and video editing. Each project represents a unique challenge solved with creativity and technical expertise."
        />

        {/* Portfolio Tabs (pass data via context/props later if needed) */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <PortfolioTabs />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 p-6 sm:p-8 lg:p-10 bg-green-400/5 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-green-400/20 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl lg:text-3xl text-green-400 mb-3 sm:mb-4 lg:mb-6 font-bold">
            Like What You See?
          </h3>
          <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose">
            These are just a few examples of my work. I'd love to discuss how I can help bring your creative vision to
            life.
          </p>
        </div>
      </div>
    </div>
  )
}
