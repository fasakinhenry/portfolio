'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Contact = () => {
  const messageRef = useRef(null);
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

  useEffect(() => {
    // Check if there's a URL parameter for prefilling the message
    const handleHashChange = () => {
      if (window.location.hash === '#hire') {
        if (messageRef.current) {
          messageRef.current.value = 'Hello Henry, Are you up for this role:';
          messageRef.current.focus();
        }
      }
    };

    // Initial check on component mount
    handleHashChange();

    // Set up event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Animation variants for scroll direction and view count
  const getHeaderAnimation = () => {
    const initialOpacity = viewCount === 0 ? 0 : 0.5;
    const yOffset = viewCount === 0 ? 40 : 20;

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

  const getTextAnimation = () => {
    const initialOpacity = viewCount === 0 ? 0 : 0.6;
    const xOffset = viewCount === 0 ? 50 : 25;

    return {
      initial: {
        opacity: initialOpacity,
        x: scrollDirection === 'down' ? -xOffset : xOffset,
      },
      whileInView: {
        opacity: 1,
        x: 0,
      },
      transition: {
        duration: viewCount === 0 ? 0.8 : 0.5,
        delay: 0.1,
        ease: 'easeOut',
      },
    };
  };

  const getFormAnimation = () => {
    return {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          delay: 0.2,
          when: 'beforeChildren',
          staggerChildren: 0.15,
        },
      },
    };
  };

  const formItemAnimation = {
    initial: {
      opacity: 0,
      y: scrollDirection === 'down' ? 20 : -20,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const buttonAnimation = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className='w-full flex justify-center items-center py-10'>
      <div className='w-full max-w-[53rem] p-6 flex flex-col py-[20px] px-[1.5rem] md:px-[8rem] items-center gap-[25px]'>
        <div
          id='contact-form'
          className='w-full max-w-[53rem] flex flex-col items-start'
        >
          <motion.h2
            {...getHeaderAnimation()}
            viewport={{ once: false, margin: '-100px' }}
            className='text-[32px] font-bold tracking-[-.03em] leading-[110%] text-black mb-4'
          >
            Get in touch
          </motion.h2>

          <motion.p
            {...getTextAnimation()}
            viewport={{ once: false, margin: '-100px' }}
            className='text-sm font-normal text-[#5a5a5a] mb-8 max-w-[600px]'
          >
            I'm always interested in exploring new opportunities, collaborating,
            or exchanging ideas with like-minded individuals. Feel free to book
            a call or email me if you'd like to see my portfolio deck or to
            discuss a potential project.
          </motion.p>

          <motion.form
            {...getFormAnimation()}
            viewport={{ once: false, margin: '-100px' }}
            className='w-full flex flex-col gap-4'
          >
            <div className='grid md:flex gap-4 w-full'>
              <motion.input
                variants={formItemAnimation}
                type='text'
                placeholder='Full Name'
                required
                className='flex-1 bg-[#f2f2f2] border-[1px] border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black transition-all'
                name='name'
              />
              <motion.input
                variants={formItemAnimation}
                type='email'
                placeholder='Email Address'
                required
                className='flex-1 bg-[#f2f2f2] border-[1px] border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black transition-all'
                name='email'
              />
            </div>
            <motion.textarea
              variants={formItemAnimation}
              ref={messageRef}
              name='message'
              placeholder='Write your Message'
              required
              className='w-full bg-[#f2f2f2] border-[1px] border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] h-[150px] outline-none focus:ring-2 focus:ring-black transition-all resize-none'
            ></motion.textarea>
            <motion.button
              variants={buttonAnimation}
              type='submit'
              className='font-jakarta bg-black relative text-white py-[14px] px-[24px] rounded-[14px] text-[16px] hover:opacity-90 duration-[300ms] transition-all w-full disabled:opacity-70 mt-2'
            >
              <Image
                alt='Doodle'
                loading='lazy'
                decoding='async'
                src='/doodle.png'
                fill
                className='absolute object-cover top-0 left-0 opacity-10'
              />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
