'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, X } from 'lucide-react';
import TechMarquee from './TechMarquee';
import { useState } from 'react';

const projects = [
  {
    slug: 'begg',
    title: 'Begg – Peer-to-Peer Aid',
    description:
      'A platform that enables users to request and offer financial assistance anonymously, built with secure authentication and real-time interactions.',
    image: '/projects/Begg.png',
    link: 'https://begg.vercel.app',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Firebase'],
  },
  {
    slug: 'bornpikin',
    title: 'BornPikin – Midwife Connect',
    description:
      'A platform connecting pregnant women with local midwives to provide prenatal care, educational resources, and flexible payment plans.',
    image: '/projects/Bornpikin.png',
    link: 'https://bornpikin.vercel.app',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB'],
  },
  {
    slug: 'careproxy',
    title: 'CareProxy',
    description: 'The largest directory for healthcare startups',
    image: '/projects/Careproxy.png',
    link: 'https://careproxy.vercel.app',
    technologies: ['Node.js', 'Tailwind CSS', 'React', 'Javascript'],
  },
  {
    slug: 'chatty',
    title: 'Chatty',
    description:
      'A modern chat app with real-time messaging and user presence.',
    image: '/projects/Chatty.png',
    link: 'https://chatty.vercel.app',
    technologies: ['React', 'Socket.IO', 'Firebase', 'Tailwind CSS'],
  },
  {
    slug: 'consolve',
    title: 'Consolve',
    description:
      'A digital services platform bridging African users with local providers in finance, healthcare, logistics, and education, enhanced with AI tools.',
    image: '/projects/Consolve.png',
    link: 'https://consolve.app',
    technologies: ['MERN Stack', 'Tailwind CSS', 'Socket.IO', 'OpenAI API'],
  },
  {
    slug: 'divvy',
    title: 'Divvy',
    description: 'Split expenses and bills with friends easily.',
    image: '/projects/Divvy.png',
    link: 'https://divvy.vercel.app',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
  },
  {
    slug: 'doclax',
    title: 'Doclax',
    description:
      'An all-in-one writing and publishing CLI tool for generating beautiful PDFs, EPUBs, and HTML books with MD/MDX and Tailwind CSS support.',
    image: '/projects/Doclax.png',
    link: 'https://doclax.vercel.app',
    technologies: ['Node.js', 'Tailwind CSS', 'MDX', 'CLI'],
  },
  {
    slug: 'ercasdklanding',
    title: 'Ercasdk Landing',
    description: 'Landing page for ERCA SDK integration tools.',
    image: '/projects/Ercasdklanding.png',
    link: 'https://ercasdklanding.vercel.app',
    technologies: ['Next.js', 'Tailwind CSS'],
  },
  {
    slug: 'ghostykillz',
    title: 'GhostyKillz',
    description: 'A game-themed landing page with animated elements.',
    image: '/projects/Ghostykillz.png',
    link: 'https://ghostykillz.vercel.app',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    slug: 'goalgetter',
    title: 'Goalgetter',
    description: 'Track your personal goals and progress visually.',
    image: '/projects/Goalgetter.png',
    link: 'https://goalgetter.vercel.app',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    slug: 'happybirthday',
    title: 'HappyBirthday',
    description:
      'Celebrate birthdays with interactive animations and messages.',
    image: '/projects/Happybirthday.png',
    link: 'https://happybirthday.vercel.app',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    slug: 'henflap',
    title: 'Henflap',
    description: 'A portfolio or project showcase template.',
    image: '/projects/Henflap.png',
    link: 'https://henflap.vercel.app',
    technologies: ['Next.js', 'Tailwind CSS'],
  },
  {
    slug: 'ideatracker',
    title: 'IdeaTracker',
    description: 'Capture, organize, and prioritize your ideas.',
    image: '/projects/Ideatracker.png',
    link: 'https://ideatracker.vercel.app',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    slug: 'joblier',
    title: 'Joblier',
    description: 'A lightweight job board for developers and creatives.',
    image: '/projects/Joblier.png',
    link: 'https://joblier.vercel.app',
    technologies: ['Next.js', 'Tailwind CSS'],
  },
  {
    slug: 'jobstraight',
    title: 'Jobstraight',
    description:
      'A job-matching platform that streamlines job applications with personalized matching, instant alerts, and simplified employer dashboards.',
    image: '/projects/Jobstraight.png',
    link: 'https://jobstraight.vercel.app',
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'tRPC'],
  },
  {
    slug: 'mapofpi',
    title: 'MapofPi',
    description: 'Visualization of Pi digits in a graphical map form.',
    image: '/projects/Mapofpi.png',
    link: 'https://mapofpi.vercel.app',
    technologies: ['D3.js', 'React'],
  },
  {
    slug: 'mapofpi2',
    title: 'MapofPi 2.0',
    description: 'An enhanced version of the Pi visualization project.',
    image: '/projects/Mapofpi2.png',
    link: 'https://mapofpi2.vercel.app',
    technologies: ['React', 'Tailwind CSS', 'D3.js'],
  },
  {
    slug: 'netflixclone',
    title: 'Netflix Clone',
    description:
      'A functional clone of Netflix UI with authentication and API calls.',
    image: '/projects/Netflixclone.png',
    link: 'https://netflixclone.vercel.app',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
  },
  {
    slug: 'nexuslanding',
    title: 'Nexus Landing',
    description: 'Landing page template for SaaS or tech startup.',
    image: '/projects/Nexuslanding.png',
    link: 'https://nexuslanding.vercel.app',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    slug: 'pipance',
    title: 'Pipance',
    description: 'Simple financial tracker for personal budgeting.',
    image: '/projects/Pipance.png',
    link: 'https://pipance.vercel.app',
    technologies: ['Vue.js', 'Tailwind CSS'],
  },
  {
    slug: 'readjavascript',
    title: 'ReadJavaScript',
    description: 'An educational site for learning JavaScript interactively.',
    image: '/projects/Readjavascript.png',
    link: 'https://readjavascript.vercel.app',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    slug: 'speedhub',
    title: 'Speedhub',
    description: 'A fast file-sharing tool built for modern users.',
    image: '/projects/Speedhub.png',
    link: 'https://speedhub.vercel.app',
    technologies: ['Next.js', 'Tailwind CSS', 'WebRTC'],
  },
  {
    slug: 'timbucloud',
    title: 'TimbuCloud',
    description: 'Cloud file management system for teams.',
    image: '/projects/Timbucloud.png',
    link: 'https://timbucloud.vercel.app',
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    slug: 'ventsphere',
    title: 'Ventsphere',
    description: 'A community platform for venting and mental wellness.',
    image: '/projects/Ventsphere.png',
    link: 'https://ventsphere.vercel.app',
    technologies: ['React', 'Tailwind CSS', 'Supabase'],
  },
];

