"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import Background3D from "@/components/three/Background3D";
import { Terminal, Server, Code, Shield, Braces, Database, Cpu, Wifi, Lock, BrainCircuit } from "lucide-react";

interface Skill {
  category: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
    description: string;
  }[];
}

export default function SkillsPage() {
  const skills: Skill[] = [
    {
      category: "Penetration Testing",
      icon: <Shield className="h-6 w-6 text-green-400" />,
      skills: [
        { name: "Network Penetration", level: 95, description: "Expert in identifying and exploiting network vulnerabilities" },
        { name: "Web Application Testing", level: 90, description: "OWASP Top 10 exploitation and mitigation techniques" },
        { name: "Wireless Security", level: 85, description: "WPA/WPA2/WPA3 cracking and secure implementation" },
        { name: "Social Engineering", level: 80, description: "Advanced human vulnerability testing and awareness training" }
      ]
    },
    {
      category: "Programming & Development",
      icon: <Code className="h-6 w-6 text-green-400" />,
      skills: [
        { name: "C/C++", level: 90, description: "Low-level system programming for security tools" },
        { name: "Python", level: 95, description: "Rapid exploitation development and automation" },
        { name: "Rust", level: 85, description: "Memory-safe system development for security applications" },
        { name: "Assembly", level: 75, description: "Reverse engineering and binary exploitation" }
      ]
    },
    {
      category: "Cryptography",
      icon: <Lock className="h-6 w-6 text-green-400" />,
      skills: [
        { name: "Encryption Algorithms", level: 90, description: "Implementation and analysis of modern crypto systems" },
        { name: "Cryptanalysis", level: 85, description: "Breaking flawed implementations and deprecated algorithms" },
        { name: "Blockchain Security", level: 80, description: "Smart contract auditing and DeFi security" },
        { name: "Zero-Knowledge Proofs", level: 75, description: "Privacy-preserving authentication systems" }
      ]
    },
    {
      category: "Machine Learning & AI Security",
      icon: <BrainCircuit className="h-6 w-6 text-green-400" />,
      skills: [
        { name: "Adversarial Machine Learning", level: 85, description: "Model poisoning and evasion techniques" },
        { name: "AI-Based Threat Detection", level: 90, description: "Neural networks for detecting zero-day attacks" },
        { name: "NLP Security", level: 80, description: "Securing language models from prompt injection" },
        { name: "Computer Vision Security", level: 75, description: "Securing image recognition systems from manipulation" }
      ]
    }
  ];

  return (
    <>
      <Background3D />
      <PageWrapper>
        <section className="py-12">
          <div className="flex items-center mb-8">
            <Terminal className="h-6 w-6 mr-3 text-green-400" />
            <h1 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-green-400">&gt;</span> SKILLS<span className="text-green-400 animate-pulse">_</span>
            </h1>
          </div>

          <div className="terminal-intro mb-12 bg-black/70 border border-green-500/20 rounded-md p-4 max-w-3xl">
            <div className="font-mono text-green-400 text-sm">
              <p>
                <span className="text-green-600">hacker@mainframe:~$</span> ./analyze_skills.sh
              </p>
              <p className="text-zinc-400 mt-1">
                Running skill analysis module...
              </p>
              <p className="mt-1">
                <span className="text-yellow-400">Scanning</span> expertise levels in key areas of cybersecurity...
              </p>
              <p className="mt-1">
                <span className="text-green-400">Complete</span>: Analysis finished with confidence level of 99.7%
              </p>
              <p>
                <span className="text-green-600">hacker@mainframe:~$</span>{" "}
                <span className="animate-pulse">█</span>
              </p>
            </div>
          </div>

          <div className="grid gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-green-800/30 rounded-lg p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-green-900/20 p-3 rounded-md mr-4">
                    {skillCategory.icon}
                  </div>
                  <h2 className="text-xl font-bold font-mono text-green-300">
                    {skillCategory.category}
                  </h2>
                </div>

                <div className="space-y-6">
                  {skillCategory.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-mono text-zinc-200">{skill.name}</h3>
                        <span className="text-xs font-mono text-zinc-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-zinc-900/80 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                        />
                      </div>
                      <p className="text-sm text-zinc-400">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="bg-black/40 backdrop-blur-sm border border-green-800/30 rounded-lg p-5">
              <div className="flex items-center mb-3">
                <Server className="h-5 w-5 mr-2 text-green-400" />
                <h3 className="font-mono text-green-300">Certifications</h3>
              </div>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-baseline">
                  <span className="text-green-500 mr-2">→</span>
                  <span>OSCP (Offensive Security Certified Professional)</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-green-500 mr-2">→</span>
                  <span>CISSP (Certified Information Systems Security Professional)</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-green-500 mr-2">→</span>
                  <span>CEH (Certified Ethical Hacker)</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-green-500 mr-2">→</span>
                  <span>AWS Certified Security Specialist</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-green-800/30 rounded-lg p-5">
              <div className="flex items-center mb-3">
                <Cpu className="h-5 w-5 mr-2 text-green-400" />
                <h3 className="font-mono text-green-300">Tools Mastery</h3>
              </div>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-baseline">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Metasploit Framework (Expert)</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Wireshark & Packet Analysis (Expert)</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Burp Suite Professional (Expert)</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Ghidra & IDA Pro (Advanced)</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-green-800/30 rounded-lg p-5">
              <div className="flex items-center mb-3">
                <Wifi className="h-5 w-5 mr-2 text-green-400" />
                <h3 className="font-mono text-green-300">CTF Highlights</h3>
              </div>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-baseline">
                  <span className="text-green-500 mr-2">→</span>
                  <span>DEFCON CTF Finals (2023) - Top 10</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-green-500 mr-2">→</span>
                  <span>HackTheBox Pro Labs - All Completed</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Google CTF (2022) - 3rd Place</span>
                </li>
                <li className="flex items-baseline">
                  <span className="text-green-500 mr-2">→</span>
                  <span>SANS Holiday Hack - Winner (2021)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </section>
      </PageWrapper>
    </>
  );
}
