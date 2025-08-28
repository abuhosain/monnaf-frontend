"use client"

interface ServiceCardProps {
  image: string
  title: string
  description: string
}

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
  return (
    <div
      className="service-card"
      style={{
        background: "rgba(0, 0, 0, 0.8)",
        border: "1px solid rgba(0, 255, 136, 0.2)",
        borderRadius: "20px",
        padding: "40px 30px",
        textAlign: "center",
        position: "relative",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        overflow: "hidden",
        backdropFilter: "blur(10px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-15px) scale(1.02)"
        e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.5)"
        e.currentTarget.style.background = "rgba(0, 255, 136, 0.05)"
        e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 255, 136, 0.2)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)"
        e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.2)"
        e.currentTarget.style.background = "rgba(0, 0, 0, 0.8)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      {/* Background Gradient Effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(0,255,136,0.02) 0%, rgba(255,215,0,0.02) 100%)",
          borderRadius: "20px",
          opacity: 0,
          transition: "opacity 0.4s ease",
        }}
        className="gradient-bg"
      />

      {/* Decorative Corner Elements */}
      <div
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          width: "30px",
          height: "30px",
          border: "2px solid rgba(0, 255, 136, 0.3)",
          borderRadius: "50%",
          transition: "all 0.4s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          left: "15px",
          width: "20px",
          height: "20px",
          background: "linear-gradient(135deg, #ffd700 0%, #00ff88 100%)",
          borderRadius: "50%",
          opacity: 0.6,
          transition: "all 0.4s ease",
        }}
      />

      {/* Icon Container */}
      <div
        style={{
          width: "100px",
          height: "100px",
          margin: "0 auto 30px",
          background: "linear-gradient(135deg, rgba(0,255,136,0.1) 0%, rgba(255,215,0,0.1) 100%)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid rgba(0, 255, 136, 0.3)",
          transition: "all 0.4s ease",
          position: "relative",
          zIndex: 2,
        }}
      >
        <img
          src={image || "/placeholder.svg?height=60&width=60"}
          alt={title}
          style={{
            width: "60px",
            height: "60px",
            objectFit: "contain",
            filter: "brightness(1.2) contrast(1.1)",
          }}
        />

        {/* Glow Effect */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80px",
            height: "80px",
            background: "radial-gradient(circle, rgba(0,255,136,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            opacity: 0,
            transition: "opacity 0.4s ease",
          }}
          className="icon-glow"
        />
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          color: "#ffffff",
          marginBottom: "20px",
          position: "relative",
          zIndex: 2,
          transition: "color 0.4s ease",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "1rem",
          color: "#cccccc",
          lineHeight: "1.6",
          position: "relative",
          zIndex: 2,
          transition: "color 0.4s ease",
        }}
      >
        {description}
      </p>

      {/* Learn More Button */}
      <div
        style={{
          marginTop: "25px",
          opacity: 0,
          transform: "translateY(20px)",
          transition: "all 0.4s ease",
          position: "relative",
          zIndex: 2,
        }}
        className="learn-more-btn"
      >
        <button
          style={{
            background: "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)",
            color: "#000",
            border: "none",
            padding: "10px 25px",
            borderRadius: "25px",
            fontSize: "0.9rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"
          }}
        >
          Learn More
        </button>
      </div>
      <style>
        {`
          .service-card:hover .gradient-bg {
            opacity: 1;
          }
          .service-card:hover .icon-glow {
            opacity: 1;
          }
          .service-card:hover .learn-more-btn {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
      
    </div>
  )
}

export default ServiceCard
