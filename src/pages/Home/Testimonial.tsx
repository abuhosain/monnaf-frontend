"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// Import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import {
  StarFilled,
  EuroCircleOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import SectionTitle from "../../components/ui/shared/SectionTitle";
import { useState, useEffect } from "react";
import { useTestimonials } from "../../api/useTestimonials";

const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const { data: testimonials = [] } = useTestimonials();
  const testimonialsStatic = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      clientName: "Abu Hosain",
      position: "CEO & Founder",
      company: "Digital Dokan",
      location: "Dhaka, Bangladesh",
      rating: 5,
      testimonial:
        "Monnaf is exceptional at his work. His ability to understand complex requirements and deliver outstanding results is remarkable. The user experience he creates is always top-notch, and his attention to detail is unmatched. Working with him has been a game-changer for our business.",
      projectType: "Brand Identity & Web Design",
      completionDate: "March 2024",
      projectValue: "$15,000",
      verified: true,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      clientName: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechFlow Solutions",
      location: "New York, USA",
      rating: 5,
      testimonial:
        "The motion graphics and video editing work delivered exceeded all our expectations. The creativity and technical expertise shown in every frame was outstanding. Our marketing campaigns have seen incredible engagement since we started working together.",
      projectType: "Motion Graphics & Video Production",
      completionDate: "February 2024",
      projectValue: "$12,500",
      verified: true,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      clientName: "Michael Chen",
      position: "Founder & CTO",
      company: "InnovateLab",
      location: "Singapore",
      rating: 5,
      testimonial:
        "Professional, creative, and reliable. The graphics design work transformed our entire brand presence. From logo design to complete brand guidelines, everything was executed flawlessly. Highly recommend for any design project.",
      projectType: "Complete Brand Overhaul",
      completionDate: "January 2024",
      projectValue: "$18,000",
      verified: true,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      clientName: "Emily Rodriguez",
      position: "Creative Director",
      company: "Pixel Perfect Agency",
      location: "Los Angeles, USA",
      rating: 5,
      testimonial:
        "Working with Monnaf has been an absolute pleasure. The video editing skills are world-class, and the ability to bring stories to life through motion is incredible. Every project is delivered on time and beyond expectations.",
      projectType: "Documentary & Commercial Videos",
      completionDate: "April 2024",
      projectValue: "$22,000",
      verified: true,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      clientName: "David Kim",
      position: "Brand Manager",
      company: "StartupHub",
      location: "Seoul, South Korea",
      rating: 5,
      testimonial:
        "The attention to detail and creative vision that Monnaf brings to every project is simply outstanding. Our brand identity has never looked better, and the motion graphics work has elevated our marketing to a whole new level.",
      projectType: "Brand Identity & Motion Graphics",
      completionDate: "May 2024",
      projectValue: "$16,500",
      verified: true,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      clientName: "Lisa Thompson",
      position: "Marketing Manager",
      company: "Creative Studios",
      location: "London, UK",
      rating: 5,
      testimonial:
        "Incredible work ethic and amazing results! The video content created for our campaigns has significantly boosted our engagement rates. Monnaf's understanding of visual storytelling is truly exceptional.",
      projectType: "Video Content & Social Media",
      completionDate: "June 2024",
      projectValue: "$14,000",
      verified: true,
    },
  ];

  const getSlidesPerView = () => {
    if (isMobile) return 1;
    if (isTablet) return 1.5;
    return "auto";
  };

  const getSlideWidth = () => {
    if (isMobile) return "95%";
    if (isTablet) return "85%";
    return "850px";
  };

  return (
    <div
      style={{
        background: "#000000",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "40px 0" : isTablet ? "50px 0" : "60px 0",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Enhanced Background Effects */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: isMobile ? "200px" : isTablet ? "300px" : "400px",
          height: isMobile ? "200px" : isTablet ? "300px" : "400px",
          background:
            "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 15s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: isMobile ? "150px" : isTablet ? "250px" : "320px",
          height: isMobile ? "150px" : isTablet ? "250px" : "320px",
          background:
            "radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "float 18s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? "120px" : isTablet ? "180px" : "220px",
          height: isMobile ? "120px" : isTablet ? "180px" : "220px",
          background:
            "radial-gradient(circle, rgba(138,43,226,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          animation: "float 12s ease-in-out infinite",
        }}
      />

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: isMobile ? "0 15px" : isTablet ? "0 30px" : "0 50px",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* Enhanced Section Title */}
        <SectionTitle
          sTitle="Client Testimonials"
          bTitle="What My Clients Say About My Work"
          description="Don't just take my word for it. Here's what my clients have to say about the quality of work, professionalism, and results delivered on their projects. Real feedback from real clients who've experienced the difference."
        />

        {/* Testimonials Slider */}
        <div
          style={{ marginTop: isMobile ? "50px" : isTablet ? "60px" : "80px" }}
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={getSlidesPerView()}
            coverflowEffect={{
              rotate: isMobile ? 20 : isTablet ? 35 : 50,
              stretch: 0,
              depth: isMobile ? 50 : isTablet ? 75 : 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={!isMobile}
            mousewheel={true}
            keyboard={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[
              EffectCoverflow,
              Pagination,
              Navigation,
              Mousewheel,
              Keyboard,
              Autoplay,
            ]}
            className="testimonial-swiper"
            style={{
              paddingTop: isMobile ? "30px" : isTablet ? "40px" : "50px",
              paddingBottom: isMobile ? "60px" : isTablet ? "70px" : "80px",
            }}
          >
            {(testimonials.length ? testimonials : testimonialsStatic).map((testimonial: any) => (
              <SwiperSlide
                key={testimonial.id}
                style={{
                  width: getSlideWidth(),
                  height: "auto",
                }}
              >
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.95)",
                    border: "1px solid rgba(0, 255, 136, 0.25)",
                    borderRadius: isMobile
                      ? "20px"
                      : isTablet
                      ? "25px"
                      : "30px",
                    padding: isMobile ? "20px" : isTablet ? "30px" : "40px",
                    backdropFilter: "blur(20px)",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow:
                      "0 25px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 255, 136, 0.15)",
                    transition: "all 0.3s ease",
                    margin: isMobile ? "0 10px" : "0",
                  }}
                >
                  {/* Enhanced Background Gradient */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(0,255,136,0.04) 0%, rgba(255,215,0,0.03) 50%, rgba(138,43,226,0.03) 100%)",
                      borderRadius: isMobile
                        ? "20px"
                        : isTablet
                        ? "25px"
                        : "30px",
                    }}
                  />

                  {/* Quote Icon */}
                  <div
                    style={{
                      position: "absolute",
                      top: isMobile ? "15px" : isTablet ? "18px" : "20px",
                      right: isMobile ? "15px" : isTablet ? "20px" : "30px",
                      fontSize: isMobile ? "35px" : isTablet ? "50px" : "60px",
                      color: "rgba(0, 255, 136, 0.15)",
                    }}
                  >
                    <EuroCircleOutlined />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: isMobile || isTablet ? "column" : "row",
                      alignItems:
                        isMobile || isTablet ? "center" : "flex-start",
                      gap: isMobile ? "20px" : isTablet ? "25px" : "40px",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {/* Enhanced Client Image Section */}
                    <div
                      style={{
                        minWidth: isMobile
                          ? "120px"
                          : isTablet
                          ? "150px"
                          : "200px",
                        height: isMobile
                          ? "120px"
                          : isTablet
                          ? "150px"
                          : "200px",
                        position: "relative",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)",
                          padding: "3px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 0 25px rgba(0, 255, 136, 0.4)",
                        }}
                      >
                        <div
                          style={{
                            width: "calc(100% - 6px)",
                            height: "calc(100% - 6px)",
                            borderRadius: "50%",
                            overflow: "hidden",
                            position: "relative",
                            background: "#1a1a1a",
                          }}
                        >
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.clientName}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              filter: "brightness(1.1) contrast(1.1)",
                            }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              const fallback =
                                target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = "flex";
                            }}
                          />
                          {/* Fallback */}
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              background: "#1a1a1a",
                              display: "none",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: isMobile
                                ? "2rem"
                                : isTablet
                                ? "2.5rem"
                                : "3.5rem",
                              fontWeight: "bold",
                              color: "#00ff88",
                            }}
                          >
                            {testimonial.clientName.charAt(0)}
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Decorative Ring */}
                      <div
                        style={{
                          position: "absolute",
                          top: "-8px",
                          left: "-8px",
                          width: "calc(100% + 16px)",
                          height: "calc(100% + 16px)",
                          border: "2px solid rgba(0, 255, 136, 0.3)",
                          borderRadius: "50%",
                          animation: "rotate 25s linear infinite",
                        }}
                      />

                      {/* Verification Badge */}
                      {testimonial.verified && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: isMobile
                              ? "5px"
                              : isTablet
                              ? "8px"
                              : "10px",
                            right: isMobile ? "5px" : isTablet ? "8px" : "10px",
                            width: isMobile
                              ? "25px"
                              : isTablet
                              ? "30px"
                              : "35px",
                            height: isMobile
                              ? "25px"
                              : isTablet
                              ? "30px"
                              : "35px",
                            background: "#00ff88",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 15px rgba(0, 255, 136, 0.6)",
                          }}
                        >
                          <CheckCircleOutlined
                            style={{
                              color: "#000",
                              fontSize: isMobile
                                ? "12px"
                                : isTablet
                                ? "14px"
                                : "16px",
                              fontWeight: "bold",
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Enhanced Testimonial Content */}
                    <div
                      style={{
                        flex: 1,
                        textAlign: isMobile || isTablet ? "center" : "left",
                      }}
                    >
                      {/* Header Section */}
                      <div
                        style={{
                          marginBottom: isMobile
                            ? "15px"
                            : isTablet
                            ? "20px"
                            : "25px",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: isMobile
                              ? "1.2rem"
                              : isTablet
                              ? "1.5rem"
                              : "1.8rem",
                            fontWeight: "bold",
                            color: "#ffd700",
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent:
                              isMobile || isTablet ? "center" : "flex-start",
                            gap: "8px",
                          }}
                        >
                          ⭐ Client Feedback
                        </h3>

                        {/* Enhanced Rating Stars */}
                        <div
                          style={{
                            marginBottom: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent:
                              isMobile || isTablet ? "center" : "flex-start",
                            gap: "3px",
                          }}
                        >
                          {[...Array(testimonial.rating)].map((_, index) => (
                            <StarFilled
                              key={index}
                              style={{
                                color: "#ffd700",
                                fontSize: isMobile
                                  ? "16px"
                                  : isTablet
                                  ? "18px"
                                  : "22px",
                                filter:
                                  "drop-shadow(0 0 5px rgba(255, 215, 0, 0.5))",
                              }}
                            />
                          ))}
                          <span
                            style={{
                              color: "#888",
                              fontSize: isMobile ? "0.8rem" : "0.9rem",
                              marginLeft: "8px",
                            }}
                          >
                            ({testimonial.rating}.0/5.0)
                          </span>
                        </div>

                        {/* Enhanced Project Type Badge */}
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            background: "rgba(0, 255, 136, 0.1)",
                            color: "#00ff88",
                            padding: isMobile
                              ? "6px 12px"
                              : isTablet
                              ? "7px 14px"
                              : "8px 16px",
                            borderRadius: "18px",
                            fontSize: isMobile ? "0.8rem" : "0.9rem",
                            fontWeight: "600",
                            border: "1px solid rgba(0, 255, 136, 0.3)",
                            boxShadow: "0 0 15px rgba(0, 255, 136, 0.1)",
                          }}
                        >
                          🎨 {testimonial.projectType}
                        </div>
                      </div>

                      {/* Enhanced Testimonial Text */}
                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.03)",
                          padding: isMobile
                            ? "15px"
                            : isTablet
                            ? "20px"
                            : "25px",
                          borderRadius: "12px",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          marginBottom: isMobile
                            ? "15px"
                            : isTablet
                            ? "20px"
                            : "25px",
                          position: "relative",
                        }}
                      >
                        <p
                          style={{
                            fontSize: isMobile
                              ? "0.9rem"
                              : isTablet
                              ? "1rem"
                              : "1.1rem",
                            color: "#e0e0e0",
                            lineHeight: "1.7",
                            margin: "0",
                            fontStyle: "italic",
                          }}
                        >
                          "{testimonial.testimonial}"
                        </p>
                      </div>

                      {/* Enhanced Client Info & Project Details */}
                      <div
                        style={{
                          borderTop: "1px solid rgba(0, 255, 136, 0.2)",
                          paddingTop: isMobile
                            ? "12px"
                            : isTablet
                            ? "15px"
                            : "20px",
                          display: "grid",
                          gridTemplateColumns:
                            isMobile || isTablet ? "1fr" : "1fr auto",
                          gap: isMobile ? "12px" : isTablet ? "15px" : "20px",
                          alignItems: "center",
                        }}
                      >
                        {/* Client Information */}
                        <div>
                          <h4
                            style={{
                              fontSize: isMobile
                                ? "1.1rem"
                                : isTablet
                                ? "1.2rem"
                                : "1.4rem",
                              fontWeight: "bold",
                              color: "#ffffff",
                              marginBottom: "4px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent:
                                isMobile || isTablet ? "center" : "flex-start",
                              gap: "6px",
                            }}
                          >
                            {testimonial.clientName}
                            {testimonial.verified && (
                              <CheckCircleOutlined
                                style={{ color: "#00ff88", fontSize: "14px" }}
                              />
                            )}
                          </h4>
                          <p
                            style={{
                              color: "#bbb",
                              fontSize: isMobile ? "0.9rem" : "1rem",
                              marginBottom: "2px",
                              textAlign:
                                isMobile || isTablet ? "center" : "left",
                            }}
                          >
                            {testimonial.position}
                          </p>
                          <p
                            style={{
                              color: "#ffd700",
                              fontSize: isMobile ? "0.8rem" : "0.9rem",
                              fontWeight: "600",
                              marginBottom: "6px",
                              textAlign:
                                isMobile || isTablet ? "center" : "left",
                              display: "flex",
                              alignItems: "center",
                              justifyContent:
                                isMobile || isTablet ? "center" : "flex-start",
                              gap: "4px",
                            }}
                          >
                            <GlobalOutlined style={{ fontSize: "12px" }} />
                            {testimonial.company} • {testimonial.location}
                          </p>
                        </div>

                        {/* Project Details */}
                        <div
                          style={{
                            textAlign:
                              isMobile || isTablet ? "center" : "right",
                            background: "rgba(0, 255, 136, 0.05)",
                            padding: isMobile
                              ? "12px"
                              : isTablet
                              ? "14px"
                              : "15px",
                            borderRadius: "10px",
                            border: "1px solid rgba(0, 255, 136, 0.2)",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent:
                                isMobile || isTablet ? "center" : "flex-end",
                              gap: "4px",
                              marginBottom: "4px",
                            }}
                          >
                            <CalendarOutlined
                              style={{ color: "#888", fontSize: "12px" }}
                            />
                            <span
                              style={{
                                color: "#888",
                                fontSize: "0.8rem",
                              }}
                            >
                              Completed
                            </span>
                          </div>
                          <p
                            style={{
                              color: "#00ff88",
                              fontSize: isMobile ? "0.9rem" : "1rem",
                              fontWeight: "600",
                              marginBottom: "6px",
                            }}
                          >
                            {testimonial.completionDate}
                          </p>
                          <div
                            style={{
                              background:
                                "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)",
                              color: "#000",
                              padding: "3px 10px",
                              borderRadius: "12px",
                              fontSize: isMobile ? "0.75rem" : "0.8rem",
                              fontWeight: "bold",
                              display: "inline-block",
                            }}
                          >
                            {testimonial.projectValue}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Enhanced Call to Action */}
        <div
          style={{
            textAlign: "center",
            marginTop: isMobile ? "50px" : isTablet ? "60px" : "80px",
            padding: isMobile
              ? "25px 15px"
              : isTablet
              ? "35px 25px"
              : "50px 40px",
            background: "rgba(0, 255, 136, 0.05)",
            borderRadius: isMobile ? "20px" : isTablet ? "25px" : "30px",
            border: "2px solid rgba(0, 255, 136, 0.2)",
            maxWidth: isMobile ? "100%" : isTablet ? "90%" : "800px",
            margin: `${isMobile ? "50px" : isTablet ? "60px" : "80px"} auto 0`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Effect */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background:
                "radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)",
              animation: "rotate 30s linear infinite",
            }}
          />

          <div style={{ position: "relative", zIndex: 2 }}>
            <h3
              style={{
                fontSize: isMobile ? "1.4rem" : isTablet ? "1.7rem" : "2rem",
                color: "#00ff88",
                marginBottom: "12px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              🚀 Ready to Join These Happy Clients?
            </h3>
            <p
              style={{
                color: "#cccccc",
                marginBottom: isMobile ? "25px" : isTablet ? "28px" : "30px",
                fontSize: isMobile
                  ? "0.95rem"
                  : isTablet
                  ? "1.05rem"
                  : "1.2rem",
                lineHeight: "1.6",
                maxWidth: isMobile ? "100%" : isTablet ? "90%" : "600px",
                margin: `0 auto ${
                  isMobile ? "25px" : isTablet ? "28px" : "30px"
                }`,
              }}
            >
              Let's discuss your project and create something amazing together.
              Your success story could be the next featured testimonial!
            </p>

            {/* Enhanced CTA Buttons */}
            <div
              style={{
                display: "flex",
                gap: isMobile ? "15px" : "20px",
                justifyContent: "center",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  background:
                    "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)",
                  color: "#000",
                  border: "none",
                  padding: isMobile
                    ? "12px 25px"
                    : isTablet
                    ? "14px 32px"
                    : "15px 40px",
                  borderRadius: "25px",
                  fontSize: isMobile ? "0.95rem" : isTablet ? "1rem" : "1.1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 25px rgba(0, 255, 136, 0.3)",
                  width: isMobile ? "100%" : "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(0, 255, 136, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0, 255, 136, 0.3)";
                }}
              >
                🎯 Start Your Project
              </button>

              <button
                style={{
                  background: "transparent",
                  color: "#00ff88",
                  border: "2px solid #00ff88",
                  padding: isMobile
                    ? "12px 25px"
                    : isTablet
                    ? "14px 32px"
                    : "15px 40px",
                  borderRadius: "25px",
                  fontSize: isMobile ? "0.95rem" : isTablet ? "1rem" : "1.1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  width: isMobile ? "100%" : "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#00ff88";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#00ff88";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                }}
              >
                💬 View All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
