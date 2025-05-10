'use client';

import Navbar from '@/components/Navbar';
import VerticalBoundaries from '@/components/VerticalBoundaries';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

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
      {/* Hero, About, Projects etc. will come here later */}
      <section className='h-screen flex items-center justify-center'>
        <h1 className='text-4xl font-bold'>Welcome to My Portfolio</h1>
      </section>
    </main>
  );
}
