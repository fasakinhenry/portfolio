'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, X } from 'lucide-react';
import TechMarquee from './TechMarquee';
import { useState } from 'react';
import projects from '@/data/projects';

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
              <div className='px-5 pt-5 rounded-[20px]'>
                <div className='relative rounded-[20px] overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className='w-full h-auto object-contain'
                    loading='lazy'
                    decoding='async'
                    style={{ color: 'transparent' }}
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
                className='object-fill w-full h-full'
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
