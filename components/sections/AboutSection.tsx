"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GraduationCap, Award, BookOpen, Code2, MapPin, Building2, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const academics = [
    {
      title: "B.Tech in Computer Science Engineering",
      institution: "Arya College of Engineering & IT",
      affiliation: "Affiliated with Rajasthan Technical University (RTU), Jaipur",
      period: "3rd Year (2022 – 2026)",
      score: "CGPA: 8.5",
      highlight: true,
    },
    {
      title: "Class 12th Senior Secondary",
      institution: "State / CBSE Board",
      affiliation: "Mathematics & Science Stream",
      period: "Completed",
      score: "Score: 68%",
      highlight: false,
    },
    {
      title: "Class 10th Secondary School",
      institution: "State / CBSE Board",
      affiliation: "General Science & Mathematics",
      period: "Completed",
      score: "Score: 82.4%",
      highlight: false,
    },
  ];

  return (
    <section id="about" className="py-20 relative bg-[#080808]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Computer Science Engineering student & Full-Stack Developer based in Jaipur"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Visual Profile Card & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-[#292929] relative overflow-hidden h-full flex flex-col justify-between">
              
              {/* Header Badge */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FF6B00] to-[#FF8A00] p-0.5 shadow-lg shadow-[#FF6B00]/25">
                    <div className="w-full h-full bg-[#080808] rounded-[14px] flex items-center justify-center text-[#FF6B00] font-mono font-bold text-xl">
                      AKC
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F5F5] font-heading">
                      Aman Kumar Chauhan
                    </h3>
                    <p className="text-xs text-[#FF8A00] font-mono mt-0.5 font-semibold">
                      Software Engineer &amp; MERN Stack
                    </p>
                  </div>
                </div>

                <div className="space-y-3 font-medium text-sm text-[#F5F5F5] mb-8 border-t border-b border-[#292929] py-4">
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span>Arya College of Engineering &amp; IT</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span>Rajasthan Technical University (RTU), Jaipur</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span>Jaipur, Rajasthan, India</span>
                  </div>
                </div>
              </div>

              {/* Key Highlights Grid inside card */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <div className="bg-[#111111] border border-[#292929] p-3.5 rounded-xl">
                  <span className="text-xs text-[#A3A3A3] block font-mono">Current CGPA</span>
                  <span className="text-2xl font-bold text-[#FF6B00] font-heading">8.5</span>
                </div>
                <div className="bg-[#111111] border border-[#292929] p-3.5 rounded-xl">
                  <span className="text-xs text-[#A3A3A3] block font-mono">Status</span>
                  <span className="text-sm font-bold text-[#FF8A00] font-heading">3rd Year CSE</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Narrative & Academic Qualifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-[#292929] space-y-6">
              
              <h3 className="text-2xl font-bold text-[#F5F5F5] font-heading flex items-center">
                <Code2 className="w-6 h-6 mr-2 text-[#FF6B00]" />
                Engineering Student &amp; Full-Stack Developer
              </h3>

              <div className="space-y-4 text-[#A3A3A3] text-base leading-relaxed">
                <p>
                  I am a <strong className="text-[#FF8A00] font-semibold">3rd-year Computer Science Engineering student</strong> at Rajasthan Technical University (RTU), Jaipur, studying at Arya College of Engineering &amp; IT with an academic standing of <strong className="text-[#FF8A00] font-semibold">8.5 CGPA</strong>.
                </p>
                <p>
                  My developer journey is centered on <strong className="text-[#F5F5F5] font-semibold">full-stack web development</strong>, algorithmic problem-solving with <strong className="text-[#F5F5F5] font-semibold">Data Structures &amp; Algorithms</strong>, and building clean, practical software solutions. Over my academic career, I have consistently solved problem-solving challenges on LeetCode and built multiple full-stack applications.
                </p>
                <p>
                  I enjoy taking ideas from initial architecture to deployed web applications, combining technical rigor with modern UI principles. I am constantly expanding my knowledge in modern web frameworks, database optimization, and core software engineering concepts.
                </p>
              </div>

              {/* Academics Compact Table / Cards */}
              <div className="pt-6 border-t border-[#292929]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3] mb-4 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-[#FF6B00]" />
                  Academic History
                </h4>

                <div className="space-y-3">
                  {academics.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                        item.highlight
                          ? "bg-[#FF6B00]/10 border-[#FF6B00]/30 text-[#F5F5F5]"
                          : "bg-[#111111] border-[#292929] text-[#A3A3A3]"
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-sm flex items-center text-[#F5F5F5]">
                          {item.highlight && <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[#FF6B00] shrink-0" />}
                          {item.title}
                        </div>
                        <div className="text-xs text-[#A3A3A3] mt-0.5">{item.institution} — <span className="text-[#737373]">{item.affiliation}</span></div>
                      </div>
                      <div className="shrink-0 text-right sm:text-right">
                        <span className={`inline-block text-xs font-bold font-mono px-2.5 py-1 rounded-md ${
                          item.highlight ? "bg-[#FF6B00] text-[#080808]" : "bg-[#1a1a1a] text-[#FF8A00] border border-[#292929]"
                        }`}>
                          {item.score}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
