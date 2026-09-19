"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Languages, Users, Heart, Sparkles } from "lucide-react";

export function MiscSection() {
  return (
    <section id="misc" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="More About Me" subtitle="Languages, Soft Skills, and Personal Interests" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 rounded-3xl border border-slate-800"
          >
            <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-slate-800">
              <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-cyan-400">
                <Languages size={22} />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Languages</h3>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center justify-between">
                <span className="text-slate-200 font-semibold text-sm">English</span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">Professional</span>
              </div>
              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center justify-between">
                <span className="text-slate-200 font-semibold text-sm">Hindi</span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">Native</span>
              </div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 rounded-3xl border border-slate-800"
          >
            <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-slate-800">
              <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-emerald-400">
                <Users size={22} />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Soft Skills</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {["Problem Solving", "Teamwork & Collaboration", "Analytical Thinking", "Continuous Learning", "Leadership", "Technical Communication"].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl text-xs font-medium hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
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
            className="glass-card p-6 rounded-3xl border border-slate-800"
          >
            <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-slate-800">
              <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-amber-400">
                <Heart size={22} />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Interests</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {["Full-Stack Web Dev", "Competitive Coding", "System Architecture", "Tech Tech Trends", "Gaming", "Reading"].map((interest, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl text-xs font-medium hover:border-amber-500/40 hover:text-amber-300 transition-colors"
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
