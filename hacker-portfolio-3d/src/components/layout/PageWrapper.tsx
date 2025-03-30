"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

type PageWrapperProps = {
  children: ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col text-zinc-200">
      <Navbar />

      <main className="flex-grow pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto px-4 py-8"
        >
          {children}
        </motion.div>
      </main>

      <footer className="text-center py-4 text-xs text-zinc-500 font-mono border-t border-green-800/20">
        <div className="container mx-auto px-4">
          <p>H4CK3R_PORTFOLIO &copy; {new Date().getFullYear()}</p>
          <p className="mt-1 text-green-600/60">[Executed in 0.03s]</p>
        </div>
      </footer>
    </div>
  );
}
