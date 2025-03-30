"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import Background3D from "@/components/three/Background3D";
import { Terminal, ExternalLink, Eye, Lock, Shield, Database, Cpu } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  icon: React.ReactNode;
  securityLevel: "Low" | "Medium" | "High" | "Critical";
}

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "CIPHER-X",
      description: "End-to-end encrypted messaging platform with zero-knowledge proof authentication",
      tags: ["Cryptography", "Security", "Blockchain"],
      image: "encrypted_chat.jpg",
      icon: <Lock className="h-8 w-8 text-green-400" />,
      securityLevel: "Critical"
    },
    {
      id: 2,
      title: "PHANTOM-SCAN",
      description: "Advanced network vulnerability scanner with AI-powered exploit detection",
      tags: ["Network Security", "AI", "Penetration Testing"],
      image: "network_scan.jpg",
      icon: <Eye className="h-8 w-8 text-green-400" />,
      securityLevel: "High"
    },
    {
      id: 3,
      title: "AEGIS-SHIELD",
      description: "Zero-day defense system using behavioral analysis and pattern recognition",
      tags: ["Zero-day", "Defense", "Machine Learning"],
      image: "zero_day.jpg",
      icon: <Shield className="h-8 w-8 text-green-400" />,
      securityLevel: "High"
    },
    {
      id: 4,
      title: "QUANTUM-DB",
      description: "Quantum-resistant database with post-quantum cryptographic algorithms",
      tags: ["Quantum Computing", "Database", "Cryptography"],
      image: "quantum_db.jpg",
      icon: <Database className="h-8 w-8 text-green-400" />,
      securityLevel: "Medium"
    },
    {
      id: 5,
      title: "NEURAL-HACK",
      description: "AI-powered penetration testing framework with autonomous exploitation capabilities",
      tags: ["AI", "Penetration Testing", "Automation"],
      image: "ai_pentest.jpg",
      icon: <Cpu className="h-8 w-8 text-green-400" />,
      securityLevel: "High"
    }
  ];

  const getSecurityLevelColor = (level: string) => {
    switch (level) {
      case "Low":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "High":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Critical":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-green-500/20 text-green-400 border-green-500/30";
    }
  };

  return (
    <>
      <Background3D />
      <PageWrapper>
        <section className="py-12">
          <div className="flex items-center mb-8">
            <Terminal className="h-6 w-6 mr-3 text-green-400" />
            <h1 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-green-400">&gt;</span> PROJECTS<span className="text-green-400 animate-pulse">_</span>
            </h1>
          </div>

          <p className="text-zinc-400 mb-12 max-w-2xl">
            Secure portfolio of advanced cybersecurity projects showcasing expertise in encryption,
            penetration testing, and defense systems. <span className="text-green-400">All source code available on request
            after identity verification.</span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: project.id * 0.1 }}
                className="relative bg-black/40 backdrop-blur-sm border border-green-800/30 rounded-lg overflow-hidden"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(0, 255, 0, 0.2)",
                  borderColor: "rgba(0, 255, 128, 0.5)"
                }}
              >
                <div className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-mono border">
                  <span className={`${getSecurityLevelColor(project.securityLevel)} px-2 py-1 rounded-md text-xs`}>
                    SECURITY: {project.securityLevel}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-900/20 p-3 rounded-md mr-4">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold font-mono text-green-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-zinc-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-black/40 border border-green-800/40 px-2 py-1 rounded-sm text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 font-mono text-xs">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">$</span>
                      <span className="text-zinc-400">git clone https://github.com/master-hacker/{project.title.toLowerCase()}.git</span>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: activeProject === project.id ? 1 : 0,
                        height: activeProject === project.id ? "auto" : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 pt-2 border-t border-green-800/20">
                        <p className="text-red-400">
                          WARNING: Private repository. Access requires 2FA verification.
                        </p>
                        <p className="text-green-400 mt-1">
                          Contact for demonstration and code review.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-blue-500"
                    initial={{ width: "0%" }}
                    animate={{ width: activeProject === project.id ? "100%" : "0%" }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-black/40 backdrop-blur-sm border border-green-800/30 rounded-lg">
            <h2 className="text-xl font-mono mb-4 flex items-center">
              <Terminal className="h-5 w-5 mr-2 text-green-400" />
              <span className="text-green-400">$</span> Research Publications
            </h2>

            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <div>
                  <span className="text-zinc-300">Advanced Exploitation of Quantum Cryptographic Systems (2023)</span>
                  <div className="flex items-center mt-1">
                    <ExternalLink className="h-3 w-3 mr-1 text-blue-400" />
                    <span className="text-blue-400 text-xs">DEFCON 31</span>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <div>
                  <span className="text-zinc-300">Zero-Knowledge Authentication Methods for Secure Infrastructures (2022)</span>
                  <div className="flex items-center mt-1">
                    <ExternalLink className="h-3 w-3 mr-1 text-blue-400" />
                    <span className="text-blue-400 text-xs">BlackHat USA</span>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <div>
                  <span className="text-zinc-300">Neural Network Based Intrusion Detection: A New Approach (2021)</span>
                  <div className="flex items-center mt-1">
                    <ExternalLink className="h-3 w-3 mr-1 text-blue-400" />
                    <span className="text-blue-400 text-xs">arXiv:2105.XXXXX</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
