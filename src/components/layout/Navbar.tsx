"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Code, Terminal, User, Mail, Home } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: Code },
  { href: "/skills", label: "Skills", icon: Terminal },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-green-500/20 font-mono">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-green-500 font-bold text-xl flex items-center"
          >
            <Terminal className="mr-2 h-5 w-5" />
            <span className="hidden sm:inline">H4CK3R_</span>PORT<span className="text-green-400">FOL.IO</span>
          </motion.div>

          <ul className="flex space-x-1 sm:space-x-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;

              return (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-2 py-1.5 rounded-md flex items-center transition-colors ${
                        isActive
                          ? "text-green-400 bg-green-800/20 border border-green-500/30"
                          : "text-zinc-400 hover:text-green-300 hover:bg-green-900/10"
                      }`}
                    >
                      <Icon className="h-4 w-4 sm:mr-1" />
                      <span className="hidden sm:inline text-xs">{link.label}</span>
                    </motion.div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
