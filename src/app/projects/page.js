'use client';

import Navbar from '@/components/Navbar';
import VerticalBoundaries from '@/components/VerticalBoundaries';
import Projects from '@/components/sections/Projects';

export default function ProjectsPage() {
  return (
    <main className='min-h-screen bg-white text-black'>
      <Navbar />
      <VerticalBoundaries />
      <div className='flex flex-col items-center w-full mt-36'>
      <div className='w-full max-w-[53rem]'>
        <h1 className='text-4xl font-bold mb-1 text-center'>Projects</h1>
        <Projects showAll={true} />
      </div>
      </div>
    </main>
  );
}
