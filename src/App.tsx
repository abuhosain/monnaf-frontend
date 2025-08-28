"use client";
import type React from "react";
import {
  HomeOutlined,
  InfoCircleOutlined,
  SolutionOutlined,
  AppstoreOutlined,
  ToolOutlined,
  MessageOutlined,
  PhoneOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Tooltip, Drawer } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState, useEffect, useRef } from "react";
import Hero from "./pages/Home/Hero";
import About from "./pages/Home/About";
import Service from "./pages/Home/Service";
import Skills from "./pages/Home/Skills";
import Portfolio from "./pages/Home/Portfolio";
import Testimonial from "./pages/Home/Testimonial";
import Contact from "./pages/Home/Contact";
import Loader from "./components/ui/shared/Loader";

const { Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const [isMobile, setIsMobile] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Home",
      ref: heroRef,
    },
    {
      key: "2",
      icon: <InfoCircleOutlined />,
      label: "About",
      ref: aboutRef,
    },
    {
      key: "3",
      icon: <SolutionOutlined />,
      label: "Service",
      ref: serviceRef,
    },
    {
      key: "4",
      icon: <ToolOutlined />,
      label: "Skills",
      ref: skillsRef,
    },
    {
      key: "5",
      icon: <AppstoreOutlined />,
      label: "Portfolio",
      ref: portfolioRef,
    },
    {
      key: "6",
      icon: <MessageOutlined />,
      label: "Testimonial",
      ref: testimonialRef,
    },
    {
      key: "7",
      icon: <PhoneOutlined />,
      label: "Contact",
      ref: contactRef,
    },
  ];

  const socialLinks = [
    {
      icon: <FacebookOutlined />,
      label: "Facebook",
      url: "https://facebook.com",
      color: "#1877f2",
    },
    {
      icon: <TwitterOutlined />,
      label: "Twitter",
      url: "https://twitter.com",
      color: "#1da1f2",
    },
    {
      icon: <InstagramOutlined />,
      label: "Instagram",
      url: "https://instagram.com",
      color: "#e4405f",
    },
    {
      icon: <LinkedinOutlined />,
      label: "LinkedIn",
      url: "https://linkedin.com",
      color: "#0077b5",
    },
    {
      icon: <GithubOutlined />,
      label: "GitHub",
      url: "https://github.com",
      color: "#ffffff",
    },
    {
      icon: <YoutubeOutlined />,
      label: "YouTube",
      url: "https://youtube.com",
      color: "#ff0000",
    },
  ];

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setCollapsed(true);
        setMobileDrawerOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle menu click and scroll to section
  const handleMenuClick = ({ key }: { key: string }) => {
    setSelectedKey(key);
    const menuItem = menuItems.find((item) => item.key === key);
    if (menuItem && menuItem.ref.current) {
      menuItem.ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile drawer after navigation
    if (isMobile) {
      setMobileDrawerOpen(false);
    }
  };

  // Handle scroll to update active menu item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = menuItems.length - 1; i >= 0; i--) {
        const section = menuItems[i].ref.current;
        if (section && section.offsetTop <= scrollPosition) {
          setSelectedKey(menuItems[i].key);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle sidebar/drawer
  const toggleSidebar = () => {
    if (isMobile) {
      setMobileDrawerOpen(!mobileDrawerOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  // Sidebar Content Component
  const SidebarContent = ({ inDrawer = false }: { inDrawer?: boolean }) => (
    <>
      {/* Logo Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
          borderBottom: "1px solid rgba(0, 255, 136, 0.2)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: collapsed && !inDrawer ? "scale(0.7)" : "scale(1)",
        }}
      >
        {collapsed && !inDrawer ? (
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#000",
              boxShadow: "0 0 20px rgba(0, 255, 136, 0.4)",
            }}
          >
            M
          </div>
        ) : (
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #00ff88 0%, #ffd700 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
            }}
          >
            MONNAF
          </div>
        )}
      </div>

      {/* Collapse Button in Sidebar */}
      {!isMobile && (
        <div
          style={{
            padding: "15px",
            borderBottom: "1px solid rgba(0, 255, 136, 0.1)",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: "100%",
              height: "40px",
              color: "#00ff88",
              background: "rgba(0, 255, 136, 0.1)",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(0, 255, 136, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0, 255, 136, 0.2)";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0, 255, 136, 0.1)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {!collapsed && !inDrawer && "Toggle Menu"}
          </Button>
        </div>
      )}

      {/* Enhanced Menu */}
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        onClick={handleMenuClick}
        style={{
          background: "transparent",
          border: "none",
          padding: "20px 0",
          flex: 1,
        }}
        items={menuItems.map((item) => ({
          key: item.key,
          icon: item.icon,
          label: (
            <a
              href={`#${item.label.toLowerCase()}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                width: "100%",
              }}
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick({ key: item.key });
              }}
            >
              {item.label}
            </a>
          ),
          style: {
            margin: "8px 12px",
            borderRadius: "12px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            transition: "all 0.3s ease",
            background:
              selectedKey === item.key
                ? "rgba(0, 255, 136, 0.1)"
                : "transparent",
            border:
              selectedKey === item.key
                ? "1px solid rgba(0, 255, 136, 0.3)"
                : "1px solid transparent",
            cursor: "pointer",
          },
        }))}
      />

      {/* Social Media Icons - Bottom of Sidebar */}
      {(!collapsed || inDrawer) && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "0",
            right: "0",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              borderTop: "1px solid rgba(0, 255, 136, 0.2)",
              paddingTop: "15px",
            }}
          >
            <p
              style={{
                color: "#888",
                fontSize: "12px",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              Follow Me
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {socialLinks.map((social, index) => (
                <Tooltip key={index} title={social.label} placement="top">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "#888",
                      transition: "all 0.3s ease",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = social.color;
                      e.currentTarget.style.color =
                        social.color === "#ffffff" ? "#000" : "#fff";
                      e.currentTarget.style.transform =
                        "translateY(-2px) scale(1.1)";
                      e.currentTarget.style.boxShadow = `0 5px 15px ${social.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.color = "#888";
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {social.icon}
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            position: "fixed",
            height: "100vh",
            left: 0,
            top: 0,
            zIndex: 1000,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            background:
              "linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
            boxShadow: "4px 0 20px rgba(0, 255, 136, 0.2)",
          }}
          width={220}
          collapsedWidth={80}
        >
          <SidebarContent />
        </Sider>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          title={null}
          placement="left"
          onClose={() => setMobileDrawerOpen(false)}
          open={mobileDrawerOpen}
          width={280}
          styles={{
            body: {
              padding: 0,
              background:
                "linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
            },
            header: {
              display: "none",
            },
          }}
          style={{
            background:
              "linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
          }}
        >
          <div
            style={{
              height: "100vh",
              position: "relative",
              background:
                "linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
            }}
          >
            <SidebarContent inDrawer={true} />
          </div>
        </Drawer>
      )}

      <Layout
        style={{
          marginLeft: isMobile ? 0 : collapsed ? 80 : 220,
          transition: "margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Enhanced Header */}
        <Header
          style={{
            position: "fixed",
            width: isMobile ? "100%" : `calc(100% - ${collapsed ? 80 : 220}px)`,
            left: isMobile ? 0 : collapsed ? 80 : 220,
            top: 0,
            zIndex: 999,
            padding: 0,
            background:
              "linear-gradient(90deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
            borderBottom: "2px solid #00ff88",
            boxShadow: "0 2px 20px rgba(0, 255, 136, 0.2)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
              padding: "0 20px",
            }}
          >
            {/* Mobile Menu Button */}
            {isMobile && (
              <Button
                type="text"
                icon={<MenuUnfoldOutlined />}
                onClick={toggleSidebar}
                style={{
                  fontSize: "18px",
                  width: "50px",
                  height: "50px",
                  color: "#00ff88",
                  background: "rgba(0, 255, 136, 0.1)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 255, 136, 0.2)";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0, 255, 136, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0, 255, 136, 0.1)";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            )}

            {/* Social Icons in Header - Always Visible with Enhanced Design */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "8px" : "12px",
                background: "rgba(0, 255, 136, 0.05)",
                padding: isMobile ? "6px 12px" : "8px 16px",
                borderRadius: "25px",
                border: "1px solid rgba(0, 255, 136, 0.2)",
                flex: isMobile ? 1 : "none",
                justifyContent: isMobile ? "center" : "flex-start",
                marginLeft: isMobile ? "15px" : "0",
                marginRight: isMobile ? "15px" : "0",
              }}
            >
              {!isMobile && (
                <span
                  style={{
                    color: "#00ff88",
                    fontSize: "12px",
                    fontWeight: "500",
                    marginRight: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Connect
                </span>
              )}
              {socialLinks.slice(0, isMobile ? 4 : 6).map((social, index) => (
                <Tooltip key={index} title={social.label} placement="bottom">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: isMobile ? "28px" : "32px",
                      height: isMobile ? "28px" : "32px",
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "#888",
                      transition: "all 0.3s ease",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      fontSize: isMobile ? "12px" : "14px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = social.color;
                      e.currentTarget.style.color =
                        social.color === "#ffffff" ? "#000" : "#fff";
                      e.currentTarget.style.transform =
                        "translateY(-2px) scale(1.1)";
                      e.currentTarget.style.boxShadow = `0 5px 15px ${social.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.color = "#888";
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {social.icon}
                  </a>
                </Tooltip>
              ))}
            </div>

            {/* Desktop Menu Toggle Button - Right Side */}
            {!isMobile && (
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={toggleSidebar}
                style={{
                  fontSize: "18px",
                  width: "50px",
                  height: "50px",
                  color: "#00ff88",
                  background: "rgba(0, 255, 136, 0.1)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 255, 136, 0.2)";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0, 255, 136, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0, 255, 136, 0.1)";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            )}
          </div>
        </Header>

        {/* Enhanced Content */}
        <Content
          style={{
            marginTop: 64,
            minHeight: "calc(100vh - 64px)",
            background: "#000000",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle background effects */}
          <div
            style={{
              position: "fixed",
              top: "10%",
              right: "10%",
              width: isMobile ? "200px" : "300px",
              height: isMobile ? "200px" : "300px",
              background:
                "radial-gradient(circle, rgba(0,255,136,0.02) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(60px)",
              animation: "float 8s ease-in-out infinite",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "fixed",
              bottom: "10%",
              left: "10%",
              width: isMobile ? "150px" : "250px",
              height: isMobile ? "150px" : "250px",
              background:
                "radial-gradient(circle, rgba(255,215,0,0.02) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(50px)",
              animation: "float 10s ease-in-out infinite reverse",
              zIndex: 0,
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div ref={heroRef} id="home">
              <Hero />
            </div>
            <div ref={aboutRef} id="about">
              <About />
            </div>
            <div ref={serviceRef} id="service">
              <Service />
            </div>
            <div ref={skillsRef} id="skills">
              <Skills />
            </div>
            <div ref={portfolioRef} id="portfolio">
              <Portfolio />
            </div>
            <div ref={testimonialRef} id="testimonial">
              <Testimonial />
            </div>
            <div ref={contactRef} id="contact">
              <Contact />
            </div>
          </div>
        </Content>
      </Layout>

      {/* CSS Animations */}
      <style>
        {`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .ant-menu-item:hover {
          background-color: rgba(0, 255, 136, 0.1) !important;
          border-color: rgba(0, 255, 136, 0.3) !important;
        }
        .ant-menu-item-selected {
          background-color: rgba(0, 255, 136, 0.15) !important;
          border-color: rgba(0, 255, 136, 0.5) !important;
        }
        .ant-menu-item-selected::after {
          border-right: 3px solid #00ff88 !important;
        }
        .ant-menu-dark .ant-menu-item-selected {
          color: #00ff88 !important;
        }
        .ant-menu-dark .ant-menu-item {
          color: #cccccc !important;
        }
        .ant-menu-dark .ant-menu-item:hover {
          color: #00ff88 !important;
        }
        .ant-layout-sider-children {
          display: flex;
          flex-direction: column;
        }
        .ant-drawer-content-wrapper {
          box-shadow: 4px 0 20px rgba(0, 255, 136, 0.2) !important;
        }
        .ant-drawer-body {
          background: linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%) !important;
        }
        
        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .ant-layout-header {
            padding: 0 15px !important;
          }
        }
        
        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
        `}
      </style>
    </Layout>
  );
};

export default App;
