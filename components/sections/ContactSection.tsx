"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#080808]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Get In Touch" subtitle="Let's connect! Open for internships, software engineering roles, and collaborations." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto mt-10 items-stretch">
          
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="glass-card p-8 rounded-3xl border border-[#292929] space-y-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#F5F5F5] mb-3 font-heading flex items-center">
                  <MessageSquare className="w-5 h-5 text-[#FF6B00] mr-2" />
                  Let&apos;s build together!
                </h3>
                <p className="text-[#A3A3A3] text-sm leading-relaxed mb-6">
                  I am currently seeking full-stack software development opportunities and technical roles. Feel free to reach out via email or connect on LinkedIn!
                </p>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:neerajchauhanch112@gmail.com"
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-[#111111] border border-[#292929] hover:border-[#FF6B00]/40 transition-all group"
                  >
                    <div className="bg-[#080808] p-3 rounded-xl text-[#FF6B00] border border-[#292929] group-hover:border-[#FF6B00]/50 transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[#A3A3A3] font-mono">Email</p>
                      <p className="text-[#F5F5F5] font-semibold text-sm break-all group-hover:text-[#FF8A00] transition-colors">
                        neerajchauhanch112@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+918923995129"
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-[#111111] border border-[#292929] hover:border-[#FF8A00]/40 transition-all group"
                  >
                    <div className="bg-[#080808] p-3 rounded-xl text-[#FF8A00] border border-[#292929] group-hover:border-[#FF8A00]/50 transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[#A3A3A3] font-mono">Phone</p>
                      <p className="text-[#F5F5F5] font-semibold text-sm group-hover:text-[#FF8A00] transition-colors">
                        +91-8923995129
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#111111] border border-[#292929]">
                    <div className="bg-[#080808] p-3 rounded-xl text-[#FFB066] border border-[#292929]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[#A3A3A3] font-mono">Location</p>
                      <p className="text-[#F5F5F5] font-semibold text-sm">
                        Jaipur, Rajasthan, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-6 border-t border-[#292929] mt-6 flex items-center justify-between">
                <span className="text-xs font-mono text-[#A3A3A3]">Connect via Socials:</span>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/AmanChauhan264"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[#111111] border border-[#292929] text-[#A3A3A3] hover:text-[#FF6B00] hover:border-[#FF6B00]/40 transition-all"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/aman-kumar-chauhan"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[#111111] border border-[#292929] text-[#A3A3A3] hover:text-[#FF6B00] hover:border-[#FF6B00]/40 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="glass-card p-8 rounded-3xl border border-[#292929]">
              
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center border border-[#FF6B00]/30">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-[#F5F5F5] font-heading">Message Sent Successfully!</h4>
                  <p className="text-[#A3A3A3] text-sm max-w-md">
                    Thank you for getting in touch, Aman will respond to your message shortly.
                  </p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-[#A3A3A3] mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#292929] text-[#F5F5F5] placeholder-[#737373] text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-[#A3A3A3] mb-2">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#292929] text-[#F5F5F5] placeholder-[#737373] text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                        placeholder="e.g. rahul@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-[#A3A3A3] mb-2">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#292929] text-[#F5F5F5] placeholder-[#737373] text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                      placeholder="e.g. Full-Stack Opportunity / Project Collaboration"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-[#A3A3A3] mb-2">
                      MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#292929] text-[#F5F5F5] placeholder-[#737373] text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors resize-none"
                      placeholder="Hello Aman, I would like to discuss..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A00] hover:from-[#FF8A00] hover:to-[#FFB066] text-[#080808] font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/35 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
