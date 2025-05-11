'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from '@/components/Navbar';
import VerticalBoundaries from '@/components/VerticalBoundaries';
import Hero from '@/components/sections/Hero';
import ShowcaseScroller from '@/components/sections/ShowcaseScroller';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import WorkExperience from '@/components/sections/WorkExperience';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className='min-h-screen bg-white text-black'>
      <Navbar />
      <VerticalBoundaries />
      <Hero />
      <ShowcaseScroller />
      <About />
      <Projects />
      <WorkExperience />
    </main>
  );
}
