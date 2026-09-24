"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ExternalLink, Code2, FolderGit2, Sparkles } from "lucide-react";
import { GithubIcon } from "../ui/Icons";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "A feature-rich shopping web application featuring dynamic product catalog browsing, interactive cart management, filterable categories, and a responsive checkout interface.",
      tags: ["React.js", "Node.js", "Tailwind CSS", "JavaScript"],
      category: "Full-Stack Web App",
      github: "https://github.com/AmanChauhan264",
      gradient: "from-[#241306] to-[#151515]",
      accent: "text-[#FF8A00] border-[#FF6B00]/40",
      codeSnippet: "// Shopping Cart State\nconst [cart, setCart] = useState<CartItem[]>([]);\nconst addToCart = (product) => {\n  setCart(prev => [...prev, product]);\n};"
    },
    {
      title: "Real-Time Weather Dashboard",
      description: "An intuitive web application integrating OpenWeather API to render live weather statistics, 5-day forecasts, temperature metrics, and search functionality across global cities.",
      tags: ["JavaScript", "React", "OpenWeather API", "CSS3"],
      category: "Frontend & API Integration",
      github: "https://github.com/AmanChauhan264",
      gradient: "from-[#1f1005] to-[#151515]",
      accent: "text-[#FF6B00] border-[#FF8A00]/40",
      codeSnippet: "// OpenWeather API Handler\nasync function fetchWeather(city) {\n  const res = await fetch(`api.weather?q=${city}`);\n  const data = await res.json();\n  return data;\n}"
    },
    {
      title: "Laundry Management System",
      description: "A database-driven application designed to streamline order placement, customer tracking, invoice generation, and status management for laundry business operations.",
      tags: ["Java", "SQL", "DBMS", "Relational DB"],
      category: "Database & Enterprise System",
      github: "https://github.com/AmanChauhan264",
      gradient: "from-[#291607] to-[#151515]",
      accent: "text-[#FFB066] border-[#FFB066]/40",
      codeSnippet: "-- Order Status Query\nSELECT customer_id, order_status, total_amount\nFROM laundry_orders\nWHERE status = 'PROCESSING'\nORDER BY order_date DESC;"
    },
    {
      title: "Smart Cricket Tournament Manager",
      description: "A software management tool built using C++ and Data Structures to handle team registrations, match schedules, tournament brackets, and live scorekeeping logic.",
      tags: ["C++", "DSA", "OOP", "Algorithms"],
      category: "Algorithmic & OOP Project",
      github: "https://github.com/AmanChauhan264",
      gradient: "from-[#1c0f05] to-[#151515]",
      accent: "text-[#FF8A00] border-[#FF6B00]/40",
      codeSnippet: "// Tournament Bracket Node\nstruct MatchNode {\n  Team teamA, teamB;\n  int scoreA, scoreB;\n  MatchNode* nextRound;\n};"
    },
    {
      title: "Smart Scientific Calculator",
      description: "A multi-functional GUI calculator application implementing mathematical parsing algorithms, trigonometric functions, memory storage, and clean desktop layout.",
      tags: ["Python", "Tkinter", "Algorithms"],
      category: "Desktop GUI App",
      github: "https://github.com/AmanChauhan264",
      gradient: "from-[#251406] to-[#151515]",
      accent: "text-[#FF6B00] border-[#FF8A00]/40",
      codeSnippet: "# Scientific Expression Evaluator\ndef evaluate_expr(expression):\n    result = math_engine.parse(expression)\n    return f'{result:.4f}'"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Featured Projects" subtitle="Practical applications and software systems I've built" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden border border-[#292929] hover:border-[#FF6B00]/50 group flex flex-col justify-between"
            >
              {/* Project Header Banner / Code Graphic */}
              <div className={`relative p-5 bg-gradient-to-br ${project.gradient} border-b border-[#292929]`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#080808]/90 border ${project.accent}`}>
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-[#080808] text-[#A3A3A3] hover:text-[#FF6B00] hover:bg-[#1a1a1a] transition-colors border border-[#292929] hover:border-[#FF6B00]/40"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  </div>
                </div>

                {/* Code Snippet Preview Graphic */}
                <div className="bg-[#080808] rounded-xl p-3 font-mono text-[11px] text-[#A3A3A3] border border-[#292929] overflow-x-auto select-none opacity-90 group-hover:opacity-100 transition-opacity">
                  <pre className="text-[#A3A3A3]"><code>{project.codeSnippet}</code></pre>
                </div>
              </div>

              {/* Project Info Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2 font-heading group-hover:text-[#FF8A00] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <FolderGit2 className="w-4 h-4 text-[#737373] group-hover:text-[#FF6B00] transition-colors shrink-0 ml-2" />
                  </h3>

                  <p className="text-[#A3A3A3] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#292929] mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 bg-[#111111] text-[#A3A3A3] rounded-lg border border-[#292929] hover:border-[#FF6B00]/30 hover:text-[#FF8A00] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* GitHub Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/AmanChauhan264"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#111111] hover:bg-[#151515] border border-[#292929] hover:border-[#FF6B00]/40 text-[#FF8A00] hover:text-[#FFB066] font-semibold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-[#FF6B00]/10 text-sm"
          >
            <GithubIcon size={18} />
            <span>Explore More Repositories on GitHub</span>
            <ExternalLink size={14} className="ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
