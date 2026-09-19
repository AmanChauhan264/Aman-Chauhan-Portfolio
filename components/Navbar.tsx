"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Focus", href: "#focus" },
  { name: "LeetCode", href: "#leetcode" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section highlighting logic
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-cyan-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center space-x-2 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-bold text-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">
                AM
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors leading-none">
              AMAN
            </span>
            <span className="text-[10px] font-mono text-cyan-400 tracking-widest leading-none mt-1">
              FULL-STACK
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Side Socials & Resume CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://github.com/AmanChauhan264"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href="https://linkedin.com/in/aman-kumar-chauhan"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={19} />
          </a>
          <a
            href="/resume.pdf"
            download="Aman_Kumar_Chauhan_Resume.pdf"
            className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-semibold text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <a
            href="/resume.pdf"
            download="Aman_Kumar_Chauhan_Resume.pdf"
            className="md:hidden flex items-center space-x-1.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs px-3 py-1.5 rounded-lg font-medium"
          >
            <FileText size={14} />
            <span>CV</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-cyan-400 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 mt-2 shadow-2xl flex flex-col space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                      : "text-slate-300 hover:bg-slate-900"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex space-x-3">
              <a
                href="https://github.com/AmanChauhan264"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/aman-kumar-chauhan"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
            <a
              href="/resume.pdf"
              download="Aman_Kumar_Chauhan_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/20"
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
