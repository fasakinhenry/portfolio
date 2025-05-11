'use client';

import Marquee from 'react-fast-marquee';

const ShowcaseScroller = () => {
  const items = [
    { src: '/showcase/careproxy.png', alt: 'CareProxy' },
    { src: '/payforeign.png', alt: 'PayForeign' },
    { src: '/ondepay.png', alt: 'Ondepay Virtual Card V2' },
    // Add more items as needed
  ];

  const cardStyles = {
    boxShadow: 'rgb(255, 255, 255) 0px 3px 0px 0px inset',
    transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    willChange: 'transform',
    transform: 'translateZ(0)',
  };

  const innerShadow = {
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 10px 16px -3px',
  };

  const cornerDotShadow = {
    boxShadow:
      'rgba(0,0,0,0.1) 0px 1px 1px 0px inset, rgb(255,255,255) 0px -0.5px 0px 0px inset',
  };

  return (
    <div className='w-full overflow-hidden transform-none py-16'>
      <Marquee
        className='gap-6 py-[1rem]'
        speed={30}
        gradient={false}
        play={true}
        direction='left'
        pauseOnHover={false}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className='mx-6'
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              className='flex w-[400px] h-[280px] rounded-[20px] overflow-hidden border border-[#f2f2f2] bg-[#fafafa] relative hover:scale-[1.05]'
              style={cardStyles}
            >
              <div
                className='p-6 flex items-center justify-center w-full h-full rounded-[10px]'
                style={innerShadow}
              >
                <img
                  alt={item.alt}
                  src={item.src}
                  draggable={false}
                  loading='lazy'
                  decoding='async'
                  className='rounded-[10px]'
                  style={{
                    width: '300px',
                    height: '200px',
                    objectFit: 'cover',
                    flexShrink: 0,
                  }}
                />
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
                  style={cornerDotShadow}
                />
              ))}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ShowcaseScroller;
