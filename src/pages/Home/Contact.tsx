"use client"

import { Button, Modal, Form, Input, message, Card, Typography, Space, Divider, Row, Col, notification } from "antd"
import {
  MailOutlined,
  MessageOutlined,
  SendOutlined,
  ProjectOutlined,
  LoadingOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import SectionTitle from "../../components/ui/shared/SectionTitle"

const { Title, Paragraph, Text } = Typography
const { TextArea } = Input

interface FormData {
  fullName: string
  email: string
  mobileNumber: string
  message: string
}

// ✅ Vite uses import.meta.env (NOT process.env)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [form] = Form.useForm()

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.warn("⚠️ EmailJS environment variables are missing!")
  }

  const showModal = () => setIsModalOpen(true)
  const handleCancel = () => {
    form.resetFields()
    setIsModalOpen(false)
  }

  const onFinish = async (values: FormData) => {
    setIsLoading(true)
    try {
      const templateParams = {
        from_name: values.fullName,
        from_email: values.email,
        phone: values.mobileNumber,
        message: values.message,
        to_name: "MONNAF",
      }

      const res = await emailjs.send(EMAILJS_SERVICE_ID!, EMAILJS_TEMPLATE_ID!, templateParams, EMAILJS_PUBLIC_KEY!)

      if (res.status === 200) {
        notification.success({
          message: "Message Sent Successfully! ✅",
          description: "Thanks for contacting me. I'll reply within 24 hours.",
          style: {
            backgroundColor: "#1a1a1a",
            border: "1px solid #00ff88",
            color: "#ffffff",
          },
        })
        form.resetFields()
        setIsModalOpen(false)
      }
    } catch (err) {
      console.error("Email send error:", err)
      notification.error({
        message: "Failed to Send Message ❌",
        description: "Something went wrong. Please try again later.",
        style: {
          backgroundColor: "#1a1a1a",
          border: "1px solid #ff4757",
          color: "#ffffff",
        },
      })
    } finally {
      setIsLoading(false)
    }
  }

  const onFinishFailed = () => {
    message.error("Please fill in all required fields correctly!")
  }

  const contactInfo = [
    {
      icon: <MailOutlined />,
      title: "Email Address",
      value: "monnafahsan58132@gmail.com",
      description: "Send me an email anytime!",
      color: "#00ff88",
    },
    {
      icon: <PhoneOutlined />,
      title: "Phone Number",
      value: "+880 1234-567890",
      description: "Call me for urgent projects",
      color: "#ffd700",
    },
    {
      icon: <EnvironmentOutlined />,
      title: "Location",
      value: "Ullapara, Sirajgonj, Bangladesh",
      description: "Available for remote work",
      color: "#8a2be2",
    },
    {
      icon: <ClockCircleOutlined />,
      title: "Response Time",
      value: "Within 24 Hours",
      description: "Quick response guaranteed",
      color: "#00ff88",
    },
  ]

  return (
    <div className="bg-black min-h-screen relative overflow-hidden py-8 sm:py-12 lg:py-16 flex items-center">
      {/* Background Effects */}
      <div className="absolute top-[15%] left-[5%] sm:left-[10%] w-48 sm:w-64 lg:w-80 xl:w-[350px] h-48 sm:h-64 lg:h-80 xl:h-[350px] bg-gradient-radial from-green-400/4 to-transparent rounded-full blur-3xl sm:blur-[80px] animate-float" />
      <div className="absolute bottom-[15%] right-[5%] sm:right-[10%] w-40 sm:w-56 lg:w-64 xl:w-[300px] h-40 sm:h-56 lg:h-64 xl:h-[300px] bg-gradient-radial from-purple-600/4 to-transparent rounded-full blur-2xl sm:blur-[60px] animate-float-reverse" />
      <div className="absolute top-[50%] right-[10%] sm:right-[20%] w-32 sm:w-40 lg:w-48 xl:w-[200px] h-32 sm:h-40 lg:h-48 xl:h-[200px] bg-gradient-radial from-yellow-400/3 to-transparent rounded-full blur-xl sm:blur-[50px] animate-float-slow" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Title */}
        <SectionTitle
          sTitle="Get In Touch"
          bTitle="Let's Work Together on Your Next Project"
          description="Ready to bring your vision to life? I'm here to help you create something extraordinary. Let's discuss your project and turn your ideas into reality."
        />

        {/* Contact Content */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Row gutter={[24, 32]} align="middle" className="lg:gutter-40">
            {/* Left Side - Contact Info */}
            <Col xs={24} lg={12}>
              <div className="bg-black/80 border border-green-400/20 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/2 to-purple-600/2 rounded-xl sm:rounded-2xl lg:rounded-3xl" />

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
                    Contact Information
                  </h3>

                  <div className="flex flex-col gap-4 sm:gap-6">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="bg-white/2 border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-5 transition-all duration-300 cursor-pointer hover:bg-green-400/5 hover:border-green-400/30 hover:translate-x-2"
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div
                            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-base sm:text-lg lg:text-xl text-black font-bold"
                            style={{
                              background: `linear-gradient(135deg, ${info.color} 0%, rgba(255,255,255,0.1) 100%)`,
                            }}
                          >
                            {info.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white text-sm sm:text-base lg:text-lg font-semibold mb-1">
                              {info.title}
                            </h4>
                            <p
                              className="text-sm sm:text-base font-medium mb-1 truncate sm:whitespace-normal"
                              style={{ color: info.color }}
                            >
                              {info.value}
                            </p>
                            <p className="text-gray-400 text-xs sm:text-sm m-0">{info.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Side - CTA Card */}
            <Col xs={24} lg={12}>
              <Card className="bg-black/90 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl border border-green-400/20 shadow-2xl shadow-green-400/10 text-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/3 to-purple-600/3 rounded-xl sm:rounded-2xl lg:rounded-3xl" />

                <Space direction="vertical" size="large" className="w-full relative z-10">
                  {/* Icon with Glow Effect */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto rounded-full bg-gradient-to-br from-green-400 to-purple-600 flex items-center justify-center relative shadow-2xl shadow-green-400/40">
                    <ProjectOutlined className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold" />
                    {/* Rotating Ring */}
                    <div className="absolute -top-2 -left-2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 border-2 border-green-400/30 rounded-full border-t-green-400 animate-spin-slow" />
                  </div>

                  <Title
                    level={1}
                    className="bg-gradient-to-r from-green-400 via-purple-600 to-yellow-400 bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-0 leading-tight"
                  >
                    Ready to Start Your Project?
                  </Title>

                  <Paragraph className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-sm mx-auto leading-relaxed">
                    Let's discuss your vision and create something amazing together. I'm here to help bring your ideas
                    to life with creativity and expertise.
                  </Paragraph>

                  {/* Main CTA Button */}
                  <Button
                    type="primary"
                    icon={<MessageOutlined />}
                    onClick={showModal}
                    className="bg-gradient-to-r from-green-400 to-purple-600 border-none rounded-2xl sm:rounded-3xl h-12 sm:h-14 lg:h-16 font-bold px-6 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg shadow-xl shadow-green-400/30 transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/40"
                  >
                    
                    <span className="sm:hidden">Start Conversation</span>
                  </Button>

                  <Divider className="border-white/10 my-4 sm:my-6 lg:my-8" />

                  {/* Quick Contact Options */}
                  <div>
                    <Text className="text-gray-400 text-sm sm:text-base block mb-3 sm:mb-4">
                      Or reach out directly:
                    </Text>
                    <Space size="large" wrap className="justify-center">
                      <a
                        href="mailto:monnafahsan58132@gmail.com"
                        className="text-green-400 font-semibold no-underline transition-all duration-300 hover:text-shadow-green flex items-center gap-2 hover:-translate-y-1 text-sm sm:text-base"
                      >
                        <MailOutlined /> <span className="hidden sm:inline">Email Me</span>
                        <span className="sm:hidden">Email</span>
                      </a>
                      <a
                        href="tel:+8801234567890"
                        className="text-yellow-400 font-semibold no-underline transition-all duration-300 hover:text-shadow-yellow flex items-center gap-2 hover:-translate-y-1 text-sm sm:text-base"
                      >
                        <PhoneOutlined /> <span className="hidden sm:inline">Call Me</span>
                        <span className="sm:hidden">Call</span>
                      </a>
                    </Space>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Enhanced Contact Modal */}
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width="90%"
        style={{ maxWidth: "700px" }}
        centered
        styles={{
          mask: {
            backdropFilter: "blur(15px)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          content: {
            backgroundColor: "#1a1a1a",
            border: "1px solid rgba(0, 255, 136, 0.2)",
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.9)",
            borderRadius: "20px",
          },
          header: {
            backgroundColor: "transparent",
            borderBottom: "1px solid rgba(0, 255, 136, 0.2)",
            borderRadius: "20px 20px 0 0",
          },
          body: {
            backgroundColor: "#1a1a1a",
            padding: "20px",
          },
        }}
        title={
          <div className="text-center py-4 sm:py-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-green-400 to-purple-600 flex items-center justify-center shadow-2xl shadow-green-400/40">
              <MessageOutlined className="text-2xl sm:text-3xl text-black font-bold" />
            </div>
            <Title level={2} className="text-white m-0 mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl">
              Let's Create Something Amazing
            </Title>
            <Text className="text-gray-300 text-sm sm:text-base">
              Tell me about your project and I'll get back to you within 24 hours
            </Text>
          </div>
        }
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          size="large"
          className="mt-4 sm:mt-6"
        >
          <Row gutter={[16, 0]} className="sm:gutter-20">
            <Col xs={24} sm={12}>
              <Form.Item
                label={<span className="text-white font-semibold text-sm sm:text-base">Full Name</span>}
                name="fullName"
                rules={[
                  { required: true, message: "Please input your full name!" },
                  { min: 2, message: "Name must be at least 2 characters!" },
                ]}
              >
                <Input
                  placeholder="John Doe"
                  style={{
                    backgroundColor: "#2a2a2a",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                    height: "48px",
                    fontSize: "16px",
                    borderRadius: "8px",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#00ff88"
                    e.target.style.boxShadow = "0 0 0 3px rgba(0, 255, 136, 0.2)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.2)"
                    e.target.style.boxShadow = "none"
                  }}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label={<span className="text-white font-semibold text-sm sm:text-base">Mobile Number</span>}
                name="mobileNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your mobile number!",
                  },
                  {
                    pattern: /^[+]?[0-9\s\-()]{10,15}$/,
                    message: "Enter a valid mobile number",
                  },
                ]}
              >
                <Input
                  placeholder="+8801XXXXXXXXX"
                  style={{
                    backgroundColor: "#2a2a2a",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                    height: "48px",
                    fontSize: "16px",
                    borderRadius: "8px",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#00ff88"
                    e.target.style.boxShadow = "0 0 0 3px rgba(0, 255, 136, 0.2)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.2)"
                    e.target.style.boxShadow = "none"
                  }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label={<span className="text-white font-semibold text-sm sm:text-base">Email Address</span>}
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input
              placeholder="you@example.com"
              style={{
                backgroundColor: "#2a2a2a",
                borderColor: "rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                height: "48px",
                fontSize: "16px",
                borderRadius: "8px",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#00ff88"
                e.target.style.boxShadow = "0 0 0 3px rgba(0, 255, 136, 0.2)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.2)"
                e.target.style.boxShadow = "none"
              }}
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-white font-semibold text-sm sm:text-base">Tell Me About Your Project</span>}
            name="message"
            rules={[
              {
                required: true,
                message: "Please provide details about your project!",
              },
              { min: 10, message: "At least 10 characters required!" },
            ]}
          >
            <TextArea
              rows={4}
              placeholder="Describe your goals, timeline, budget, and any specific requirements..."
              style={{
                backgroundColor: "#2a2a2a",
                borderColor: "rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                fontSize: "16px",
                borderRadius: "8px",
                resize: "none",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#00ff88"
                e.target.style.boxShadow = "0 0 0 3px rgba(0, 255, 136, 0.2)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.2)"
                e.target.style.boxShadow = "none"
              }}
            />
          </Form.Item>

          <Form.Item className="mt-6 sm:mt-10">
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-5">
              <Button
                onClick={handleCancel}
                size="large"
                disabled={isLoading}
                style={{
                  backgroundColor: "transparent",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: "#ffffff",
                  height: "56px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  fontSize: "16px",
                  borderWidth: "2px",
                }}
                className="flex-1 transition-all duration-300 hover:border-white/60 hover:bg-white/5 order-2 sm:order-1"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)"
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)"
                  e.currentTarget.style.backgroundColor = "transparent"
                }}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                icon={isLoading ? <LoadingOutlined /> : <SendOutlined />}
                loading={isLoading}
                size="large"
                style={{
                  background: "linear-gradient(135deg, #00ff88 0%, #8a2be2 100%)",
                  border: "none",
                  height: "56px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  boxShadow: "0 10px 25px rgba(0, 255, 136, 0.3)",
                  color: "#000000",
                }}
                className="flex-1 sm:flex-2 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/40 hover:-translate-y-1 order-1 sm:order-2"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 255, 136, 0.4)"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 255, 136, 0.3)"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                {isLoading ? "Sending Message..." : "Send Message"}
              </Button>
            </div>
          </Form.Item>
        </Form>

        {/* Custom CSS to fix input styling */}
        <style >{`
          :global(.ant-input::placeholder) {
            color: rgba(255, 255, 255, 0.5) !important;
          }
          
          :global(.ant-input:focus::placeholder) {
            color: rgba(255, 255, 255, 0.3) !important;
          }
          
          :global(.ant-form-item-explain-error) {
            color: #ff4757 !important;
          }
          
          :global(.ant-form-item-label > label) {
            color: #ffffff !important;
          }
          
          :global(.ant-modal-close) {
            color: #ffffff !important;
          }
          
          :global(.ant-modal-close:hover) {
            color: #00ff88 !important;
          }
        `}</style>
      </Modal>

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
        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 12s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Contact
