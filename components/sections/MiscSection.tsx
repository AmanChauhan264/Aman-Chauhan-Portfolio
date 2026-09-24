"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Languages, Users, Heart, Sparkles } from "lucide-react";

export function MiscSection() {
  return (
    <section id="misc" className="py-20 relative bg-[#080808]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="More About Me" subtitle="Languages, Soft Skills, and Personal Interests" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 rounded-3xl border border-[#292929] hover:border-[#FF6B00]/40 transition-all"
          >
            <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-[#292929]">
              <div className="p-2.5 bg-[#111111] border border-[#292929] rounded-xl text-[#FF6B00]">
                <Languages size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5] font-heading">Languages</h3>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-[#111111] border border-[#292929] rounded-xl flex items-center justify-between">
                <span className="text-[#F5F5F5] font-semibold text-sm">English</span>
                <span className="text-xs font-mono text-[#FF8A00] bg-[#FF6B00]/10 px-2 py-0.5 rounded border border-[#FF6B00]/30 font-medium">Professional</span>
              </div>
              <div className="p-3 bg-[#111111] border border-[#292929] rounded-xl flex items-center justify-between">
                <span className="text-[#F5F5F5] font-semibold text-sm">Hindi</span>
                <span className="text-xs font-mono text-[#FFB066] bg-[#FF8A00]/10 px-2 py-0.5 rounded border border-[#FF8A00]/30 font-medium">Native</span>
              </div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 rounded-3xl border border-[#292929] hover:border-[#FF6B00]/40 transition-all"
          >
            <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-[#292929]">
              <div className="p-2.5 bg-[#111111] border border-[#292929] rounded-xl text-[#FF8A00]">
                <Users size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5] font-heading">Soft Skills</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {["Problem Solving", "Teamwork & Collaboration", "Analytical Thinking", "Continuous Learning", "Leadership", "Technical Communication"].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-[#111111] border border-[#292929] text-[#A3A3A3] rounded-xl text-xs font-medium hover:border-[#FF6B00]/40 hover:text-[#FF8A00] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 rounded-3xl border border-[#292929] hover:border-[#FF6B00]/40 transition-all"
          >
            <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-[#292929]">
              <div className="p-2.5 bg-[#111111] border border-[#292929] rounded-xl text-[#FFB066]">
                <Heart size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5] font-heading">Interests</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {["Full-Stack Web Dev", "Competitive Coding", "System Architecture", "Tech Trends & AI", "Gaming", "Reading"].map((interest, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-[#111111] border border-[#292929] text-[#A3A3A3] rounded-xl text-xs font-medium hover:border-[#FF6B00]/40 hover:text-[#FF8A00] transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
