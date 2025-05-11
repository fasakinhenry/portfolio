'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    slug: 'payforeign',
    title: 'PayForeign',
    description:
      'International payment gateway platform facilitating cross-border transactions and currency conversions',
    image: '/payforeign.png',
  },
  {
    slug: 'ondepay',
    title: 'Ondepay Virtual Card V2',
    description:
      'Enhanced digital payment solution with improved user experience and advanced virtual card management',
    image: '/ondepay.png',
  },
  {
    slug: 'runmecv',
    title: 'RunMeCV AI',
    description:
      'AI-powered resume builder offering professional templates, real-time editing, and intelligent content suggestions to create standout CVs',
    image: '/runmecv.png',
  },
  {
    slug: 'sme-unwind',
    title: 'SME Unwind 2024',
    description:
      'SME Unwind 2024 is a platform that connects small and medium-sized enterprises with investors and potential partners',
    image: '/sme.png',
  },
];

const Projects = () => {
  return (
    <section className='w-full flex justify-center py-[58px] px-[1.5rem]'>
      <div className='w-full max-w-[53rem] flex flex-col gap-[25px]'>
        <div className='flex items-center gap-2 mb-8'>
          <h2 className='text-[32px] text-center font-bold tracking-[-.03em] leading-[110%] text-black'>
            Here's What I've Been Up To.
          </h2>
        </div>

        <div className='flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className='w-full rounded-[20px] overflow-hidden border-[1.5px] border-[#0000001a] relative transition-all'
              style={{ boxShadow: 'inset 0px 3px 0px 0px rgb(255, 255, 255)' }}
            >
              <div className='px-5 pt-5 pb-7 rounded-[20px]'>
                <div className='relative'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className='w-full h-auto object-contain rounded-[20px]'
                  />
                </div>
              </div>

              <div className='px-7 pb-7'>
                <h3 className='text-[24px] font-semibold mb-2'>
                  {project.title}
                </h3>
                <p className='text-[#5a5a5a] text-[16px] line-clamp-2'>
                  {project.description}
                </p>
                <button className='mt-4 bg-[#f2f2f2] hover:bg-[#e5e5e5] flex items-center rounded-[14px] px-[24px] py-[14px] text-[16px] font-normal text-black transition-all duration-500 group'>
                  <span className='font-jakarta flex items-center group-hover:pr-2 font-medium text-[16px] transition-all duration-300'>
                    View Project
                  </span>
                  <svg
                    className='ml-2 w-5 h-5'
                    fill='none'
                    height='24'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    width='24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='m9 18 6-6-6-6' />
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Updated View All Button */}
        <div className='col-span-2 w-full'>
          <Link href='/projects'>
            <button className='mt-4 mx-auto bg-[#000] hover:bg-[#121212] flex items-center rounded-[14px] px-[24px] py-[14px] text-[16px] font-normal text-white text-start no-underline transition-all duration-500 group'>
              <span className='font-jakarta flex items-center group-hover:pr-2 font-medium text-[16px] transition-all duration-300'>
                View All
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-chevron-right ml-2 w-5 h-5'
                aria-hidden='true'
              >
                <path d='m9 18 6-6-6-6'></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
