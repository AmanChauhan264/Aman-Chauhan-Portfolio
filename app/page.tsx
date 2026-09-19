"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhatIBuildSection } from "@/components/sections/WhatIBuildSection";
import { LeetCodeSection } from "@/components/sections/LeetCodeSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { MiscSection } from "@/components/sections/MiscSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <ParticlesBackground />
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 transform origin-left z-[60]"
        style={{ scaleX }}
      />

      <HeroSection />
      <AboutSection />
      <WhatIBuildSection />
      <LeetCodeSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <AchievementsSection />
      <CertificationsSection />
      <MiscSection />
      <ContactSection />
      
      <Footer />

      {/* Back to top button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-cyan-400 shadow-xl shadow-cyan-500/10 hover:border-cyan-500 hover:bg-slate-800 transition-all z-50 hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </main>
  );
}
