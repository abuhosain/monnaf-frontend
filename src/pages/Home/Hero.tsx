"use client"
import { Button, Modal } from "antd"
import { PlayCircleOutlined, DownloadOutlined, UserAddOutlined, CloseOutlined } from "@ant-design/icons"
import { useState, useEffect } from "react"

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div
      style={{
        background: "#000000",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        padding: "0",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Enhanced ambient lighting effects */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "8%",
          width: isMobile ? "200px" : "350px",
          height: isMobile ? "200px" : "350px",
          background: "radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 12s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          width: isMobile ? "150px" : "280px",
          height: isMobile ? "150px" : "280px",
          background: "radial-gradient(circle, rgba(255,215,0,0.03) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "float 15s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? "100px" : "180px",
          height: isMobile ? "100px" : "180px",
          background: "radial-gradient(circle, rgba(138,43,226,0.02) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: isMobile ? "60px 20px" : "80px 40px",
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "100vh",
          gap: isMobile ? "50px" : "80px",
        }}
      >
        {/* Left Content - Enhanced and responsive */}
        <div
          style={{
            flex: 1,
            maxWidth: isMobile ? "100%" : "650px",
            textAlign: isMobile ? "center" : "left",
            transform: isVisible ? "translateX(0)" : "translateX(-30px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 1.2s ease-out",
          }}
        >
          {/* Greeting with typing effect */}
          <div
            style={{
              marginBottom: isMobile ? "15px" : "20px",
              animation: "fadeInUp 1s ease-out 0.2s both",
            }}
          >
            <span
              style={{
                fontSize: isMobile ? "1rem" : "1.2rem",
                fontWeight: "500",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "2px",
                display: "block",
                marginBottom: "10px",
              }}
            >
              Welcome to my portfolio
            </span>
            <p
              style={{
                fontSize: isMobile ? "2rem" : "clamp(2.5rem, 4vw, 4.5rem)",
                fontWeight: "700",
                color: "#d0d0d0",
                margin: "0",
                lineHeight: 1.1,
              }}
            >
              Hello, I am
            </p>
          </div>

          {/* Name with enhanced glow effect */}
          <div
            style={{
              position: "relative",
              marginBottom: isMobile ? "20px" : "30px",
              animation: "fadeInUp 1s ease-out 0.4s both",
            }}
          >
            <h1
              style={{
                fontSize: isMobile ? "3.5rem" : "clamp(5rem, 8vw, 9rem)",
                fontWeight: "900",
                color: "#00ff88",
                margin: "0",
                lineHeight: 0.9,
                textShadow: "0 0 40px rgba(0, 255, 136, 0.8), 0 0 80px rgba(0, 255, 136, 0.4)",
                filter: "drop-shadow(0 0 15px rgba(0, 255, 136, 0.6))",
                animation: "nameGlow 3s ease-in-out infinite alternate",
                letterSpacing: isMobile ? "-2px" : "-4px",
                background: "linear-gradient(135deg, #00ff88 0%, #00ff88 50%, #ffd700 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MONNAF
            </h1>
            {/* Decorative underline */}
            <div
              style={{
                width: isMobile ? "80px" : "120px",
                height: "4px",
                background: "linear-gradient(90deg, #00ff88 0%, #ffd700 100%)",
                margin: isMobile ? "10px auto 0" : "15px 0 0",
                borderRadius: "2px",
                animation: "slideIn 1s ease-out 0.6s both",
              }}
            />
          </div>

          {/* Professional title with enhanced styling */}
          <div
            style={{
              marginBottom: isMobile ? "25px" : "35px",
              animation: "fadeInUp 1s ease-out 0.6s both",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "1.3rem" : "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: "600",
                color: "#ffd700",
                margin: "0 0 10px 0",
                lineHeight: 1.2,
                textShadow: "0 0 20px rgba(255, 215, 0, 0.6)",
              }}
            >
              Creative Motion Graphics Designer
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: isMobile ? "center" : "flex-start",
                gap: "15px",
                flexWrap: "wrap",
                marginTop: "15px",
              }}
            >
              {["Motion Graphics", "Video Editing", "Brand Design"].map((skill, index) => (
                <span
                  key={index}
                  style={{
                    background: "rgba(0, 255, 136, 0.1)",
                    color: "#00ff88",
                    padding: "6px 15px",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    border: "1px solid rgba(0, 255, 136, 0.3)",
                    animation: `fadeInUp 1s ease-out ${0.7 + index * 0.1}s both`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Enhanced description */}
          <div
            style={{
              marginBottom: isMobile ? "40px" : "50px",
              animation: "fadeInUp 1s ease-out 0.8s both",
            }}
          >
            <p
              style={{
                fontSize: isMobile ? "1rem" : "1.2rem",
                color: "#cccccc",
                lineHeight: 1.7,
                margin: "0 0 20px 0",
                maxWidth: isMobile ? "100%" : "550px",
              }}
            >
              Bringing ideas to life through stunning visual storytelling and cutting-edge motion design.{" "}
              <span
                style={{
                  color: "#00ff88",
                  fontWeight: "600",
                  textShadow: "0 0 10px rgba(0, 255, 136, 0.5)",
                }}
              >
                Creating the impossible.
              </span>
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: isMobile ? "center" : "flex-start",
                gap: "20px",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#00ff88",
                    borderRadius: "50%",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                <span style={{ color: "#888", fontSize: "0.9rem" }}>Available for projects</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#ffd700",
                    borderRadius: "50%",
                  }}
                />
                <span style={{ color: "#888", fontSize: "0.9rem" }}>5+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Enhanced buttons */}
          <div
            style={{
              display: "flex",
              gap: isMobile ? "15px" : "20px",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
              animation: "fadeInUp 1s ease-out 1s both",
            }}
          >
            {/* Hire Me Button */}
            <Button
              icon={<UserAddOutlined />}
              size="large"
              style={{
                background: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
                border: "none",
                color: "#000000",
                fontWeight: "bold",
                borderRadius: "30px",
                height: isMobile ? "45px" : "55px",
                padding: isMobile ? "0 25px" : "0 35px",
                fontSize: isMobile ? "14px" : "16px",
                boxShadow: "0 10px 30px rgba(255, 215, 0, 0.4)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.05)"
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(255, 215, 0, 0.6)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)"
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 215, 0, 0.4)"
              }}
            >
              Hire Me Now
            </Button>

            {/* Download CV Button */}
            <Button
              icon={<DownloadOutlined />}
              size="large"
              style={{
                background: "transparent",
                border: "2px solid #00ff88",
                color: "#00ff88",
                fontWeight: "bold",
                borderRadius: "30px",
                height: isMobile ? "45px" : "55px",
                padding: isMobile ? "0 25px" : "0 35px",
                fontSize: isMobile ? "14px" : "16px",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00ff88"
                e.currentTarget.style.color = "#000000"
                e.currentTarget.style.transform = "translateY(-3px) scale(1.05)"
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 255, 136, 0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#00ff88"
                e.currentTarget.style.transform = "translateY(0) scale(1)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              Download CV
            </Button>
          </div>

          {/* Stats section */}
          <div
            style={{
              display: "flex",
              gap: isMobile ? "20px" : "30px",
              marginTop: isMobile ? "30px" : "40px",
              justifyContent: isMobile ? "center" : "flex-start",
              flexWrap: "wrap",
              animation: "fadeInUp 1s ease-out 1.2s both",
            }}
          >
            {[
              { number: "50+", label: "Projects Done" },
              { number: "25+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: isMobile ? "15px" : "20px",
                  background: "rgba(0, 255, 136, 0.05)",
                  borderRadius: "15px",
                  border: "1px solid rgba(0, 255, 136, 0.2)",
                  minWidth: isMobile ? "80px" : "100px",
                }}
              >
                <div
                  style={{
                    fontSize: isMobile ? "1.5rem" : "2rem",
                    fontWeight: "bold",
                    color: "#00ff88",
                    marginBottom: "5px",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: isMobile ? "0.8rem" : "0.9rem",
                    color: "#888",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Enhanced video section */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
            maxWidth: isMobile ? "100%" : "550px",
            transform: isVisible ? "translateX(0)" : "translateX(30px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 1.2s ease-out 0.5s",
          }}
        >
          {/* Video Thumbnail with enhanced design */}
          <div
            onClick={showModal}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: isMobile ? "350px" : "500px",
              aspectRatio: "16/10",
              background: "#1a1a1a",
              borderRadius: "25px",
              border: "3px solid #00ff88",
              cursor: "pointer",
              overflow: "hidden",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 255, 136, 0.3)",
              transition: "all 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05) rotateY(5deg)"
              e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 255, 136, 0.4), 0 0 50px rgba(0, 255, 136, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotateY(0deg)"
              e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 255, 136, 0.3)"
            }}
          >
            {/* Video Thumbnail Background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "url('https://img.youtube.com/vi/vkWUQ7VeAIw/maxresdefault.jpg') center/cover",
                filter: "brightness(0.4) contrast(1.2)",
              }}
            />

            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,255,136,0.1) 100%)",
              }}
            />

            {/* Play Button with enhanced animation */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: isMobile ? "70px" : "90px",
                  height: isMobile ? "70px" : "90px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 40px rgba(0, 255, 136, 0.6)",
                  animation: "playPulse 2s ease-in-out infinite",
                  position: "relative",
                }}
              >
                <PlayCircleOutlined
                  style={{
                    fontSize: isMobile ? "35px" : "45px",
                    color: "#000000",
                  }}
                />
                {/* Ripple effect */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-20px",
                    borderRadius: "50%",
                    border: "2px solid rgba(0, 255, 136, 0.3)",
                    animation: "ripple 2s ease-out infinite",
                  }}
                />
              </div>
            </div>

            {/* Video duration badge */}
            <div
              style={{
                position: "absolute",
                bottom: "15px",
                right: "15px",
                background: "rgba(0, 0, 0, 0.8)",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "15px",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              2:45
            </div>
          </div>

          {/* Enhanced video description */}
          <div
            style={{
              textAlign: "center",
              background: "rgba(0, 255, 136, 0.05)",
              padding: isMobile ? "20px" : "25px",
              borderRadius: "20px",
              border: "1px solid rgba(0, 255, 136, 0.2)",
              maxWidth: "100%",
            }}
          >
            <h3
              style={{
                fontSize: isMobile ? "1.2rem" : "1.5rem",
                color: "#ffffff",
                fontWeight: "600",
                margin: "0 0 10px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              🎬 Featured Showreel
            </h3>
            <p
              style={{
                fontSize: isMobile ? "0.9rem" : "1rem",
                color: "#cccccc",
                margin: "0 0 15px 0",
                lineHeight: 1.5,
              }}
            >
              Watch my latest motion graphics and video editing work
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                fontSize: "0.9rem",
                color: "#888",
              }}
            >
              <span>🎥 Motion Graphics</span>
              <span>•</span>
              <span>✨ Visual Effects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      <Modal
        title={
          <div
            style={{
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            🎬 Featured Showreel - Motion Graphics Portfolio
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={isMobile ? "95vw" : "90vw"}
        style={{ maxWidth: "1200px" }}
        centered
        closeIcon={<CloseOutlined style={{ color: "#00ff88", fontSize: "18px" }} />}
        styles={{
          mask: {
            backdropFilter: "blur(15px)",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
          content: {
            backgroundColor: "#000000",
            border: "2px solid #00ff88",
            borderRadius: "20px",
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 255, 136, 0.3)",
          },
          header: {
            backgroundColor: "#000000",
            borderBottom: "1px solid rgba(0, 255, 136, 0.3)",
            borderRadius: "20px 20px 0 0",
          },
          body: {
            backgroundColor: "#000000",
            padding: isMobile ? "15px" : "25px",
          },
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            height: 0,
            borderRadius: "15px",
            overflow: "hidden",
            border: "2px solid rgba(0, 255, 136, 0.3)",
            boxShadow: "0 0 30px rgba(0, 255, 136, 0.2)",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src="https://www.youtube.com/embed/vkWUQ7VeAIw?autoplay=1&mute=1&rel=0&modestbranding=1"
            title="Motion Graphics Portfolio Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </Modal>

      {/* Enhanced CSS Animations */}
      <style>
        {`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: ${isMobile ? "80px" : "120px"};
            opacity: 1;
          }
        }
        
        @keyframes nameGlow {
          from {
            text-shadow: 0 0 30px rgba(0, 255, 136, 0.8), 0 0 60px rgba(0, 255, 136, 0.4);
            filter: drop-shadow(0 0 10px rgba(0, 255, 136, 0.6));
          }
          to {
            text-shadow: 0 0 50px rgba(0, 255, 136, 1), 0 0 100px rgba(0, 255, 136, 0.6);
            filter: drop-shadow(0 0 25px rgba(0, 255, 136, 0.8));
          }
        }
        
        @keyframes playPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 40px rgba(0, 255, 136, 0.6);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 60px rgba(0, 255, 136, 0.8);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        `}
      </style>
    </div>
  )
}

export default Hero
