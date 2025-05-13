'use client';

import Marquee from 'react-fast-marquee';
import { SiLinkedin, SiFacebook, SiThreads, SiX } from 'react-icons/si';
import { useState } from 'react';

const testimonials = [
  {
    text: 'Working with Henry was an absolute game-changer for our startup. His technical expertise and attention to detail helped us launch our platform three weeks ahead of schedule.',
    name: 'Sarah Johnson',
    username: '@sarahjtech',
    image: '/testimonials/sarah.jpg',
    social: 'linkedin',
    link: 'https://linkedin.com/in/sarahjohnson',
  },
  {
    text: "The UI/UX redesign completely transformed our user engagement metrics. Henry has a rare combination of technical skill and creative vision that's hard to find.",
    name: 'Michael Chen',
    username: '@mikechendev',
    image: '/testimonials/michael.jpg',
    social: 'x',
    link: 'https://x.com/mikechendev',
  },
  {
    text: "Henry's work on our healthcare platform was exceptional. He understood the complex requirements and delivered a solution that exceeded our expectations.",
    name: 'Dr. Amelia Patel',
    username: '@drapatel',
    image: '/testimonials/amelia.jpg',
    social: 'facebook',
    link: 'https://facebook.com/amelia.patel',
  },
  {
    text: "Our e-commerce conversion rate increased by 37% after implementing Henry's recommendations. His understanding of both design and development is truly impressive.",
    name: 'Thomas Wright',
    username: '@tomwright',
    image: '/testimonials/thomas.jpg',
    social: 'threads',
    link: 'https://threads.net/tomwright',
  },
  {
    text: "From concept to completion, the entire process was smooth and professional. The final product perfectly captured our brand's essence while providing exceptional functionality.",
    name: 'Olivia Garcia',
    username: '@oliviag',
    image: '/testimonials/olivia.jpg',
    social: 'linkedin',
    link: 'https://linkedin.com/in/oliviagarcia',
  },
  {
    text: 'Henry took our vague idea and transformed it into a polished, market-ready product. His communication throughout the process was clear and consistent.',
    name: 'David Kim',
    username: '@davidkim',
    image: '/testimonials/david.jpg',
    social: 'x',
    link: 'https://x.com/davidkim',
  },
];

const getSocialIcon = (social) => {
  const iconSize = 24;

  switch (social) {
    case 'linkedin':
      return <SiLinkedin size={iconSize} className='text-[#0077b5]' />;
    case 'x':
      return <SiX size={iconSize} className='text-black' />;
    case 'facebook':
      return <SiFacebook size={iconSize} className='text-[#4267B2]' />;
    case 'threads':
    default:
      return <SiThreads size={iconSize} className='text-[#000000]' />;
  }
};

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardStyles = {
    boxShadow: 'rgb(255, 255, 255) 0px 3px 0px 0px inset',
    transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    willChange: 'transform',
    transform: 'translateZ(0)',
  };

  const innerShadow = {
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 10px 16px -3px',
  };

  return (
    <section className='w-full overflow-hidden transform-none py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center'>
        <h2 className='text-4xl font-bold tracking-tight text-gray-900 mb-4'>
          What People Are Saying
        </h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Don't just take my word for it - here's what clients and collaborators
          have to say.
        </p>
      </div>

      <div className='w-full overflow-hidden transform-none'>
        <Marquee
          className='gap-6 py-[1rem]'
          speed={hoveredIndex !== null ? 0 : 30}
          gradient={false}
          play={true}
          direction='left'
          pauseOnHover={true}
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
                className='flex w-[400px] h-[280px] rounded-[20px] overflow-hidden border border-[#f2f2f2] bg-[#fafafa] relative hover:scale-[1.02]'
                style={cardStyles}
              >
                <div
                  className='p-6 flex flex-col w-full h-full rounded-[10px]'
                  style={innerShadow}
                >
                  {/* Social Icon */}
                  <a
                    href={testimonial.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='absolute top-4 left-4 transition-transform hover:scale-105'
                    onClick={(e) => e.stopPropagation()}
                  >
                    {getSocialIcon(testimonial.social)}
                  </a>

                  {/* Vertically centered content */}
                  <div className='flex flex-col justify-center flex-grow'>
                    <p className='text-sm text-gray-700 line-clamp-5'>
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Avatar and Name */}
                  <div className='flex items-center'>
                    <div className='w-12 h-12 rounded-full overflow-hidden border border-gray-100 mr-4'>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div className='grid'>
                      <span className='font-semibold text-gray-900 font-jakarta'>
                        {testimonial.name}
                      </span>
                      <span className='text-sm text-gray-500'>
                        {testimonial.username}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
