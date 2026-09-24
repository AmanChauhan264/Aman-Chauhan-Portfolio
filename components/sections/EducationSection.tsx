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
      icon: <GraduationCap className="text-[#FF6B00]" size={24} />,
      current: true,
    },
    {
      degree: "Class 12th Senior Secondary",
      institution: "Board of Secondary Education",
      university: "Physics, Chemistry & Mathematics (PCM)",
      duration: "Completed 2022",
      score: "Percentage: 68%",
      details: "Senior secondary education with focus on Mathematics, Science, and Analytical Problem Solving.",
      icon: <Award className="text-[#FF8A00]" size={24} />,
      current: false,
    },
    {
      degree: "Class 10th Secondary School",
      institution: "Board of Secondary Education",
      university: "General Science & Mathematics",
      duration: "Completed 2020",
      score: "Percentage: 82.4%",
      details: "Secondary education with academic distinction in Science and Mathematics.",
      icon: <Award className="text-[#FFB066]" size={24} />,
      current: false,
    },
  ];

  return (
    <section id="education" className="py-20 relative bg-[#080808]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Education & Academic Journey" subtitle="Academic background and institutional milestones" />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#292929] transform md:-translate-x-1/2" />
          
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
                <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-2xl bg-[#111111] border border-[#292929] flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl mt-0">
                  {item.icon}
                </div>
                
                {/* Education Card */}
                <div className={`ml-16 md:ml-0 w-full md:w-[45%] glass-card p-6 rounded-3xl border border-[#292929] hover:border-[#FF6B00]/40 transition-all ${
                  index % 2 === 0 ? "md:text-left" : "md:text-left"
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#FF6B00]/10 text-[#FF8A00] border border-[#FF6B00]/30">
                      {item.score}
                    </span>
                    {item.current && (
                      <span className="text-[11px] font-mono text-[#FF8A00] flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mr-1.5 animate-pulse" />
                        Active
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F5F5] font-heading leading-snug">
                    {item.degree}
                  </h3>
                  
                  <div className="text-sm font-semibold text-[#FF6B00] mt-1 flex items-center space-x-1.5">
                    <Building2 size={14} className="shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  <div className="text-xs text-[#A3A3A3] mt-0.5">{item.university}</div>

                  <p className="text-xs text-[#A3A3A3] leading-relaxed mt-3 pt-3 border-t border-[#292929]">
                    {item.details}
                  </p>
                  
                  <div className="flex items-center text-xs font-mono text-[#A3A3A3] mt-3 space-x-1.5">
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
