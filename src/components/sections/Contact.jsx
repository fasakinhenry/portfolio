import Image from 'next/image';

const Contact = () => {
  return (
    <section className='w-full flex justify-center items-center py-10'>
      <div className='w-full max-w-[53rem] p-6 flex flex-col py-[20px] px-[1.5rem] md:px-[8rem] items-center gap-[25px]'>
        <div
          id='contact-form'
          className='w-full max-w-[53rem] flex flex-col items-start'
        >
          <h2 className='text-[32px] font-bold tracking-[-.03em] leading-[110%] text-black mb-4'>
            Get in touch
          </h2>
          <p className='text-sm font-normal text-[#5a5a5a] mb-8 max-w-[600px]'>
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
              className='bg-black relative text-white py-[14px] px-[24px] rounded-[14px] text-[16px] hover:opacity-90 duration-[300ms] transition-all w-full disabled:opacity-70 mt-2'
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
      </div>
    </section>
  );
};

export default Contact;
