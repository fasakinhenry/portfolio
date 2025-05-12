'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import * as SiIcons from 'react-icons/si';

// Explicitly import Marquee as a default import
const Marquee = dynamic(
  () => import('react-fast-marquee').then((mod) => mod.default),
  {
    ssr: false,
  }
);

const TechMarquee = () => {
  const technologies = [
    { icon: 'SiPython', color: '#3776AB', name: 'Python' },
    { icon: 'SiHtml5', color: '#E34F26', name: 'HTML5' },
    { icon: 'SiCss3', color: '#1572B6', name: 'CSS3' },
    { icon: 'SiPhp', color: '#777BB4', name: 'PHP' },
    { icon: 'SiSass', color: '#CC6699', name: 'Sass' },
    { icon: 'SiJavascript', color: '#F7DF1E', name: 'JavaScript' },
    { icon: 'SiJquery', color: '#0769AD', name: 'jQuery' },
    { icon: 'SiFigma', color: '#F24E1E', name: 'Figma' },
    { icon: 'SiTypescript', color: '#3178C6', name: 'TypeScript' },
    { icon: 'SiReact', color: '#61DAFB', name: 'React' },
    { icon: 'SiNodedotjs', color: '#339933', name: 'Node.js' },
    { icon: 'SiNextdotjs', color: '#000000', name: 'Next.js' },
    { icon: 'SiDocker', color: '#2496ED', name: 'Docker' },
    { icon: 'SiKubernetes', color: '#326CE5', name: 'Kubernetes' },
    { icon: 'SiGit', color: '#F05032', name: 'Git' },
    { icon: 'SiTailwindcss', color: '#06B6D4', name: 'Tailwind CSS' },
    { icon: 'SiPostgresql', color: '#4169E1', name: 'PostgreSQL' },
    { icon: 'SiMongodb', color: '#47A248', name: 'MongoDB' },
    { icon: 'SiGraphql', color: '#E10098', name: 'GraphQL' },
    { icon: 'SiDjango', color: '#092E20', name: 'Django' },
    { icon: 'SiFlask', color: '#000000', name: 'Flask' },
    { icon: 'SiAws', color: '#232F3E', name: 'AWS' },
    { icon: 'SiFirebase', color: '#FFCA28', name: 'Firebase' },
    { icon: 'SiGo', color: '#00ADD8', name: 'Go' },
    { icon: 'SiRust', color: '#000000', name: 'Rust' },
  ];

return (
    <div className='flex justify-center items-center w-full my-6'>
        <div className='w-[14rem] overflow-hidden relative'>
            <Marquee
                pauseOnHover={false}
                gradient={true}
                gradientWidth={100}
                speed={30}
                autoFill={true}
            >
                <div className='flex gap-2 text-[#acacac] pr-1 items-center'>
                    {technologies.map(({ icon, color, name }, index) => {
                        // Dynamically get the icon component
                        const Icon = SiIcons[icon];

                        return (
                            <div
                                key={index}
                                className='flex flex-col items-center mx-1 group'
                                title={name}
                            >
                                {Icon ? (
                                    <Icon
                                        className='w-[1.5rem] h-[1.5rem] mb-1 transition-colors group-hover:text-black'
                                        color={color}
                                    />
                                ) : null}
                                <span className='text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity'>
                                    {name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </Marquee>
        </div>
    </div>
);
};

export default TechMarquee;
