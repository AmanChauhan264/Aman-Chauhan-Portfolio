"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GraduationCap, Award, Calendar, Building2 } from "lucide-react";

export function EducationSection() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Arya College of Engineering & IT, Jaipur",
      university: "Affiliated with Rajasthan Technical University (RTU), Jaipur",
      duration: "3rd Year • 2022 – 2026",
      score: "CGPA: 8.5",
      details: "Focusing on Full-Stack Development, Data Structures & Algorithms, DBMS, Operating Systems, and Software Engineering principles.",
      icon: <GraduationCap className="text-cyan-400" size={24} />,
      current: true,
    },
    {
      degree: "Class 12th Senior Secondary",
      institution: "Board of Secondary Education",
      university: "Physics, Chemistry & Mathematics (PCM)",
      duration: "Completed 2022",
      score: "Percentage: 68%",
      details: "Senior secondary education with focus on Mathematics, Science, and Analytical Problem Solving.",
      icon: <Award className="text-emerald-400" size={24} />,
      current: false,
    },
    {
      degree: "Class 10th Secondary School",
      institution: "Board of Secondary Education",
      university: "General Science & Mathematics",
      duration: "Completed 2020",
      score: "Percentage: 82.4%",
      details: "Secondary education with academic distinction in Science and Mathematics.",
      icon: <Award className="text-sky-400" size={24} />,
      current: false,
    },
  ];

  return (
    <section id="education" className="py-20 relative bg-slate-950/40">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Education & Academic Journey" subtitle="Academic background and institutional milestones" />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform md:-translate-x-1/2" />
          
          <div className="space-y-10">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`flex flex-col md:flex-row items-start md:justify-between relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot Icon */}
                <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl mt-0">
                  {item.icon}
                </div>
                
                {/* Education Card */}
                <div className={`ml-16 md:ml-0 w-full md:w-[45%] glass-card p-6 rounded-3xl border border-slate-800 hover:border-cyan-500/30 transition-all ${
                  index % 2 === 0 ? "md:text-left" : "md:text-left"
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {item.score}
                    </span>
                    {item.current && (
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                        Active
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading leading-snug">
                    {item.degree}
                  </h3>
                  
                  <div className="text-sm font-semibold text-cyan-400 mt-1 flex items-center space-x-1.5">
                    <Building2 size={14} className="shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  <div className="text-xs text-slate-400 mt-0.5">{item.university}</div>

                  <p className="text-xs text-slate-400 leading-relaxed mt-3 pt-3 border-t border-slate-800/80">
                    {item.details}
                  </p>
                  
                  <div className="flex items-center text-xs font-mono text-slate-500 mt-3 space-x-1.5">
                    <Calendar size={13} />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
