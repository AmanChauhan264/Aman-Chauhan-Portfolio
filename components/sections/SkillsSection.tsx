"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Code, Layout, Database, Wrench, ShieldCheck, Terminal } from "lucide-react";

export function SkillsSection() {
  const skillsCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={20} className="text-[#FF6B00]" />,
      description: "Languages used for system building & competitive coding",
      skills: ["C++", "Java", "JavaScript (ES6+)", "Python", "C", "SQL"],
    },
    {
      title: "Web & Frontend Stack",
      icon: <Layout size={20} className="text-[#FF8A00]" />,
      description: "Modern frameworks & UI building blocks",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    },
    {
      title: "Core Computer Science",
      icon: <Database size={20} className="text-[#FF6B00]" />,
      description: "Fundamental CS knowledge & engineering foundations",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)", "Relational Databases", "Operating Systems"],
    },
    {
      title: "Developer Tools & Workflow",
      icon: <Wrench size={20} className="text-[#FFB066]" />,
      description: "Development environments, version control & deployment",
      skills: ["Git", "GitHub", "VS Code", "Linux Command Line", "Postman", "Vercel"],
    },
    {
      title: "Domains & Foundations",
      icon: <ShieldCheck size={20} className="text-[#FF8A00]" />,
      description: "Additional technical concepts and software principles",
      skills: ["RESTful APIs", "Cyber Security Basics", "Computer Networking Basics", "Problem Solving"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-[#080808]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Technical Skills" subtitle="Technologies, frameworks, and CS concepts I work with" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-[#292929] hover:border-[#FF6B00]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-3 pb-3 border-b border-[#292929]">
                  <div className="p-2.5 bg-[#111111] border border-[#292929] rounded-xl">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F5F5F5] font-heading">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#A3A3A3]">{category.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-[#111111] border border-[#292929] rounded-xl text-xs font-mono font-medium text-[#A3A3A3] hover:text-[#FF8A00] hover:border-[#FF6B00]/40 hover:bg-[#1a1a1a] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#292929] text-[11px] font-mono text-[#A3A3A3] flex items-center justify-between">
                <span className="flex items-center">
                  <Terminal size={12} className="mr-1 text-[#FF6B00]" />
                  {category.skills.length} skills listed
                </span>
                <span className="text-[#FF8A00] font-semibold">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
