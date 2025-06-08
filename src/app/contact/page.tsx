"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import Background3D from "@/components/three/Background3D";
import { Button } from "@/components/ui/button";
import { Terminal, Mail, MessageSquare, AlertCircle, CheckCircle, Github, Linkedin, Lock } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    verificationKey: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      if (formState.verificationKey === "h4ck3r" || formState.verificationKey === "") {
        setSubmitted(true);
        setError(false);
      } else {
        setError(true);
        setSubmitted(false);
      }
    }, 1000);
  };

  return (
    <>
      <Background3D />
      <PageWrapper>
        <section className="py-12">
          <div className="flex items-center mb-8">
            <Terminal className="h-6 w-6 mr-3 text-green-400" />
            <h1 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-green-400">&gt;</span> CONTACT<span className="text-green-400 animate-pulse">_</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-black/40 backdrop-blur-sm border border-green-800/30 rounded-lg p-6"
            >
              <div className="mb-6">
                <h2 className="text-xl font-mono text-green-300 mb-4 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-green-400" />
                  Send Message
                </h2>
                <p className="text-zinc-400 mb-4">
                  Use PGP encryption for sensitive information. Public key available on request.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-md p-4 bg-green-900/20 border border-green-500/30 mb-4"
                >
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <p className="text-green-400">Message sent successfully!</p>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">
                    Your message has been encrypted and queued for processing. I'll respond through a secure channel shortly.
                  </p>
                </motion.div>
              ) : error ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-md p-4 bg-red-900/20 border border-red-500/30 mb-4"
                >
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                    <p className="text-red-400">Verification failed!</p>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">
                    Access denied. Incorrect verification key. Try again or use a different contact method.
                  </p>
                </motion.div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-zinc-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900/50 border border-green-900/30 text-zinc-300 px-3 py-2 rounded-md font-mono text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-zinc-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900/50 border border-green-900/30 text-zinc-300 px-3 py-2 rounded-md font-mono text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-zinc-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-zinc-900/50 border border-green-900/30 text-zinc-300 px-3 py-2 rounded-md font-mono text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="verificationKey" className="block text-sm font-mono text-zinc-400 mb-1 flex items-center">
                    <Lock className="h-3 w-3 mr-1" />
                    Verification Key (optional)
                  </label>
                  <input
                    type="text"
                    id="verificationKey"
                    name="verificationKey"
                    value={formState.verificationKey}
                    onChange={handleChange}
                    className="w-full bg-zinc-900/50 border border-green-900/30 text-zinc-300 px-3 py-2 rounded-md font-mono text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter key for priority response"
                  />
                  <p className="mt-1 text-xs text-zinc-500">For legitimate inquiries, leave blank or use provided key.</p>
                </div>

                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-black font-bold w-full"
                >
                  <Terminal className="h-4 w-4 mr-2" />
                  Send Encrypted Message
                </Button>
              </form>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-green-800/30 rounded-lg p-6"
              >
                <h2 className="text-xl font-mono text-green-300 mb-4 flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-green-400" />
                  Contact Methods
                </h2>

                <div className="space-y-4">
                  <div className="terminal-command font-mono text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">$</span>
                      <span className="text-zinc-300">For general inquiries:</span>
                    </div>
                    <div className="ml-4 mt-2">
                      <span className="text-blue-400">contact@master-hacker.io</span>
                      <span className="text-zinc-600">{" // PGP encrypted preferred"}</span>
                    </div>
                  </div>

                  <div className="terminal-command font-mono text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">$</span>
                      <span className="text-zinc-300">For security vulnerabilities:</span>
                    </div>
                    <div className="ml-4 mt-2">
                      <span className="text-blue-400">security@master-hacker.io</span>
                      <span className="text-zinc-600">{" // Include POC if possible"}</span>
                    </div>
                  </div>

                  <div className="terminal-command font-mono text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">$</span>
                      <span className="text-zinc-300">Signal/Telegram:</span>
                    </div>
                    <div className="ml-4 mt-2">
                      <span className="text-zinc-400">Request secure contact details via email</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-black/40 backdrop-blur-sm border border-green-800/30 rounded-lg p-6"
              >
                <h2 className="text-xl font-mono text-green-300 mb-4 flex items-center">
                  <Github className="h-5 w-5 mr-2 text-green-400" />
                  Social & Profiles
                </h2>

                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-zinc-400 hover:text-green-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="font-mono text-sm">github.com/master-hacker</span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-2 text-zinc-400 hover:text-green-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="font-mono text-sm">linkedin.com/in/master-hacker</span>
                  </a>

                  <div className="border-t border-green-800/20 pt-4 mt-4">
                    <div className="font-mono text-sm">
                      <div className="flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        <div>
                          <p className="text-zinc-300">HackTheBox: </p>
                          <span className="text-zinc-400 text-xs">master_hacker (Ranked: Elite Hacker)</span>
                        </div>
                      </div>
                    </div>

                    <div className="font-mono text-sm mt-3">
                      <div className="flex items-start">
                        <span className="text-green-500 mr-2">→</span>
                        <div>
                          <p className="text-zinc-300">TryHackMe: </p>
                          <span className="text-zinc-400 text-xs">master_hacker (Global Rank: Top 10)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-black/40 backdrop-blur-sm border border-green-800/30 rounded-lg p-4"
              >
                <div className="font-mono text-xs text-zinc-500">
                  <span className="text-green-500">NOTE:</span> All communications are end-to-end encrypted.
                  Verification required for sensitive projects. Response time: 24-48 hours.
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
