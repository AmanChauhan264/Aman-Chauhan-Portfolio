"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-14 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F5F5] font-heading tracking-tight">
          {title}
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-[#FF6B00] to-[#FF8A00] mx-auto mt-3 rounded-full shadow-lg shadow-[#FF6B00]/30" />
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-[#A3A3A3] text-sm md:text-base max-w-xl font-medium leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
