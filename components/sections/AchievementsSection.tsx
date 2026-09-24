"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Trophy, Star, Target, Award, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "", duration = 1500 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export function AchievementsSection() {
  const achievements = [
    {
      icon: <Target size={28} className="text-[#FF6B00]" />,
      title: "LeetCode Solved",
      value: 66,
      suffix: "",
      detail: "Verified problems solved on LeetCode profile (Aman264)",
      color: "from-[#FF6B00]/15 to-transparent",
      borderColor: "border-[#FF6B00]/30",
    },
    {
      icon: <Star size={28} className="text-[#FF8A00]" />,
      title: "Academic Excellence",
      value: 8,
      suffix: ".5 CGPA",
      detail: "Arya College of Eng. & IT (RTU Jaipur)",
      color: "from-[#FF8A00]/15 to-transparent",
      borderColor: "border-[#FF8A00]/30",
    },
    {
      icon: <Trophy size={28} className="text-[#FFB066]" />,
      title: "NPTEL & Industry Badges",
      value: 8,
      suffix: "+",
      detail: "Certifications in DBMS, Java, C & Next.js",
      color: "from-[#FFB066]/15 to-transparent",
      borderColor: "border-[#FFB066]/30",
    },
    {
      icon: <Code2 size={28} className="text-[#FF6B00]" />,
      title: "Practical Projects",
      value: 4,
      suffix: "+",
      detail: "Full-stack web & database management software",
      color: "from-[#FF6B00]/15 to-transparent",
      borderColor: "border-[#FF6B00]/30",
    },
  ];

  return (
    <section id="achievements" className="py-20 relative bg-[#080808]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Key Achievements & Metrics" subtitle="Quantifiable milestones in engineering and programming" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-3xl border border-[#292929] hover:border-[#FF6B00]/40 flex flex-col justify-between relative overflow-hidden group transition-all"
            >
              <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${item.color} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#111111] border border-[#292929] flex items-center justify-center mb-6 shadow-lg">
                  {item.icon}
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold text-[#F5F5F5] mb-2 font-heading tracking-tight">
                  <Counter end={item.value} suffix={item.suffix} />
                </h3>

                <h4 className="text-sm font-bold text-[#F5F5F5] mb-1">{item.title}</h4>
                <p className="text-xs text-[#A3A3A3] leading-relaxed">{item.detail}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#292929] text-[11px] font-mono text-[#FF8A00] flex items-center">
                <Award size={12} className="mr-1 text-[#FF6B00]" /> Verified Record
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