const Projects = ({ showAll = false }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // For homepage, show only first 6 projects
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  const handleModalOpen = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProject(null);
    // Restore body scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <section className='w-full flex flex-col items-center justify-center py-[58px] px-6'>
      {!showAll && (
        <div className='w-full max-w-[53rem]'>
          <TechMarquee />
        </div>
      )}
      <div className='w-full max-w-[53rem] flex flex-col items-center gap-6'>
        {!showAll && (
          <div className='flex items-center justify-center gap-2 mb-8 w-full'>
            <h2 className='text-[32px] text-center font-bold leading-tight text-black'>
              Here's What I've Been Up To.
            </h2>
          </div>
        )}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
          {displayedProjects.map((project) => (
            <div
              key={project.slug}
              className='w-full rounded-[20px] overflow-hidden border border-[#0000001a] bg-white shadow transition-transform hover:scale-[1.015] cursor-pointer flex flex-col'
              onClick={() => handleModalOpen(project)}
            >
              <div className='px-5 pt-5'>
                <div className='w-full h-48 relative rounded-[20px] overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
              <div className='px-7 py-7 flex flex-col flex-grow'>
                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                <p className='text-[#5a5a5a] text-sm line-clamp-2 mb-3'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className='text-xs text-[#178d00] bg-[#e1f9dc] px-2 py-1 rounded-md'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='mt-auto pt-4'>
                  <Link
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button className='w-full bg-[#f2f2f2] hover:bg-black hover:text-white flex items-center justify-center rounded-[14px] px-[24px] py-[14px] text-[16px] font-normal transition-all duration-300 group'>
                      <span className='font-jakarta flex items-center group-hover:pr-2 font-medium text-[16px] transition-all duration-300'>
                        View Project
                      </span>
                      <ChevronRight className='ml-2 w-5 h-5' />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className='w-full flex justify-center'>
            <Link href='/projects'>
              <button className='mt-4 bg-black hover:bg-[#121212] flex items-center rounded-[14px] px-6 py-3 text-white text-sm font-medium transition-all duration-300 group cursor-pointer'>
                <span className='flex items-center group-hover:pr-2 transition-all duration-300'>
                  View All
                </span>
                <ChevronRight className='ml-2 w-5 h-5' />
              </button>
            </Link>
          </div>
        )}
      </div>
      {/* Modal - ShadCN Style */}
      {modalOpen && selectedProject && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center'
          onClick={handleModalClose}
        >
          {/* Backdrop with glass frosty effect */}
          <div
            className='fixed inset-0 bg-black/40 backdrop-blur-sm'
            aria-hidden='true'
          />
          {/* Modal content */}
          <div
            className='relative bg-white rounded-lg shadow-lg w-full max-w-md mx-auto max-h-[90vh] overflow-hidden animate-in fade-in-0 zoom-in-95'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed height image container */}
            <div className='w-full h-56 relative'>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className='object-cover'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-semibold mb-4'>
                {selectedProject.title}
              </h3>
              <p className='text-[#5a5a5a] text-sm mb-3'>
                {selectedProject.description}
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className='text-xs text-[#178d00] bg-[#e1f9dc] px-2 py-1 rounded-md'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={selectedProject.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='w-full bg-black hover:bg-[#121212] flex items-center justify-center rounded-[14px] px-6 py-3 text-white text-sm font-medium transition-all duration-300 group'>
                  <span className='flex items-center group-hover:pr-2 transition-all duration-300'>
                    View Project
                  </span>
                  <ChevronRight className='ml-2 w-5 h-5' />
                </button>
              </Link>
            </div>
            {/* ShadCN-style close button */}
            <button
              onClick={handleModalClose}
              className='absolute top-4 right-4 rounded-full p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400'
            >
              <X className='h-5 w-5' />
              <span className='sr-only'>Close</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
