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
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#292929] py-3 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center space-x-2.5 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF6B00] to-[#FF8A00] p-0.5 shadow-lg shadow-[#FF6B00]/25 group-hover:shadow-[#FF6B00]/50 transition-shadow">
            <div className="w-full h-full bg-[#080808] rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-bold text-lg text-[#FF6B00] group-hover:text-[#FF8A00] transition-colors">
                AM
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg tracking-tight text-[#F5F5F5] group-hover:text-[#FF6B00] transition-colors leading-none">
              AMAN
            </span>
            <span className="text-[9.5px] font-mono text-[#FF8A00] tracking-widest leading-none mt-1 font-semibold">
              MERN STACK
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-[#111111]/80 border border-[#292929] px-4 py-1.5 rounded-full backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#FF6B00]/15 text-[#FF8A00] border border-[#FF6B00]/40 shadow-sm shadow-[#FF6B00]/20 font-semibold"
                    : "text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-white/5"
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
            className="p-2 rounded-xl text-[#A3A3A3] hover:text-[#FF6B00] hover:bg-[#151515] border border-transparent hover:border-[#292929] transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href="https://linkedin.com/in/aman-kumar-chauhan"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl text-[#A3A3A3] hover:text-[#FF6B00] hover:bg-[#151515] border border-transparent hover:border-[#292929] transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={19} />
          </a>
          <a
            href="/resume.pdf"
            download="Aman_Kumar_Chauhan_Resume.pdf"
            className="flex items-center space-x-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8A00] hover:from-[#FF8A00] hover:to-[#FFB066] text-[#080808] font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/40 hover:-translate-y-0.5"
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
            className="md:hidden flex items-center space-x-1.5 bg-[#FF6B00]/15 text-[#FF8A00] border border-[#FF6B00]/30 text-xs px-3 py-1.5 rounded-lg font-medium"
          >
            <FileText size={14} />
            <span>CV</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#151515] border border-[#292929] text-[#F5F5F5] hover:text-[#FF6B00] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080808]/98 backdrop-blur-xl border-b border-[#292929] px-6 py-6 mt-2 shadow-2xl flex flex-col space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
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
                      ? "bg-[#FF6B00]/15 text-[#FF8A00] border border-[#FF6B00]/40 font-semibold"
                      : "text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-[#151515]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#292929] flex items-center justify-between">
            <div className="flex space-x-3">
              <a
                href="https://github.com/AmanChauhan264"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#151515] text-[#A3A3A3] hover:text-[#FF6B00] border border-[#292929]"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/aman-kumar-chauhan"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#151515] text-[#A3A3A3] hover:text-[#FF6B00] border border-[#292929]"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
            <a
              href="/resume.pdf"
              download="Aman_Kumar_Chauhan_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8A00] text-[#080808] font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-[#FF6B00]/25"
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
