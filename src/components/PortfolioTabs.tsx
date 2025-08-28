"use client";

import type React from "react";

import { Tabs } from "antd";
import { ExternalLinkIcon, EyeIcon } from "lucide-react";

import { usePortfolios } from "../api/usePortfolios";

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  category: string;
  technologies: string[];
}

const PortfolioTabs = () => {
  const { data } = usePortfolios();
  const projects: Project[] = (data || []).map((p: any, idx: number) => ({
    id: idx + 1,
    image: p.imageUrl || "",
    title: p.title || "",
    description: p.description || "",
    link: p.link || "#",
    category: (p.category || "").toLowerCase(),
    technologies: [],
  }));

  const filterProjects = (category: string) => {
    return projects.filter((project) => project.category === category);
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="bg-black/80 border border-green-400/20 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 ease-out cursor-pointer relative backdrop-blur-sm hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-400/20 group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay with Actions */}
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-gradient-to-br from-green-400 to-yellow-400 text-black border-none p-2 sm:p-3 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 flex items-center justify-center">
            <EyeIcon size={16} className="sm:w-5 sm:h-5" />
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 text-white border border-white/30 p-2 sm:p-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/30 flex items-center justify-center no-underline"
          >
            <ExternalLinkIcon size={16} className="sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-br from-green-400 to-yellow-400 text-black px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold capitalize">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6">
        {/* Title */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-green-400/10 text-green-400 px-2 sm:px-2.5 py-1 rounded-lg text-xs sm:text-sm font-medium border border-green-400/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-yellow-400 no-underline text-sm sm:text-base font-semibold transition-colors duration-300 hover:text-green-400"
        >
          View Project <ExternalLinkIcon size={14} className="sm:w-4 sm:h-4" />
        </a>
      </div>
    </div>
  );

  const renderGrid = (category: string) => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
      {filterProjects(category).map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );

  const tabItems = [
    {
      key: "1",
      label: (
        <span className="text-white text-sm sm:text-base lg:text-lg font-semibold px-2 sm:px-4 py-1 sm:py-2">
          Graphics & Branding
        </span>
      ),
      children: renderGrid("graphics"),
    },
    {
      key: "2",
      label: (
        <span className="text-white text-sm sm:text-base lg:text-lg font-semibold px-2 sm:px-4 py-1 sm:py-2">
          Motion Graphics
        </span>
      ),
      children: renderGrid("motion"),
    },
    {
      key: "3",
      label: (
        <span className="text-white text-sm sm:text-base lg:text-lg font-semibold px-2 sm:px-4 py-1 sm:py-2">
          Video Editing
        </span>
      ),
      children: renderGrid("video"),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div style={{ "--ant-primary-color": "#00ff88" } as React.CSSProperties}>
        <Tabs
          defaultActiveKey="1"
          items={tabItems}
          className="portfolio-tabs"
          centered
        />
      </div>

      <style>{`
        .portfolio-tabs .ant-tabs-nav {
          background: rgba(0, 0, 0, 0.8) !important;
          border-radius: 12px !important;
          padding: 8px !important;
          margin-bottom: 24px !important;
          border: 1px solid rgba(0, 255, 136, 0.2) !important;
        }
        
        @media (min-width: 640px) {
          .portfolio-tabs .ant-tabs-nav {
            border-radius: 15px !important;
            padding: 10px !important;
            margin-bottom: 32px !important;
          }
        }
        
        @media (min-width: 1024px) {
          .portfolio-tabs .ant-tabs-nav {
            margin-bottom: 40px !important;
          }
        }

        .portfolio-tabs .ant-tabs-nav-wrap {
          justify-content: center !important;
        }

        .portfolio-tabs .ant-tabs-tab {
          background: transparent !important;
          border: 1px solid rgba(0, 255, 136, 0.2) !important;
          border-radius: 8px !important;
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
          min-width: auto !important;
        }
        
        @media (min-width: 640px) {
          .portfolio-tabs .ant-tabs-tab {
            border-radius: 12px !important;
            margin: 0 6px !important;
          }
        }
        
        @media (min-width: 1024px) {
          .portfolio-tabs .ant-tabs-tab {
            margin: 0 8px !important;
          }
        }

        .portfolio-tabs .ant-tabs-tab:hover {
          background: rgba(0, 255, 136, 0.1) !important;
          border-color: rgba(0, 255, 136, 0.5) !important;
        }

        .portfolio-tabs .ant-tabs-tab-active {
          background: linear-gradient(135deg, #00ff88 0%, #ffd700 100%) !important;
          border-color: transparent !important;
        }

        .portfolio-tabs .ant-tabs-tab-active .ant-tabs-tab-btn span {
          color: #000 !important;
          font-weight: bold !important;
        }

        .portfolio-tabs .ant-tabs-ink-bar {
          display: none !important;
        }

        .portfolio-tabs .ant-tabs-content-holder {
          background: transparent !important;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default PortfolioTabs;
