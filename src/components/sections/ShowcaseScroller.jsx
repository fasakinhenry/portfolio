'use client';

import Marquee from 'react-fast-marquee';

const ShowcaseScroller = () => {
  const items = [
    { src: '/showcase/careproxy.png', alt: 'CareProxy' },
    { src: '/payforeign.png', alt: 'PayForeign' },
    { src: '/ondepay.png', alt: 'Ondepay Virtual Card V2' },
    // Add more items as needed
  ];

  return (
    <section
      className='w-full py-20 relative overflow-x-hidden'
      style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div className='relative z-10'>
        <Marquee
          speed={30}
          gradient={false}
          pauseOnHover
          className='overflow-visible'
        >
          {items.map((item, index) => (
            <div key={index} className='flex px-4 md:px-3'>
              <div
                className='flex w-[400px] h-[280px] rounded-[20px] overflow-hidden border-[1.5px] border-[#f2f2f2] bg-[#fafafa] relative transition-transform hover:scale-[1.05]'
                style={{
                  boxShadow: 'rgb(255, 255, 255) 0px 3px 0px 0px inset',
                  transition: 'transform 0.3s ease',
                  willChange: 'transform',
                }}
              >
                <div
                  className='p-6 flex items-center justify-center w-full h-full rounded-[10px]'
                  style={{
                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 10px 16px -3px',
                  }}
                >
                  <img
                    alt={item.alt}
                    draggable={false}
                    loading='lazy'
                    decoding='async'
                    className='w-[300px] h-[200px] object-cover rounded-[10px]'
                    src={item.src}
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
                    style={{
                      boxShadow:
                        'rgba(0,0,0,0.1) 0px 1px 1px 0px inset, rgb(255,255,255) 0px -0.5px 0px 0px inset',
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ShowcaseScroller;
