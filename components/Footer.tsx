import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 bg-slate-950 border-t border-slate-800/80">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <div className="text-center md:text-left">
          <p className="font-heading font-bold text-white text-base">
            Aman Kumar Chauhan
          </p>
          <p className="text-xs text-slate-400 mt-1 font-mono">
            Full-Stack Developer • 3rd Year CSE Student @ RTU Jaipur
          </p>
          <p className="text-xs text-slate-500 mt-1">
            &copy; {currentYear} All Rights Reserved. Designed &amp; Developed with precision.
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/AmanChauhan264"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/aman-kumar-chauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:neerajchauhanch112@gmail.com"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
            aria-label="Send Email"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}
