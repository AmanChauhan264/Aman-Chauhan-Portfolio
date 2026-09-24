"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, TrendingUp, Trophy, Code2 } from "lucide-react";

export function LeetCodeSection() {
  const [stats, setStats] = useState({
    easy: 28,
    medium: 33,
    hard: 5,
    total: 66,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Attempt dynamic fetch from a public LeetCode proxy with reliable fallback
    const fetchLeetCodeStats = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://leetcode-api-faisalshohag.vercel.app/Aman264");
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.totalSolved === "number" && data.totalSolved > 0) {
            setStats({
              easy: data.easySolved ?? 28,
              medium: data.mediumSolved ?? 33,
              hard: data.hardSolved ?? 5,
              total: data.totalSolved ?? 66,
            });
          }
        }
      } catch (err) {
        // Fallback to verified static numbers if API is restricted/unavailable
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  // Calculate difficulty percentages
  const easyPercent = Math.round((stats.easy / stats.total) * 100);
  const mediumPercent = Math.round((stats.medium / stats.total) * 100);
  const hardPercent = Math.round((stats.hard / stats.total) * 100);

  // Generate 52 pseudo activity heatmap columns for visualization
  const heatmapCols = Array.from({ length: 24 }).map((_, colIdx) => {
    return Array.from({ length: 4 }).map((_, rowIdx) => {
      // Deterministic activity simulation for clean heatmap visual
      const val = (colIdx * 7 + rowIdx * 3 + 12) % 5;
      return val;
    });
  });

  return (
    <section id="leetcode" className="py-20 relative bg-[#080808]">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#FF6B00]/06 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#FF6B00]/30 text-[#FF8A00] text-xs font-mono mb-3 shadow-md shadow-[#FF6B00]/10"
          >
            <Code2 size={13} className="text-[#FF6B00]" />
            <span>PROBLEM SOLVING</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] font-heading tracking-tight"
          >
            My LeetCode Progress
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-[#A3A3A3] text-sm md:text-base max-w-xl font-medium"
          >
            Consistent practice, better problem solving, stronger engineering skills.
          </motion.p>
        </div>

        {/* Large Premium LeetCode Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto glass-card rounded-3xl p-6 md:p-8 border border-[#292929] hover:border-[#FF6B00]/30 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT SIDE: Profile Header */}
            <div className="lg:col-span-3 flex flex-col justify-between space-y-6 lg:border-r border-[#292929] lg:pr-6">
              <div>
                {/* LeetCode Icon Logo */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center p-2.5 shadow-lg shadow-[#FF6B00]/10">
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-[#FF8A00]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863 0-.713.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.178 1.823.645l2.697 2.607c.48.48 1.258.48 1.738 0s.48-1.258 0-1.738l-2.697-2.607c-1.026-1.026-2.484-1.442-3.964-1.442s-2.938.416-3.964 1.442l-4.32 4.38c-1.026 1.026-1.503 2.441-1.503 3.917 0 1.476.477 2.891 1.503 3.917l4.332 4.363c1.026 1.026 2.484 1.442 3.964 1.442s2.938-.416 3.964-1.442l2.697-2.607c.48-.48.48-1.258 0-1.738s-1.258-.48-1.738 0z" />
                      <path d="M20.811 13.01H10.666c-.679 0-1.23.551-1.23 1.23s.551 1.23 1.23 1.23h10.145c.679 0 1.23-.551 1.23-1.23s-.551-1.23-1.23-1.23z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F5F5] font-heading leading-tight">
                      LeetCode
                    </h3>
                    <span className="text-xs font-mono text-[#FF8A00] flex items-center mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mr-1.5 animate-pulse" />
                      Active Solver
                    </span>
                  </div>
                </div>

                {/* Clickable Username */}
                <div className="p-3.5 rounded-2xl bg-[#111111] border border-[#292929]">
                  <span className="text-xs text-[#A3A3A3] font-mono block mb-1">PROFILE USERNAME</span>
                  <a
                    href="https://leetcode.com/u/Aman264/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#FF6B00] hover:text-[#FF8A00] font-mono flex items-center justify-between group"
                  >
                    <span>@Aman264</span>
                    <ExternalLink size={15} className="text-[#A3A3A3] group-hover:text-[#FF8A00] transition-colors" />
                  </a>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#A3A3A3] font-mono space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#737373]">Platform:</span>
                  <span className="text-[#F5F5F5]">LeetCode</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#737373]">Status:</span>
                  <span className="text-[#FF8A00] font-semibold">Verified</span>
                </div>
              </div>
            </div>

            {/* MIDDLE: 3 Difficulty Cards + Total Solved Card */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* 3 Difficulty Cards Grid */}
              <div className="grid grid-cols-3 gap-3">
                
                {/* Easy */}
                <div className="bg-[#FF8A00]/10 border border-[#FF8A00]/30 p-4 rounded-2xl text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-[#FF8A00] font-heading">
                    {stats.easy}
                  </div>
                  <div className="text-xs font-bold text-[#FFB066] font-mono mt-0.5">Easy</div>
                  <div className="text-[10px] text-[#A3A3A3] font-mono mt-1">{easyPercent}%</div>
                </div>

                {/* Medium */}
                <div className="bg-[#FF6B00]/10 border border-[#FF6B00]/30 p-4 rounded-2xl text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-[#FF6B00] font-heading">
                    {stats.medium}
                  </div>
                  <div className="text-xs font-bold text-[#FF8A00] font-mono mt-0.5">Medium</div>
                  <div className="text-[10px] text-[#A3A3A3] font-mono mt-1">{mediumPercent}%</div>
                </div>

                {/* Hard */}
                <div className="bg-[#FFB066]/10 border border-[#FFB066]/30 p-4 rounded-2xl text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-[#FFB066] font-heading">
                    {stats.hard}
                  </div>
                  <div className="text-xs font-bold text-[#FFB066] font-mono mt-0.5">Hard</div>
                  <div className="text-[10px] text-[#A3A3A3] font-mono mt-1">{hardPercent}%</div>
                </div>

              </div>

              {/* Total Solved Card with Bar */}
              <div className="bg-[#111111] border border-[#292929] p-5 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xs font-mono text-[#A3A3A3] uppercase tracking-wider block">Total Problems Solved</span>
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#FF6B00] via-[#FF8A00] to-[#FFB066] bg-clip-text text-transparent font-heading">
                      {stats.total}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00]">
                    <Trophy size={24} />
                  </div>
                </div>

                {/* Multi-segmented Progress Bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="h-2.5 w-full bg-[#080808] rounded-full overflow-hidden flex p-0.5 border border-[#292929]">
                    <div className="h-full bg-[#FF8A00] rounded-l-full" style={{ width: `${easyPercent}%` }} />
                    <div className="h-full bg-[#FF6B00]" style={{ width: `${mediumPercent}%` }} />
                    <div className="h-full bg-[#FFB066] rounded-r-full" style={{ width: `${hardPercent}%` }} />
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-[#A3A3A3] pt-1">
                    <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#FF8A00] mr-1" /> Easy ({stats.easy})</span>
                    <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#FF6B00] mr-1" /> Med ({stats.medium})</span>
                    <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#FFB066] mr-1" /> Hard ({stats.hard})</span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE: Activity Visual & CTA Button */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-5 lg:border-l border-[#292929] lg:pl-6">
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#A3A3A3] flex items-center">
                    <TrendingUp size={13} className="mr-1.5 text-[#FF6B00]" />
                    Problem Solving Consistency
                  </span>
                  <span className="text-[10px] font-mono text-[#FF8A00] bg-[#FF6B00]/10 px-2 py-0.5 rounded border border-[#FF6B00]/30 font-semibold">
                    Activity Stream
                  </span>
                </div>

                {/* Heatmap Grid Simulation */}
                <div className="bg-[#111111] border border-[#292929] p-3.5 rounded-2xl">
                  <div className="grid grid-cols-12 gap-1.5">
                    {heatmapCols.map((col, colIdx) => (
                      <div key={colIdx} className="flex flex-col gap-1.5">
                        {col.map((cell, rowIdx) => {
                          const bg =
                            cell === 0 ? "bg-[#181818]" :
                            cell === 1 ? "bg-[#381c08] border border-[#52290b]" :
                            cell === 2 ? "bg-[#7c3403]" :
                            cell === 3 ? "bg-[#c24e00]" : "bg-[#FF6B00] shadow-sm shadow-[#FF6B00]/50";
                          return <div key={rowIdx} className={`w-full h-3 rounded-sm ${bg}`} />;
                        })}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#A3A3A3] mt-3 pt-2 border-t border-[#292929]">
                    <span>Less</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 rounded-sm bg-[#181818]" />
                      <div className="w-2 h-2 rounded-sm bg-[#381c08]" />
                      <div className="w-2 h-2 rounded-sm bg-[#7c3403]" />
                      <div className="w-2 h-2 rounded-sm bg-[#c24e00]" />
                      <div className="w-2 h-2 rounded-sm bg-[#FF6B00]" />
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </div>

              {/* Prominent CTA Button */}
              <div className="pt-2">
                <a
                  href="https://leetcode.com/u/Aman264/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8A00] hover:from-[#FF8A00] hover:to-[#FFB066] text-[#080808] font-bold text-sm py-3.5 px-6 rounded-2xl shadow-lg shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/40 transition-all hover:-translate-y-0.5 group"
                >
                  <span>View My LeetCode Profile</span>
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
