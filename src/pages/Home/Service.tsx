"use client"

import SectionTitle from "../../components/ui/shared/SectionTitle"
import ServiceCard from "../../components/ui/shared/SeviceCard"
import { useServices } from "../../api/useServices"

export default function Service() {
  const { data, loading } = useServices()

  return (
    <div className="bg-black min-h-screen relative overflow-hidden flex items-center py-8 sm:py-12 lg:py-16">
      {/* Background Effects */}
      <div className="absolute top-[15%] right-[5%] sm:right-[10%] w-48 sm:w-64 lg:w-80 xl:w-96 h-48 sm:h-64 lg:h-80 xl:h-96 bg-gradient-radial from-green-400/3 to-transparent rounded-full blur-3xl sm:blur-[80px] animate-float" />

      <div className="absolute bottom-[15%] left-[2%] sm:left-[5%] w-32 sm:w-48 lg:w-56 xl:w-64 h-32 sm:h-48 lg:h-56 xl:h-64 bg-gradient-radial from-yellow-400/3 to-transparent rounded-full blur-2xl sm:blur-[60px] animate-float-reverse" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Title */}
        <SectionTitle
          sTitle="My Services"
          bTitle="I Provide the Best Service for You."
          description="They also ensure that the end-to-end journey with their products or services meets desired outcomes identifies new opportunities to create better user experiences."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 lg:mt-16 px-2 sm:px-4 lg:px-6">
          {(loading ? [] : data).map((service: any, index: number) => (
            <ServiceCard
              key={service._id || index}
              image={service.imageUrl || ""}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
