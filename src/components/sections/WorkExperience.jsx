'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    date: '2025-Present',
    role: 'Lead Engineer',
    company: 'Jobstraight Inc.',
  },
  {
    date: '2024-Present',
    role: 'Fullstack Developer',
    company: 'Rubies Tech',
  },
  {
    date: '2019-2022',
    role: 'Software Engineer',
    company: 'Henqsoft',
  },
];

const WorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section
      className='w-full flex justify-center py-[58px] px-[1.5rem]'
      ref={ref}
    >
      <div className='w-full max-w-[53rem] flex flex-col gap-[25px]'>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='flex items-center gap-2 mb-8'
        >
          <h2 className='text-[32px] text-center font-bold tracking-[-.03em] leading-[110%] text-black'>
            Work Experience
          </h2>
        </motion.div>

        <div className='flex flex-col w-full gap-6'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className='w-full rounded-[20px] overflow-hidden border-[1.5px] border-[#0000001a] bg-white px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 transition-all hover:shadow-md'
              style={{ boxShadow: 'inset 0px 3px 0px 0px rgb(255, 255, 255)' }}
            >
              <div className='text-[#8F8F8F] text-[14px] font-medium'>
                {exp.date}
              </div>

              <div className='flex flex-col md:flex-row md:items-center gap-2'>
                <div className='text-[16px] font-medium text-[#5a5a5a]'>
                  {exp.role} at
                </div>
                <div className='flex items-center gap-2 bg-[#EEF4FF] text-[#3B82F6] px-3 py-1 rounded-md font-medium text-[15px]'>
                  <span className='w-2 h-2 rounded-full bg-[#3B82F6] flex items-center justify-center'>
                    <svg
                      width='5'
                      height='5'
                      viewBox='0 0 10 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M5 0L9.33013 2.5V7.5L5 10L0.669873 7.5V2.5L5 0Z'
                        fill='white'
                      />
                    </svg>
                  </span>
                  <span>{exp.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
