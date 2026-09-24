import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 bg-[#080808] border-t border-[#292929]">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <div className="text-center md:text-left">
          <p className="font-heading font-bold text-[#F5F5F5] text-base">
            Aman Kumar Chauhan
          </p>
          <p className="text-xs text-[#A3A3A3] mt-1 font-mono">
            Software Engineer / MERN Stack Developer <span className="text-[#FF6B00]">•</span> 3rd Year CSE @ RTU Jaipur
          </p>
          <p className="text-xs text-[#737373] mt-1">
            &copy; {currentYear} All Rights Reserved. Crafted with precision in Orange &amp; Black.
          </p>
        </div>

        <div className="flex space-x-3">
          <a
            href="https://github.com/AmanChauhan264"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#111111] border border-[#292929] text-[#A3A3A3] hover:text-[#FF6B00] hover:border-[#FF6B00]/40 transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/aman-kumar-chauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#111111] border border-[#292929] text-[#A3A3A3] hover:text-[#FF6B00] hover:border-[#FF6B00]/40 transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:neerajchauhanch112@gmail.com"
            className="p-2.5 rounded-xl bg-[#111111] border border-[#292929] text-[#A3A3A3] hover:text-[#FF6B00] hover:border-[#FF6B00]/40 transition-all"
            aria-label="Send Email"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}
