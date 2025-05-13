'use client';

import Marquee from 'react-fast-marquee';
import { useState } from 'react';

const testimonials = [
  {
    text: 'Working with Henry was an absolute game-changer for our startup. His technical expertise and attention to detail helped us launch our platform three weeks ahead of schedule.',
    name: 'Sarah Johnson',
    username: '@sarahjtech',
    image: '/testimonials/sarah.jpg',
  },
  {
    text: "The UI/UX redesign completely transformed our user engagement metrics. Henry has a rare combination of technical skill and creative vision that's hard to find.",
    name: 'Michael Chen',
    username: '@mikechendev',
    image: '/testimonials/michael.jpg',
  },
  {
    text: "Henry's work on our healthcare platform was exceptional. He understood the complex requirements and delivered a solution that exceeded our expectations.",
    name: 'Dr. Amelia Patel',
    username: '@drapatel',
    image: '/testimonials/amelia.jpg',
  },
  {
    text: "Our e-commerce conversion rate increased by 37% after implementing Henry's recommendations. His understanding of both design and development is truly impressive.",
    name: 'Thomas Wright',
    username: '@tomwright',
    image: '/testimonials/thomas.jpg',
  },
  {
    text: "From concept to completion, the entire process was smooth and professional. The final product perfectly captured our brand's essence while providing exceptional functionality.",
    name: 'Olivia Garcia',
    username: '@oliviag',
    image: '/testimonials/olivia.jpg',
  },
  {
    text: 'Henry took our vague idea and transformed it into a polished, market-ready product. His communication throughout the process was clear and consistent.',
    name: 'David Kim',
    username: '@davidkim',
    image: '/testimonials/david.jpg',
  },
];

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className='w-full bg-gradient-to-b from-white to-gray-50 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center'>
        <h2 className='text-4xl font-bold tracking-tight text-gray-900 mb-4'>
          What People Are Saying
        </h2>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
          Don't just take my word for it - here's what clients and collaborators
          have to say.
        </p>
      </div>

      <div className='w-full overflow-hidden transform-none pb-12'>
        <Marquee
          className='py-4'
          speed={hoveredIndex !== null ? 0 : 30}
          gradient={false}
          play={true}
          direction='left'
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className='mx-6'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className={`
                  flex flex-col w-[380px] h-[280px] rounded-[20px] 
                  border border-gray-100 bg-white/60 backdrop-blur-sm 
                  relative p-6 transition-all duration-500 ease-out
                  hover:scale-[1.03] hover:shadow-xl
                  ${
                    hoveredIndex === index
                      ? 'shadow-xl scale-[1.03]'
                      : 'shadow-md'
                  }
                `}
                style={{
                  boxShadow:
                    'rgba(0, 0, 0, 0.05) 0px 10px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
                  transition:
                    'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease',
                  willChange: 'transform, box-shadow',
                  transform:
                    hoveredIndex === index
                      ? 'translateZ(10px) rotateX(2deg)'
                      : 'translateZ(0)',
                }}
              >
                {/* Quote icon */}
                <div className='text-4xl text-indigo-100 mb-2'>"</div>

                {/* Testimonial text */}
                <p className='text-gray-700 flex-grow mb-4 line-clamp-4'>
                  {testimonial.text}
                </p>

                {/* Profile container */}
                <div className='flex items-center mt-auto'>
                  {/* Profile image */}
                  <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm mr-4'>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='w-full h-full object-cover'
                    />
                  </div>

                  {/* Name and username */}
                  <div className='grid'>
                    <span className='font-semibold text-gray-900'>
                      {testimonial.name}
                    </span>
                    <span className='text-sm text-gray-500'>
                      {testimonial.username}
                    </span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div
                  className='absolute top-6 right-6 w-12 h-12 rounded-full opacity-10 bg-gradient-to-br from-indigo-500 to-purple-500'
                  style={{
                    filter: 'blur(8px)',
                  }}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className='w-full overflow-hidden transform-none'>
        <Marquee
          className='py-4'
          speed={hoveredIndex !== null ? 0 : 20}
          gradient={false}
          play={true}
          direction='right'
        >
          {[...testimonials.slice(3), ...testimonials.slice(0, 3)].map(
            (testimonial, index) => {
              const actualIndex = index + testimonials.length;
              return (
                <div
                  key={actualIndex}
                  className='mx-6'
                  onMouseEnter={() => setHoveredIndex(actualIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div
                    className={`
                    flex flex-col w-[380px] h-[280px] rounded-[20px] 
                    border border-gray-100 bg-white/60 backdrop-blur-sm 
                    relative p-6 transition-all duration-500 ease-out
                    hover:scale-[1.03] hover:shadow-xl
                    ${
                      hoveredIndex === actualIndex
                        ? 'shadow-xl scale-[1.03]'
                        : 'shadow-md'
                    }
                  `}
                    style={{
                      boxShadow:
                        'rgba(0, 0, 0, 0.05) 0px 10px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
                      transition:
                        'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease',
                      willChange: 'transform, box-shadow',
                      transform:
                        hoveredIndex === actualIndex
                          ? 'translateZ(10px) rotateX(2deg)'
                          : 'translateZ(0)',
                    }}
                  >
                    {/* Quote icon */}
                    <div className='text-4xl text-indigo-100 mb-2'>"</div>

                    {/* Testimonial text */}
                    <p className='text-gray-700 flex-grow mb-4 line-clamp-4'>
                      {testimonial.text}
                    </p>

                    {/* Profile container */}
                    <div className='flex items-center mt-auto'>
                      {/* Profile image */}
                      <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm mr-4'>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className='w-full h-full object-cover'
                        />
                      </div>

                      {/* Name and username */}
                      <div className='grid'>
                        <span className='font-semibold text-gray-900'>
                          {testimonial.name}
                        </span>
                        <span className='text-sm text-gray-500'>
                          {testimonial.username}
                        </span>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div
                      className='absolute top-6 right-6 w-12 h-12 rounded-full opacity-10 bg-gradient-to-br from-indigo-500 to-purple-500'
                      style={{
                        filter: 'blur(8px)',
                      }}
                    />
                  </div>
                </div>
              );
            }
          )}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
