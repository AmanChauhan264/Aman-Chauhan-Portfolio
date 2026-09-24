"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    { title: "NPTEL Database Management Systems", issuer: "NPTEL", category: "Database & SQL", badgeColor: "bg-[#FF6B00]/10 text-[#FF8A00] border-[#FF6B00]/30" },
    { title: "NPTEL Programming in Java", issuer: "NPTEL", category: "Object-Oriented Java", badgeColor: "bg-[#FF8A00]/10 text-[#FFB066] border-[#FF8A00]/30" },
    { title: "NPTEL Fundamentals of Object-Oriented Programming", issuer: "NPTEL", category: "OOP Principles", badgeColor: "bg-[#FF6B00]/10 text-[#FF8A00] border-[#FF6B00]/30" },
    { title: "NPTEL Problem Solving Through Programming in C", issuer: "NPTEL", category: "Algorithms & C", badgeColor: "bg-[#FFB066]/10 text-[#FF8A00] border-[#FFB066]/30" },
    { title: "GeeksforGeeks C with Data Structures", issuer: "GeeksforGeeks", category: "Data Structures", badgeColor: "bg-[#FF6B00]/10 text-[#FF8A00] border-[#FF6B00]/30" },
    { title: "GeeksforGeeks Next.js", issuer: "GeeksforGeeks", category: "Frontend Framework", badgeColor: "bg-[#FF8A00]/10 text-[#FFB066] border-[#FF8A00]/30" },
    { title: "Cisco C Essentials", issuer: "Cisco Networking Academy", category: "C Fundamentals", badgeColor: "bg-[#FF6B00]/10 text-[#FF8A00] border-[#FF6B00]/30" },
    { title: "Infosys Springboard Programming in C", issuer: "Infosys Springboard", category: "Core Programming", badgeColor: "bg-[#FFB066]/10 text-[#FF8A00] border-[#FFB066]/30" },
  ];

  return (
    <section id="certifications" className="py-20 relative bg-[#080808]">
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
              className="glass-card p-5 rounded-2xl border border-[#292929] hover:border-[#FF6B00]/40 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-[#111111] border border-[#292929] rounded-xl group-hover:border-[#FF6B00]/30 transition-colors">
                    <Award className="text-[#FF6B00]" size={20} />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${cert.badgeColor}`}>
                    {cert.category}
                  </span>
                </div>

                <h3 className="font-bold text-[#F5F5F5] text-sm leading-snug mb-2 group-hover:text-[#FF8A00] transition-colors font-heading">
                  {cert.title}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#292929] mt-3 text-xs text-[#A3A3A3] font-mono">
                <span className="flex items-center text-[#FF8A00] font-semibold">
                  <CheckCircle2 size={12} className="mr-1 text-[#FF6B00]" />
                  {cert.issuer}
                </span>
                <ShieldCheck size={13} className="text-[#737373]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
