'use client';

import { motion } from 'framer-motion';
import { Home, Github, FileText } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    label: 'Home',
    href: '/',
    icon: <Home size={20} />,
  },
  {
    label: 'Twitter',
    href: 'https://x.com/@honour_can_code',
    external: true,
    icon: (
      <svg
        stroke='currentColor'
        fill='currentColor'
        viewBox='0 0 16 16'
        height='17'
        width='17'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z'></path>
      </svg>
    ),
  },
  {
    label: 'Github',
    href: '/github',
    icon: <Github size={20} />,
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
    external: true,
    download: true,
    icon: <FileText size={20} />,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className='fixed top-[10px] md:top-[25px] w-full z-50 flex justify-center p-4'>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='flex items-center gap-1 p-[6px] rounded-[20px] border border-zinc-200 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all'
      >
        {navLinks.map(({ label, href, icon, external, download }, i) => (
          <div key={i} className='flex items-center'>
            <a
              href={href}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              {...(download ? { download: true } : {})}
              className='p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-900 relative group transition-all duration-[300ms] hover:bg-[#ededed] rounded-[15px]'
            >
              {icon}
              <span className='absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity'>
                {label}
              </span>
            </a>
            {i === 0 || i === 2 ? (
              <div className='h-5 w-[1px] bg-zinc-200 md:mx-2'></div>
            ) : null}
          </div>
        ))}
        <a
          href='/blog'
          className='bg-black text-white py-[14px] px-[20px] md:px-[22px] rounded-[14px] text-sm hover:opacity-90 duration-[300ms] transition-all hover:px-[28px] ml-2 md:ml-1'
        >
          <span className='hidden md:flex'>My Blog</span>
          <span className='md:hidden'>My Blog</span>
        </a>
      </motion.nav>
    </header>
  );
}
