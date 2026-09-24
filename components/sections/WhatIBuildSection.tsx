"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Globe, Wrench, ShieldCheck, Zap } from "lucide-react";

export function WhatIBuildSection() {
  const buildCards = [
    {
      badge: "01",
      title: "Full-Stack Web Applications",
      description: "Modern, responsive web applications with React, Next.js, Node.js, Express, and databases—designed around real user needs.",
      tags: ["React", "Next.js", "Node.js", "MongoDB"],
      icon: <Globe className="w-6 h-6 text-[#FF6B00]" />,
      glowColor: "from-[#FF6B00]/15 to-transparent",
      borderColor: "border-[#FF6B00]/30",
    },
    {
      badge: "02",
      title: "Productivity & Utility Tools",
      description: "Practical applications that help users manage everyday tasks, information, and workflows through simple and intuitive interfaces.",
      tags: ["MERN", "APIs", "LocalStorage", "React"],
      icon: <Wrench className="w-6 h-6 text-[#FF8A00]" />,
      glowColor: "from-[#FF8A00]/15 to-transparent",
      borderColor: "border-[#FF8A00]/30",
    },
    {
      badge: "03",
      title: "Authentication & Backend Systems",
      description: "Secure, database-driven applications with authentication, user management, APIs, and server-side functionality.",
      tags: ["Next.js", "MongoDB", "JWT", "REST APIs"],
      icon: <ShieldCheck className="w-6 h-6 text-[#FF6B00]" />,
      glowColor: "from-[#FF6B00]/15 to-transparent",
      borderColor: "border-[#FF6B00]/30",
    },
    {
      badge: "04",
      title: "Interactive & API-Driven Applications",
      description: "Dynamic applications that connect with external APIs and turn real-time data into useful, interactive experiences.",
      tags: ["JavaScript", "REST APIs", "React", "Responsive UI"],
      icon: <Zap className="w-6 h-6 text-[#FFB066]" />,
      glowColor: "from-[#FFB066]/15 to-transparent",
      borderColor: "border-[#FFB066]/30",
    },
  ];

  return (
    <section id="focus" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="What I Build"
          subtitle="Types of applications & software solutions I build"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {buildCards.map((card, index) => (
            <motion.div
              key={card.badge}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-8 border border-[#292929] hover:border-[#FF6B00]/40 relative overflow-hidden group flex flex-col justify-between transition-all duration-300 min-h-[260px]"
            >
              {/* Radial glow accent on hover */}
              <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${card.glowColor} rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none`} />

              <div>
                {/* Header: Numbered Badge (Left) & Icon (Right) */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#111111] border border-[#292929] text-[#FF6B00] group-hover:border-[#FF6B00]/40 transition-colors">
                    {card.badge}
                  </span>
                  <div className="p-3 rounded-2xl bg-[#111111] border border-[#292929] shadow-md group-hover:border-[#FF6B00]/30 transition-colors">
                    {card.icon}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#F5F5F5] font-heading mb-3 group-hover:text-[#FF8A00] transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[#A3A3A3] text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Technology Tags at Bottom */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#292929] mt-auto">
                {card.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#111111] text-[#A3A3A3] border border-[#292929] hover:border-[#FF6B00]/30 hover:text-[#FF8A00] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
