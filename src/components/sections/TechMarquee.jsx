'use client';

import Marquee from 'react-fast-marquee';
import { 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiDocker, 
  SiKubernetes, 
  SiGit, 
  SiTailwindcss, 
  SiPostgresql, 
  SiMongodb, 
  SiGraphql, 
  SiDjango, 
  SiFlask, 
  SiAmazonaws, 
  SiFirebase,
  SiGo,
  SiRust
} from 'react-icons/si';

const TechMarquee = () => {
  const technologies = [
    { Icon: SiPython, color: '#3776AB' },
    { Icon: SiJavascript, color: '#F7DF1E' },
    { Icon: SiTypescript, color: '#3178C6' },
    { Icon: SiReact, color: '#61DAFB' },
    { Icon: SiNodedotjs, color: '#339933' },
    { Icon: SiNextdotjs, color: '#000000' },
    { Icon: SiDocker, color: '#2496ED' },
    { Icon: SiKubernetes, color: '#326CE5' },
    { Icon: SiGit, color: '#F05032' },
    { Icon: SiTailwindcss, color: '#06B6D4' },
    { Icon: SiPostgresql, color: '#4169E1' },
    { Icon: SiMongodb, color: '#47A248' },
    { Icon: SiGraphql, color: '#E10098' },
    { Icon: SiDjango, color: '#092E20' },
    { Icon: SiFlask, color: '#000000' },
    { Icon: SiAmazonaws, color: '#232F3E' },
    { Icon: SiFirebase, color: '#FFCA28' },
    { Icon: SiGo, color: '#00ADD8' },
    { Icon: SiRust, color: '#000000' }
  ];

  return (
    <div className="w-full overflow-hidden relative">
      <Marquee 
        pauseOnHover={true}
        gradient={false}
        speed={30}
        autoFill={true}
      >
        <div className="flex gap-2 text-[#acacac] pr-3 items-center">
          {technologies.map(({ Icon, color }, index) => (
            <Icon 
              key={index} 
              className="w-[1.8rem] h-[1.8rem] mx-3" 
              color={color} 
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TechMarquee;
