import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'ReactJS',
    'NextJS',
    'NodeJS',
    'Python',
    'PHP',
    'jQuery',
    'Git',
    'GitHub',
    'Figma',
    'Photoshop',
    'Premiere Pro',
    'TailwindCSS',
    'Bootstrap',
    'SCSS',
    'MongoDB',
    'ExpressJS',
  ];

  return (
    <section className="w-full flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-[53rem] flex flex-col items-center relative bg-black px-[1rem] md:px-[5rem] py-[5rem] rounded-xl">
        <Image
          alt="Doodle"
          loading="lazy"
          decoding="async"
          src="/doodle.png"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 opacity-10"
        />
        <h2 className="text-[32px] font-bold tracking-[-.03em] leading-[110%] text-white text-center w-full mb-[16px]">
          How can I help?
        </h2>
        <p className="text-[18px] text-[#a4a2a2] text-center w-full mb-[40px]">
          Let's turn your vision into something amazing.
        </p>
        <div className="flex gap-6 w-full">
          <Marquee gradient={false} speed={50} pauseOnHover={true}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#F9F9F9] mr-5 rounded-[16px] px-6 py-3 flex flex-col hover:scale-105 duration-300 items-center"
              >
                <h3 className="text-[13px] font-medium">{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
