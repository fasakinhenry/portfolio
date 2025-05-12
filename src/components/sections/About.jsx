import Image from 'next/image';

const About = () => {
  return (
    <section className='w-full max-w-3xl p-6 flex flex-col py-6 md:py-8 px-6 md:px-32 items-start gap-6 mx-auto'>
      <h2 className='font-jakarta text-[25px] md:text-[32px] font-bold tracking-[-.03em] leading-[110%] text-black'>
        About
      </h2>
      <div className='flex flex-col gap-6 text-[#5a5a5a] text-[16px] md:tracking-[.01em] md:leading-[1.4em]'>
        <p>
          I like to craft solid and scalable products with exceptional user
          experiences, focusing on innovation and problem-solving across various
          industries.
        </p>
        <p>
          I'm Robinson Honour, a 19-year-old Nigerian software developer, with
          7.5+ years of experience in web development, app development,
          robotics, cloud computing, and game development. I specialize in
          building robust applications, cloud platforms, and cutting-edge
          robotics solutions.
        </p>
        <p>
          A self-taught programmer, ranked among the top programmers in Port
          Harcourt, Nigeria, I am an active tech content creator, speaker, and
          mentor passionate about empowering others in tech.
        </p>

        <div className='relative w-full h-[250px] mt-8 group'>
          {/* Left Image */}
          <div className='absolute top-0 left-[20%] bg-white px-2 pt-2 -rotate-12 shadow-lg rounded-lg overflow-hidden transition-all duration-500 group-hover:-translate-x-4 group-hover:scale-105'>
            <div className='w-[200px] h-[200px]'>
              <Image
                src='/about1.png'
                alt='About image 1'
                width={200}
                height={200}
                className='object-cover rounded-lg w-full h-full'
              />
            </div>
            <span className='text-xs flex justify-center py-1 pb-3 italic text-black text-center'>
              @ikwerre-dev
            </span>
          </div>

          {/* Right Image */}
          <div className='absolute top-10 right-[20%] bg-white px-2 pt-2 rotate-12 shadow-lg rounded-lg overflow-hidden transition-all duration-500 group-hover:translate-x-4 group-hover:scale-105'>
            <div className='w-[200px] h-[200px]'>
              <Image
                src='/about2.png'
                alt='About image 2'
                width={200}
                height={200}
                className='object-cover rounded-lg w-full h-full'
              />
            </div>
            <span className='text-xs flex justify-center py-1 pb-3 italic text-black text-center'>
              @codewithhonour
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
