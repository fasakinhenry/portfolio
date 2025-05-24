'use client';

import Navbar from '@/components/Navbar';
import VerticalBoundaries from '@/components/VerticalBoundaries';
import Resumes from '@/components/sections/Resumes';
import Footer from '@/components/Footer';

export default function ResumePage() {
  return (
    <main className='min-h-screen bg-white text-black'>
      <Navbar />
      <VerticalBoundaries />
      <div className='flex flex-col items-center w-full mt-36'>
        <div className='w-full max-w-[53rem]'>
          <h1 className='text-4xl font-bold mb-1 text-center'>Resumes</h1>
          <p className='text-center text-[#5a5a5a] mb-8'>
            Download or view my specialized resumes for different roles
          </p>
          <Resumes />
        </div>
      </div>
      <Footer />
    </main>
  );
}
