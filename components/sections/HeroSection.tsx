"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "../ui/Icons";

export function HeroSection() {
  const stats = [
    { label: "CGPA (RTU)", value: "8.5", detail: "Arya College of Eng." },
    { label: "LeetCode Solved", value: "66", detail: "Verified Problem Solving" },
    { label: "Academic Level", value: "3rd Year", detail: "B.Tech CSE Student" },
    { label: "Major Projects", value: "4+", detail: "Full-Stack & Systems" },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Glow Orbs background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-lg shadow-cyan-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>3rd Year CSE Student • Full-Stack Developer</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4 font-heading leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Aman Kumar Chauhan
              </span>
              .
            </motion.h1>

            {/* Animated Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold text-slate-300 mb-6 flex items-center space-x-2"
            >
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Building modern web experiences with code, creativity &amp; problem solving.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-base md:text-lg max-w-2xl mb-8 leading-relaxed"
            >
              I&apos;m a Computer Science Engineering student focused on full-stack development, DSA, and building practical software projects.
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto"
            >
              {/* Button 1: View My Work */}
              <a
                href="#projects"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 text-sm"
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>

              {/* Button 2: GitHub */}
              <a
                href="https://github.com/AmanChauhan264"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 px-6 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5 text-sm"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              {/* Button 3: Download Resume */}
              <a
                href="/resume.pdf"
                download="Aman_Kumar_Chauhan_Resume.pdf"
                className="flex items-center justify-center space-x-2 bg-slate-950/60 hover:bg-slate-900 text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/70 px-6 py-3.5 rounded-xl font-semibold transition-all text-sm"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Quick Tech Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-6 w-full"
            >
              <span className="text-slate-500">Tech Stack:</span>
              <span className="flex items-center text-cyan-400"><CheckCircle2 className="w-3.5 h-3.5 mr-1" /> React / Next.js</span>
              <span className="flex items-center text-emerald-400"><CheckCircle2 className="w-3.5 h-3.5 mr-1" /> C++ / DSA</span>
              <span className="flex items-center text-sky-400"><CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Node.js &amp; SQL</span>
            </motion.div>

          </div>

          {/* Right Hero Column: Interactive Developer Code Window */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Glowing Shell */}
              <div className="relative rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden glass-card glow-card">
                
                {/* IDE Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-400 flex items-center">
                      <Code2 size={13} className="mr-1 text-cyan-400" />
                      developer.ts
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 font-mono text-[11px] text-slate-500">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>RTU Jaipur</span>
                  </div>
                </div>

                {/* IDE Window Code Body */}
                <div className="p-5 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-slate-300">
                  <div className="text-slate-500">// Aman Kumar Chauhan — Developer Profile</div>
                  <div>
                    <span className="text-purple-400">interface</span>{" "}
                    <span className="text-yellow-300">Developer</span> &#123;
                  </div>
                  <div className="pl-4">
                    name: <span className="text-emerald-300">&quot;Aman Kumar Chauhan&quot;</span>;
                  </div>
                  <div className="pl-4">
                    role: <span className="text-emerald-300">&quot;Full-Stack Developer&quot;</span>;
                  </div>
                  <div className="pl-4">
                    college: <span className="text-emerald-300">&quot;Arya College of Engg. &amp; IT&quot;</span>;
                  </div>
                  <div className="pl-4">
                    university: <span className="text-emerald-300">&quot;RTU Jaipur&quot;</span>;
                  </div>
                  <div className="pl-4">
                    cgpa: <span className="text-cyan-400">8.5</span>;
                  </div>
                  <div className="pl-4">
                    leetCodeSolved: <span className="text-cyan-400">66</span>;
                  </div>
                  <div className="pl-4">
                    stack: [<span className="text-amber-300">&quot;React&quot;</span>, <span className="text-amber-300">&quot;Next.js&quot;</span>, <span className="text-amber-300">&quot;C++&quot;</span>, <span className="text-amber-300">&quot;Java&quot;</span>, <span className="text-amber-300">&quot;Node.js&quot;</span>, <span className="text-amber-300">&quot;MongoDB&quot;</span>];
                  </div>
                  <div>&#125;</div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-slate-400 flex items-center justify-between">
                    <span className="flex items-center text-cyan-400">
                      <Terminal size={14} className="mr-1.5" />
                      Status: Open for roles
                    </span>
                    <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                      Active
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Badges around IDE */}
              <div className="hidden sm:flex items-center space-x-2 absolute -bottom-5 -left-5 bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 px-3.5 py-2 rounded-xl text-xs font-mono shadow-xl text-slate-200">
                <span className="text-cyan-400 font-bold">8.5</span>
                <span>CGPA @ RTU</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-md border border-emerald-500/30 px-3.5 py-2 rounded-xl text-xs font-mono shadow-xl text-slate-200">
                <span className="text-emerald-400 font-bold">66</span>
                <span>LeetCode Solved</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Quick Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 md:p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 relative overflow-hidden group transition-all"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all" />
              <div className="text-3xl md:text-4xl font-extrabold text-white font-heading mb-1 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.detail}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
