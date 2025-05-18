'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

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
  const [scrollDirection, setScrollDirection] = useState('down');
  const [viewCount, setViewCount] = useState(0);
  const { scrollY } = useScroll();
  const prevScrollY = useRef(0);

  // Track scroll direction
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const direction = latest > prevScrollY.current ? 'down' : 'up';
    if (direction !== scrollDirection) {
      setScrollDirection(direction);
    }
    prevScrollY.current = latest;
  });

  // Get animation properties based on view count and direction
  const getHeaderAnimation = () => {
    // First time has full effect, subsequent views are subtler
    const initialOpacity = viewCount === 0 ? 0 : 0.5;
    const yOffset = viewCount === 0 ? 30 : 15;

    return {
      initial: {
        opacity: initialOpacity,
        y: scrollDirection === 'down' ? yOffset : -yOffset,
      },
      whileInView: {
        opacity: 1,
        y: 0,
      },
      transition: {
        duration: viewCount === 0 ? 0.7 : 0.5,
        ease: 'easeOut',
      },
      onAnimationComplete: () => {
        if (scrollDirection === 'down') {
          setViewCount((prev) => prev + 1);
        }
      },
    };
  };

  // Get card animation properties based on view count, direction, and index
  const getCardAnimation = (index) => {
    // First time has full effect, subsequent views are subtler
    const initialOpacity = viewCount === 0 ? 0 : 0.7;
    const xOffsetDown = viewCount === 0 ? -70 : -30;
    const xOffsetUp = viewCount === 0 ? 70 : 30;

    return {
      initial: {
        opacity: initialOpacity,
        x: scrollDirection === 'down' ? xOffsetDown : xOffsetUp,
        scale: scrollDirection === 'down' ? 0.95 : 1,
      },
      whileInView: {
        opacity: 1,
        x: 0,
        scale: 1,
      },
      transition: {
        duration: viewCount === 0 ? 0.6 : 0.4,
        delay:
          scrollDirection === 'down'
            ? index * 0.15
            : (experiences.length - 1 - index) * 0.15,
        type: 'spring',
        stiffness: 70,
        damping: 15,
      },
    };
  };

  return (
    <section className='w-full flex justify-center py-[58px] px-[1.5rem]'>
      <div className='w-full max-w-[53rem] flex flex-col gap-[25px]'>
        <motion.div
          {...getHeaderAnimation()}
          viewport={{ once: false, margin: '-100px' }}
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
              {...getCardAnimation(index)}
              viewport={{ once: false, margin: '-100px' }}
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
