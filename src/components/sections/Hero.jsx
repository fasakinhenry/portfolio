'use client';

import { motion } from 'framer-motion';

const text = ['Hey,', "I'm", 'Fasakin', 'Henry.'];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const word = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 10 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const h2Animation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8, // starts after h1
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  return (
    <section className='w-full max-w-[53rem] mx-auto p-6 flex flex-col pt-[150px] md:pt-[188px] pb-[2rem] md:pb-[3rem] px-[1.5rem] md:px-[10rem] items-start gap-[25px]'>
      <div>
        <img
          alt='Profile picture'
          width='100'
          height='100'
          decoding='async'
          className='rounded-full object-cover'
          style={{ color: 'transparent', width: '100px', height: '100px' }}
          src='/profile.jpeg'
        />
      </div>

      <div className='text-start'>
        <motion.h1
          className='text-[26px] md:text-[42px] font-bold tracking-[-.03em] leading-[110%] text-black mb-2'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          {text.map((wordText, index) => (
            <motion.span
              key={index}
              variants={word}
              className='inline-block mr-[0.2em]'
            >
              {wordText}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className='text-[26px] md:text-[42px] font-bold tracking-[-.03em] leading-[110%] text-black'
          variants={h2Animation}
          initial='hidden'
          animate='visible'
        >
          <span className='inline-block mr-[0.2em]'>Software</span>
          <span className='inline-block mr-[0.2em]'>Engineer</span>
        </motion.h2>

        <p className='text-[16px] font-normal tracking-[.01em] leading-[1.4em] text-[#5a5a5a] mt-[25px]'>
          Building impactful products with precision and creativity.
          <br />
          Full-stack developer crafting seamless user experiences and solid
          backends.
        </p>
      </div>

      <div className='flex gap-4'>
        <button className='font-jakarta bg-black text-white py-[14px] px-[24px] rounded-[14px] text-[16px] hover:opacity-90 transition-all duration-[300ms] hover:px-[28px]'>
          Hire Me
        </button>
        <div className='flex items-center rounded-[100px] text-[16px] gap-2 px-[24px] py-[14px] bg-[#e1f9dc] text-[#178d00]'>
          <div className='w-2 h-2 bg-[#178d00] rounded-full' />
          <span className='hidden md:flex'>Available for new project</span>
          <span className='md:hidden'>Available</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
