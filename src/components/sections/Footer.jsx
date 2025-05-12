import Link from 'next/link';
import { Instagram, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <footer className="w-full max-w-[53rem] py-[40px] flex flex-col items-center gap-[16px] border-t border-[#E5E5E5] px-[1.5rem] md:px-[8rem]">
        <p className="text-[14px] text-center text-[#5a5a5a]">
          Copyright © 2025 Fasakin Henry.
        </p>
        <div className="flex gap-6 py-1 cursor-pointer">
          <Link
            href="https://x.com/henqsoft"
            className="text-[#5a5a5a] cursor-pointer hover:text-black transition-all"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
          </Link>

          <Link
            href="https://www.instagram.com/henqsoft"
            className="text-[#5a5a5a] cursor-pointer hover:text-black transition-all"
          >
            <Instagram size={20} />
          </Link>

          <Link
            href="https://github.com/fasakinhenry"
            className="text-[#5a5a5a] cursor-pointer hover:text-black transition-all"
          >
            <Github size={20} />
          </Link>

          <Link
            href="mailto:fasakinhenry@gmail.com"
            className="text-[#5a5a5a] cursor-pointer hover:text-black transition-all"
          >
            <Mail size={20} />
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
