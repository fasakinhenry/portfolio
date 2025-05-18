'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  // Create parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Transform values for subtle parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [20, -20]);

  // Subtle fade-in animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Staggered paragraph reveal
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Image animations
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className='w-full max-w-3xl p-6 flex flex-col py-6 md:py-8 px-6 md:px-32 items-start gap-6 mx-auto'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeIn}
    >
      <motion.h2
        className='font-jakarta text-[25px] md:text-[32px] font-bold tracking-[-.03em] leading-[110%] text-black'
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: 'easeOut' },
          },
        }}
      >
        About
      </motion.h2>

      <motion.div
        className='flex flex-col gap-6 text-[#5a5a5a] text-[16px] md:tracking-[.01em] md:leading-[1.4em]'
        variants={container}
      >
        <motion.p variants={fadeIn}>
          I enjoy building purposeful and scalable products with thoughtful user
          experiences, especially tools that create social and economic impact
          across communities, with a strong focus on innovation, sustainability,
          and accessibility.
        </motion.p>

        <motion.p variants={fadeIn}>
          I'm Fasakin Henry, a Nigerian full-stack developer and tech
          entrepreneur with over 5 years of experience in web and mobile
          development, cloud platforms, robotics, and developer tools. I’m known
          for delivering highly performant, production-ready applications and
          creating robust systems that power real-world solutions.
        </motion.p>

        <motion.p variants={fadeIn}>
          As a self-taught programmer recognized among the top developers in
          Lagos, I’m passionate about leveraging deep technical expertise to
          simplify complex problems. I actively share my journey as a tech
          content creator, mentor, and community builder, helping others in tech
          grow and thrive through education and collaboration.
        </motion.p>

        <motion.div
          className='relative w-full h-[250px] mt-8 group'
          variants={fadeIn}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className='absolute top-0 left-[20%] bg-white px-2 pt-2 -rotate-12 shadow-lg rounded-lg overflow-hidden transition-all duration-500 group-hover:-translate-x-4 group-hover:scale-105'
            variants={imageVariants}
            style={{ y: y1 }}
            whileHover={{ rotate: -8, transition: { duration: 0.3 } }}
          >
            <div className='w-[200px] h-[200px]'>
              <Image
                src='/profiles/profile4.jpg'
                alt='About image 1'
                width={200}
                height={200}
                className='object-cover rounded-lg w-full h-full'
              />
            </div>
            <span className='text-xs flex justify-center py-1 pb-3 italic text-black text-center'>
              @henqsoft
            </span>
          </motion.div>

          <motion.div
            className='absolute top-10 right-[20%] bg-white px-2 pt-2 rotate-12 shadow-lg rounded-lg overflow-hidden transition-all duration-500 group-hover:translate-x-4 group-hover:scale-105'
            variants={imageVariants}
            style={{ y: y2 }}
            whileHover={{ rotate: 8, transition: { duration: 0.3 } }}
            transition={{ delay: 0.2 }}
          >
            <div className='w-[200px] h-[200px]'>
              <Image
                src='/profiles/profile2.jpg'
                alt='About image 2'
                width={200}
                height={200}
                className='object-cover rounded-lg w-full h-full'
              />
            </div>
            <span className='text-xs flex justify-center py-1 pb-3 italic text-black text-center'>
              @henqsoft
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
