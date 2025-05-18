'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const messageRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

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

  return (
    <section
      className='w-full flex justify-center items-center py-10'
      ref={sectionRef}
    >
      <div className='w-full max-w-[53rem] p-6 flex flex-col py-[20px] px-[1.5rem] md:px-[8rem] items-center gap-[25px]'>
        <div
          id='contact-form'
          className='w-full max-w-[53rem] flex flex-col items-start'
        >
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='text-[32px] font-bold tracking-[-.03em] leading-[110%] text-black mb-4'
          >
            Get in touch!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.05 }}
            className='text-[16px] font-normal leading-[1.6em] text-[#5a5a5a] mb-8 max-w-[600px]'
          >
            Always open to new opportunities, collaborations, or idea exchanges.
            Let’s connect to discuss your project.
          </motion.p>

          <div className='w-full flex flex-col gap-4'>
            <div className='grid md:flex gap-4 w-full'>
              <motion.input
                initial={{ opacity: 0, y: 15 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                }
                transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
                type='text'
                placeholder='Full Name'
                required
                className='flex-1 bg-[#f2f2f2] border-[1px] border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black transition-all'
                name='name'
              />
              <motion.input
                initial={{ opacity: 0, y: 15 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                }
                transition={{ duration: 0.3, ease: 'easeOut', delay: 0.15 }}
                type='email'
                placeholder='Email Address'
                required
                className='flex-1 bg-[#f2f2f2] border-[1px] border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black transition-all'
                name='email'
              />
            </div>
            <motion.textarea
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
              ref={messageRef}
              name='message'
              placeholder='Write your Message'
              required
              className='w-full bg-[#f2f2f2] border-[1px] border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] h-[150px] outline-none focus:ring-2 focus:ring-black transition-all resize-none'
            ></motion.textarea>
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: 0.25 }}
              type='submit'
              className='font-jakarta bg-black relative text-white py-[14px] px-[24px] rounded-[14px] text-[16px] hover:scale-[1.02] duration-[300ms] transition-all w-full disabled:opacity-70 mt-2 cursor-pointer'
            >
              Send Message
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
