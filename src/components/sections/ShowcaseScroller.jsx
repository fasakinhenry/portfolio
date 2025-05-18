'use client';

import Marquee from 'react-fast-marquee';
import projects from '@/data/projects';

const ShowcaseScroller = () => {
  const cardShadow = 'rgb(255, 255, 255) 0px 3px 0px 0px inset';
  const innerShadow = 'rgba(0, 0, 0, 0.25) 0px 10px 16px -3px';
  const cornerDotShadow =
    'rgba(0, 0, 0, 0.1) 0px 1px 1px 0px inset, rgb(255, 255, 255) 0px -0.5px 0px 0px inset';

  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className='w-full overflow-hidden transform-none'>
      <Marquee
        className='gap-6 py-[1rem]'
        speed={80}
        gradient={false}
        play={true}
        direction='left'
        pauseOnHover={false}
      >
        {duplicatedProjects.map((project, index) => (
          <div
            key={index}
            className='rfm-child'
            style={{ '--transform': 'none' }}
          >
            <div className='flex px-4 md:px-3'>
              <div
                className='flex min-w-[400px] md:min-w-[400px] w-full rounded-[20px] overflow-hidden border-[1.5px] border-[#f2f2f2] bg-[#fafafa] relative transition-all hover:scale-[1.02]'
                style={{ boxShadow: cardShadow }}
              >
                <div
                  className='p-8 rounded-[10px]'
                  style={{ boxShadow: innerShadow }}
                >
                  <div
                    className='relative'
                    style={{
                      filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 10px 7px)',
                    }}
                  >
                    <img
                      alt={project.title}
                      draggable={false}
                      loading='lazy'
                      width={400}
                      height={400}
                      decoding='async'
                      className='w-full h-[250px] object-cover rounded-[10px]'
                      src={project.image}
                    />
                  </div>
                </div>

                {/* Corner dots */}
                {[
                  'top-4 left-4',
                  'bottom-4 left-4',
                  'top-4 right-4',
                  'bottom-4 right-4',
                ].map((pos, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 ${pos} rounded-full bg-[#e6e6e6]`}
                    style={{ boxShadow: cornerDotShadow }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ShowcaseScroller;
