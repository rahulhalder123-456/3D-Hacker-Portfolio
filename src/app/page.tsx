"use client";

import Background3D from "@/components/three/Background3D";
import PageWrapper from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Terminal, Code, UserCheck, RocketIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <Background3D />
      <PageWrapper>
        <section className="min-h-[calc(100vh-8rem)] flex flex-col justify-center items-center text-center">
          <div className="glitch-container my-10" data-text="MASTER_HACKER">
            <h1 className="text-5xl md:text-7xl font-mono font-bold text-green-400 mb-4 relative glitch-text">
              MASTER_HACKER
            </h1>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 mb-10">
            <p className="text-xl text-zinc-300 mb-8">
              <span className="text-green-500 font-mono">$</span> Senior cybersecurity specialist and fullstack developer with expertise in
              <span className="font-mono text-green-400"> [penetration testing, secure coding, blockchain technology]</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 font-mono text-sm">
              <div className="bg-zinc-900/50 border border-green-800/30 rounded-md p-3 flex items-center">
                <Terminal className="h-5 w-5 mr-2 text-green-500" />
                <span>Penetration Testing</span>
              </div>
              <div className="bg-zinc-900/50 border border-green-800/30 rounded-md p-3 flex items-center">
                <Code className="h-5 w-5 mr-2 text-green-500" />
                <span>Secure Coding</span>
              </div>
              <div className="bg-zinc-900/50 border border-green-800/30 rounded-md p-3 flex items-center">
                <UserCheck className="h-5 w-5 mr-2 text-green-500" />
                <span>Identity Protection</span>
              </div>
              <div className="bg-zinc-900/50 border border-green-800/30 rounded-md p-3 flex items-center">
                <RocketIcon className="h-5 w-5 mr-2 text-green-500" />
                <span>Exploit Development</span>
              </div>
            </div>
          </div>

          <div className="terminal-window mt-10 bg-black/70 border border-green-500/20 rounded-md w-full max-w-2xl p-4 text-left">
            <div className="terminal-header flex items-center mb-2">
              <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
              <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
              <div className="rounded-full w-3 h-3 bg-green-500 mr-2"></div>
              <span className="text-xs text-zinc-500 font-mono">terminal@hacker:~</span>
            </div>
            <div className="font-mono text-green-400 text-sm">
              <p>
                <span className="text-green-600">hacker@mainframe:~$</span> whoami
              </p>
              <p>master_hacker</p>
              <p>
                <span className="text-green-600">hacker@mainframe:~$</span> ./access_portfolio
              </p>
              <p>Accessing secure portfolio modules...</p>
              <p>Encryption: <span className="text-yellow-400">AES-256</span></p>
              <p>Status: <span className="text-green-400">Access Granted</span></p>
              <p>
                <span className="text-green-600">hacker@mainframe:~$</span>{" "}
                <span className="animate-pulse">█</span>
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link href="/projects">
              <Button className="bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-6">
                View Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-950/50">
                Contact Me
              </Button>
            </Link>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
