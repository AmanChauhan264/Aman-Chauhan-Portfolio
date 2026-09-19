"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    { title: "NPTEL Database Management Systems", issuer: "NPTEL", category: "Database & SQL", badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
    { title: "NPTEL Programming in Java", issuer: "NPTEL", category: "Object-Oriented Java", badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30" },
    { title: "NPTEL Fundamentals of Object-Oriented Programming", issuer: "NPTEL", category: "OOP Principles", badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" },
    { title: "NPTEL Problem Solving Through Programming in C", issuer: "NPTEL", category: "Algorithms & C", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
    { title: "GeeksforGeeks C with Data Structures", issuer: "GeeksforGeeks", category: "Data Structures", badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/30" },
    { title: "GeeksforGeeks Next.js", issuer: "GeeksforGeeks", category: "Frontend Framework", badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30" },
    { title: "Cisco C Essentials", issuer: "Cisco Networking Academy", category: "C Fundamentals", badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30" },
    { title: "Infosys Springboard Programming in C", issuer: "Infosys Springboard", category: "Core Programming", badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30" },
  ];

  return (
    <section id="certifications" className="py-20 relative bg-slate-950/30">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Certifications & Credentials" subtitle="Verified technical coursework and academic recognitions" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/30 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-slate-900 border border-slate-800 rounded-xl group-hover:border-cyan-500/30 transition-colors">
                    <Award className="text-cyan-400" size={20} />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${cert.badgeColor}`}>
                    {cert.category}
                  </span>
                </div>

                <h3 className="font-bold text-white text-sm leading-snug mb-2 group-hover:text-cyan-300 transition-colors font-heading">
                  {cert.title}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 mt-3 text-xs text-slate-400 font-mono">
                <span className="flex items-center text-emerald-400 font-semibold">
                  <CheckCircle2 size={12} className="mr-1" />
                  {cert.issuer}
                </span>
                <ShieldCheck size={13} className="text-slate-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
