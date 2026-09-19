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
      icon: <Target size={28} className="text-cyan-400" />,
      title: "LeetCode Solved",
      value: 66,
      suffix: "",
      detail: "Verified problems solved on LeetCode profile (Aman264)",
      color: "from-cyan-500/20 to-blue-500/10",
      borderColor: "border-cyan-500/30",
    },
    {
      icon: <Star size={28} className="text-emerald-400" />,
      title: "Academic Excellence",
      value: 8,
      suffix: ".5 CGPA",
      detail: "Arya College of Eng. & IT (RTU Jaipur)",
      color: "from-emerald-500/20 to-teal-500/10",
      borderColor: "border-emerald-500/30",
    },
    {
      icon: <Trophy size={28} className="text-amber-400" />,
      title: "NPTEL & Industry Badges",
      value: 8,
      suffix: "+",
      detail: "Certifications in DBMS, Java, C & Next.js",
      color: "from-amber-500/20 to-orange-500/10",
      borderColor: "border-amber-500/30",
    },
    {
      icon: <Code2 size={28} className="text-purple-400" />,
      title: "Practical Projects",
      value: 4,
      suffix: "+",
      detail: "Full-stack web & database management software",
      color: "from-purple-500/20 to-indigo-500/10",
      borderColor: "border-purple-500/30",
    },
  ];

  return (
    <section id="achievements" className="py-20 relative">
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
              className={`glass-card p-6 rounded-3xl border ${item.borderColor} flex flex-col justify-between relative overflow-hidden group`}
            >
              <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${item.color} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 shadow-lg">
                  {item.icon}
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 font-heading tracking-tight">
                  <Counter end={item.value} suffix={item.suffix} />
                </h3>

                <h4 className="text-sm font-bold text-slate-200 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-cyan-400 flex items-center">
                <Award size={12} className="mr-1" /> Verified Record
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
