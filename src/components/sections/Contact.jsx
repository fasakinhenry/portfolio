import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className='w-full flex justify-center items-center py-10'>
      <div
        id='contact-form'
        className='w-full max-w-[53rem] flex flex-col py-[58px] px-[1.5rem] md:px-[8rem] items-center gap-[25px]'
      >
        <div className='w-full max-w-[53rem] flex flex-col items-start'>
          <h2 className='text-[32px] font-bold tracking-[-.03em] leading-[110%] text-black mb-[16px]'>
            Get in touch
          </h2>
          <p className='text-[16px] font-normal tracking-[.01em] leading-[1.6em] text-[#5a5a5a] mb-[32px] max-w-[600px]'>
            I'm always interested in exploring new opportunities, collaborating,
            or exchanging ideas with like-minded individuals. Feel free to book
            a call or email me if you'd like to see my portfolio deck or to
            discuss a potential project.
          </p>

          <form className='w-full flex flex-col gap-4'>
            <div className='grid md:flex gap-4 w-full'>
              <input
                type='text'
                placeholder='Full Name'
                required
                className='flex-1 bg-[#f2f2f2] border-[1px] border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black transition-all'
                name='name'
              />
              <input
                type='email'
                placeholder='Email Address'
                required
                className='flex-1 bg-[#f2f2f2] border-[1px] border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black transition-all'
                name='email'
              />
            </div>
            <textarea
              name='message'
              placeholder='Write your Message'
              required
              className='w-full bg-[#f2f2f2] border-[1px] border-[#0000001a] rounded-[14px] px-[24px] py-[14px] text-[16px] h-[150px] outline-none focus:ring-2 focus:ring-black transition-all resize-none'
            ></textarea>
            <button
              type='submit'
              className='bg-black relative text-white py-[14px] px-[24px] rounded-[14px] text-[16px] hover:opacity-90 duration-[300ms] transition-all w-full disabled:opacity-70'
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
            </button>
          </form>
        </div>

        <div className='w-full max-w-[53rem] py-[40px] flex flex-col items-center gap-[16px] border-t border-[#E5E5E5]'>
          <p className='text-[14px] text-center text-[#5a5a5a]'>
            Copyright © 2025 Robinson Honour.
          </p>
          <div className='flex gap-6 py-1 cursor-pointer'>
            <Link
              href='https://x.com/@honour_can_code'
              className='text-[#5a5a5a] cursor-pointer hover:text-black transition-all'
            >
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 512 512'
                height='20'
                width='20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'></path>
              </svg>
            </Link>

            <Link
              href='https://www.instagram.com/codewithhonour'
              className='text-[#5a5a5a] cursor-pointer hover:text-black transition-all'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-instagram'
                aria-hidden='true'
              >
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                <line x1='17.5' x2='17.51' y1='6.5' y2='6.5'></line>
              </svg>
            </Link>

            <Link
              href='https://github.com/ikwerre-dev'
              className='text-[#5a5a5a] cursor-pointer hover:text-black transition-all'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-github'
                aria-hidden='true'
              >
                <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                <path d='M9 18c-4.51 2-5-2-7-2'></path>
              </svg>
            </Link>

            <Link
              href='mailto:codewithhonour@gmail.com'
              className='text-[#5a5a5a] cursor-pointer hover:text-black transition-all'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-mail'
                aria-hidden='true'
              >
                <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
