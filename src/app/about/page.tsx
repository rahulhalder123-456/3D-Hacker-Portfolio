"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import Background3D from "@/components/three/Background3D";
import { Terminal, Clock, MapPin, Globe, BookOpen, Users, Blocks, Cpu } from "lucide-react";

export default function AboutPage() {
  const timelineEvents = [
    {
      year: "2023",
      title: "Lead Security Researcher",
      company: "CyberSec Innovations",
      description: "Leading a team of security researchers focused on quantum-resistant cryptography and AI security"
    },
    {
      year: "2021",
      title: "Senior Penetration Tester",
      company: "NetGuard Systems",
      description: "Conducted advanced penetration tests for Fortune 500 companies and government agencies"
    },
    {
      year: "2019",
      title: "Security Consultant",
      company: "SecureCore",
      description: "Specialized in secure software development lifecycle and application security"
    },
    {
      year: "2017",
      title: "Security Researcher",
      company: "Independent",
      description: "Published multiple zero-day vulnerabilities and contributed to open-source security tools"
    },
    {
      year: "2015",
      title: "Systems Engineer",
      company: "TechNova",
      description: "Developed secure network infrastructure and identity management solutions"
    }
  ];

  return (
    <>
      <Background3D />
      <PageWrapper>
        <section className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center mb-8">
              <Terminal className="h-6 w-6 mr-3 text-green-400" />
              <h1 className="text-3xl md:text-4xl font-bold font-mono">
                <span className="text-green-400">&gt;</span> ABOUT<span className="text-green-400 animate-pulse">_</span>
              </h1>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-green-800/30 rounded-lg p-6 mb-8">
              <div className="mb-6">
                <h2 className="text-xl font-mono text-green-300 mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-green-400" />
                  Identity
                </h2>
                <p className="text-zinc-300 mb-4">
                  Security professional with over 8 years of experience in offensive security,
                  penetration testing, and secure systems design. Specializing in finding vulnerabilities
                  before malicious actors can exploit them.
                </p>
                <p className="text-zinc-300">
                  My approach combines technical expertise with strategic thinking to help organizations
                  build robust security postures that can withstand sophisticated attacks.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-mono text-green-200 mb-3 flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    Location
                  </h3>
                  <p className="text-zinc-400 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-green-500" />
                    Remote / Global
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-mono text-green-200 mb-3 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Education
                  </h3>
                  <p className="text-zinc-400">M.S. Computer Science & Cybersecurity</p>
                  <p className="text-zinc-500 text-sm">Elite Technical University</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-mono text-green-200 mb-3 flex items-center">
                    <Blocks className="h-4 w-4 mr-2" />
                    Specialization
                  </h3>
                  <p className="text-zinc-400">Offensive Security & Cryptography</p>
                  <p className="text-zinc-500 text-sm">Zero-day Research, Secure Architecture</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-green-400" />
              <h2 className="text-xl font-mono text-green-300">Career Timeline</h2>
            </div>

            <div className="relative pl-8 border-l border-green-800/40 space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year + event.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  className="relative"
                >
                  <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-green-500 border-4 border-zinc-900"></div>
                  <div className="mb-1 flex items-baseline">
                    <span className="mr-2 text-green-400 font-mono">{event.year}</span>
                    <h3 className="text-lg font-bold text-zinc-200">{event.title}</h3>
                  </div>
                  <p className="text-zinc-400 mb-1">{event.company}</p>
                  <p className="text-zinc-500 text-sm">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <div className="flex items-center mb-6">
              <Cpu className="h-5 w-5 mr-2 text-green-400" />
              <h2 className="text-xl font-mono text-green-300">Philosophy</h2>
            </div>

            <div className="terminal-intro mb-12 bg-black/70 border border-green-500/20 rounded-md p-4">
              <div className="font-mono text-sm space-y-4">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mr-1 mt-0.5">$</span>
                  <div>
                    <p className="text-zinc-200">
                      I believe security is not just about writing secure code or finding vulnerabilities.
                      It's a mindset that should permeate every aspect of technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-green-500 mr-1 mt-0.5">$</span>
                  <div>
                    <p className="text-zinc-200">
                      The most effective security professionals think like attackers but build like defenders,
                      always staying one step ahead of emerging threats.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-green-500 mr-1 mt-0.5">$</span>
                  <div>
                    <p className="text-zinc-200">
                      My goal is not just to break systems, but to help build them better.
                      Each vulnerability found is an opportunity to strengthen our collective security posture.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-green-500 mr-1 mt-0.5">$</span>
                  <div>
                    <p className="text-zinc-200">
                      In the face of sophisticated threats, knowledge sharing and collaboration are our
                      strongest weapons. Security through obscurity is no security at all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </PageWrapper>
    </>
  );
}
