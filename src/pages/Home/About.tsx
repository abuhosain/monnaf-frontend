"use client";
import aboutImage from "../../assets/images/right-about.png";
export default function About() {
  return (
    <div
      style={{
        background: "#000000",
        position: "relative",
        overflow: "hidden",

        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background Effects */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(0,255,136,0.03) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 12s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(255,215,0,0.03) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "float 15s ease-in-out infinite reverse",
        }}
      />

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "100px 50px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left Side - Image and Title */}
          <div style={{ position: "relative" }}>
            {/* Title Section */}
            <div style={{ marginBottom: "40px" }}>
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "#ffd700",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                About
              </p>
              <h2
                style={{
                  fontSize: "4rem",
                  color: "#ffffff",
                  fontWeight: "bold",
                  lineHeight: "1.1",
                  marginBottom: "10px",
                }}
              >
                Personal
              </h2>
              <h2
                style={{
                  fontSize: "4rem",
                  fontWeight: "bold",
                  lineHeight: "1.1",
                  background:
                    "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Information
              </h2>
            </div>

            {/* Image Container */}
            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                background:
                  "linear-gradient(135deg, rgba(0,255,136,0.1) 0%, rgba(255,215,0,0.1) 100%)",
                padding: "20px",
                border: "1px solid rgba(0, 255, 136, 0.2)",
                boxShadow: "0 20px 40px rgba(0, 255, 136, 0.1)",
              }}
            >
              {/* Placeholder for image - you can replace this with your actual image */}
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  background:
                    "linear-gradient(135deg, rgba(0,255,136,0.2) 0%, rgba(255,215,0,0.2) 100%)",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  color: "#888",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={aboutImage || "/placeholder.svg"}
                  alt="About Me"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              </div>

              {/* Decorative Elements */}
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  width: "60px",
                  height: "60px",
                  background:
                    "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)",
                  borderRadius: "50%",
                  opacity: 0.3,
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: "-5px",
                  width: "40px",
                  height: "40px",
                  background:
                    "linear-gradient(135deg, #ffd700 0%, #00ff88 100%)",
                  borderRadius: "50%",
                  opacity: 0.4,
                  animation: "pulse 3s ease-in-out infinite",
                }}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div style={{ color: "#ffffff" }}>
            {/* Introduction */}
            <div
              style={{
                background: "rgba(0, 255, 136, 0.05)",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid rgba(0, 255, 136, 0.2)",
                marginBottom: "40px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "20px",
                  fontSize: "60px",
                  color: "rgba(0, 255, 136, 0.1)",
                  fontFamily: "serif",
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: "1.3rem",
                  lineHeight: "1.8",
                  color: "#cccccc",
                  fontStyle: "italic",
                }}
              >
                My portfolio is a curation of my creative journey. I invite you
                to explore my work and discover the unique perspectives and
                solutions I bring to the table. Let's collaborate and bring your
                vision to life!
              </p>
            </div>

            {/* Biodata Section */}
            <div>
              <h3
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "30px",
                  background:
                    "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Biodata
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {[
                  { label: "Name", value: "Md. Monnaf Hossain" },
                  { label: "Birth", value: "02 February 2006" },
                  {
                    label: "Address",
                    value:
                      "6760-Ullapara, Sirajgonj, Rajshahi, Dhaka, Bangladesh",
                  },
                  { label: "Email", value: "monnafahsan58132@gmail.com" },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      padding: "20px",
                      borderRadius: "15px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(0, 255, 136, 0.05)";
                      e.currentTarget.style.borderColor =
                        "rgba(0, 255, 136, 0.3)";
                      e.currentTarget.style.transform = "translateX(10px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.02)";
                      e.currentTarget.style.borderColor =
                        "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "80px",
                          padding: "8px 15px",
                          background:
                            "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)",
                          color: "#000",
                          borderRadius: "20px",
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "1.1rem",
                          color: "#cccccc",
                          flex: 1,
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats or Additional Info */}
            <div
              style={{
                marginTop: "40px",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(0, 255, 136, 0.1)",
                  padding: "20px",
                  borderRadius: "15px",
                  textAlign: "center",
                  border: "1px solid rgba(0, 255, 136, 0.3)",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#00ff88",
                  }}
                >
                  18+
                </div>
                <div style={{ color: "#ccc", fontSize: "0.9rem" }}>
                  Years Old
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255, 215, 0, 0.1)",
                  padding: "20px",
                  borderRadius: "15px",
                  textAlign: "center",
                  border: "1px solid rgba(255, 215, 0, 0.3)",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#ffd700",
                  }}
                >
                  50+
                </div>
                <div style={{ color: "#ccc", fontSize: "0.9rem" }}>
                  Projects Done
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional CSS for animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.6;
          }
        }
        @media (max-width: 768px) {
          .grid-cols-2 {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}
