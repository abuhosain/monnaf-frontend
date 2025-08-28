"use client";
import { Progress, type ProgressProps } from "antd";
import SectionTitle from "../../components/ui/shared/SectionTitle";

const Skills = () => {
  const skills = [
    {
      name: "Adobe After Effect",
      percent: 93,
      icon: "🎬",
      category: "Motion Graphics",
    },
    {
      name: "Adobe Premier Pro",
      percent: 89,
      icon: "🎥",
      category: "Video Editing",
    },
    {
      name: "Adobe Illustrator",
      percent: 91,
      icon: "🎨",
      category: "Vector Design",
    },
    {
      name: "Adobe Photoshop",
      percent: 75,
      icon: "🖼️",
      category: "Photo Editing",
    },
  ];

  const getStrokeColor = (percent: number): ProgressProps["strokeColor"] => {
    if (percent >= 90) {
      return {
        "0%": "#00ff88",
        "50%": "#00ff88",
        "100%": "#ffd700",
      };
    } else if (percent >= 80) {
      return {
        "0%": "#ffd700",
        "50%": "#00ff88",
        "100%": "#ffd700",
      };
    } else {
      return {
        "0%": "#00ff88",
        "50%": "#ffd700",
        "100%": "#00ff88",
      };
    }
  };

  const getTrailColor = (percent: number) => {
    if (percent >= 90) return "rgba(0, 255, 136, 0.1)";
    if (percent >= 80) return "rgba(255, 215, 0, 0.1)";
    return "rgba(0, 255, 136, 0.1)";
  };

  return (
    <div
      style={{
        background: "#000000",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "50px 0",
      }}
    >
      {/* Background Effects */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(70px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          width: "250px",
          height: "250px",
          background:
            "radial-gradient(circle, rgba(255,215,0,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 50px",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* Section Title */}
        <SectionTitle
          sTitle="My Skills"
          bTitle="My Experience and also Skills"
          description="Mastering creative tools and technologies to bring innovative ideas to life. Each skill represents years of dedication and countless projects that have shaped my expertise in digital design and development."
        />

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
            marginTop: "80px",
            padding: "0 20px",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                background: "rgba(0, 0, 0, 0.8)",
                border: "1px solid rgba(0, 255, 136, 0.2)",
                borderRadius: "25px",
                padding: "40px 30px",
                textAlign: "center",
                position: "relative",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                overflow: "hidden",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px) scale(1.02)";
                e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.5)";
                e.currentTarget.style.background = "rgba(0, 255, 136, 0.05)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0, 255, 136, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.2)";
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.8)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Background Gradient */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${
                    skill.percent >= 90
                      ? "rgba(0,255,136,0.02)"
                      : skill.percent >= 80
                      ? "rgba(255,215,0,0.02)"
                      : "rgba(0,255,136,0.02)"
                  } 0%, transparent 100%)`,
                  borderRadius: "25px",
                }}
              />

              {/* Skill Icon */}
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {skill.icon}
              </div>

              {/* Progress Circle */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  marginBottom: "25px",
                }}
              >
                <Progress
                  type="dashboard"
                  percent={skill.percent}
                  strokeColor={getStrokeColor(skill.percent)}
                  trailColor={getTrailColor(skill.percent)}
                  strokeWidth={8}
                  gapDegree={60}
                  size={140}
                  format={(percent) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "#ffffff",
                          fontSize: "1.8rem",
                          fontWeight: "bold",
                          background:
                            "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {percent}%
                      </span>
                      <span
                        style={{
                          color: "#888",
                          fontSize: "0.8rem",
                          marginTop: "5px",
                        }}
                      >
                        Proficiency
                      </span>
                    </div>
                  )}
                />
              </div>

              {/* Skill Name */}
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  color: "#ffffff",
                  marginBottom: "8px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {skill.name}
              </h3>

              {/* Skill Category */}
              <p
                style={{
                  fontSize: "1rem",
                  color: "#ffd700",
                  marginBottom: "15px",
                  position: "relative",
                  zIndex: 2,
                  fontWeight: "500",
                }}
              >
                {skill.category}
              </p>

              {/* Skill Level Badge */}
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 15px",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  position: "relative",
                  zIndex: 2,
                  background:
                    skill.percent >= 90
                      ? "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)"
                      : skill.percent >= 80
                      ? "linear-gradient(135deg, #ffd700 0%, #00ff88 100%)"
                      : "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)",
                  color: "#000",
                }}
              >
                {skill.percent >= 90
                  ? "Expert"
                  : skill.percent >= 80
                  ? "Advanced"
                  : "Intermediate"}
              </div>

              {/* Decorative Elements */}
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  width: "8px",
                  height: "8px",
                  background:
                    "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)",
                  borderRadius: "50%",
                  opacity: 0.6,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "15px",
                  width: "6px",
                  height: "6px",
                  background:
                    "linear-gradient(135deg, #ffd700 0%, #00ff88 100%)",
                  borderRadius: "50%",
                  opacity: 0.4,
                }}
              />
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div
          style={{
            marginTop: "80px",
            textAlign: "center",
            padding: "40px",
            background: "rgba(0, 255, 136, 0.05)",
            borderRadius: "25px",
            border: "1px solid rgba(0, 255, 136, 0.2)",
            maxWidth: "800px",
            margin: "80px auto 0",
          }}
        >
          <h3
            style={{
              fontSize: "1.8rem",
              color: "#00ff88",
              marginBottom: "15px",
              fontWeight: "bold",
            }}
          >
            Ready to Create Something Amazing?
          </h3>
          <p
            style={{
              color: "#cccccc",
              marginBottom: "25px",
              fontSize: "1.1rem",
              lineHeight: "1.6",
            }}
          >
            With these skills and years of experience, I'm ready to bring your
            creative vision to life. Let's collaborate and create something
            extraordinary together.
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
