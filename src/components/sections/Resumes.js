'use client';

import { useState } from 'react';
import { Download, FileText, Eye, X, Grid, List } from 'lucide-react';

const resumeData = [
  {
    id: 1,
    title: 'Software Engineer Resume',
    category: 'Senior Level',
    description:
      'Comprehensive resume showcasing full-stack development experience',
    pdfUrl: '/resumes/software-engineer.pdf',
    docxUrl: '/resumes/software-engineer.docx',
    level: 'senior',
  },
  {
    id: 2,
    title: 'Frontend Resume',
    category: 'Mid Level',
    description: 'Focused on React, Next.js, and modern frontend technologies',
    pdfUrl: '/resumes/frontend.pdf',
    docxUrl: '/resumes/frontend.docx',
    level: 'mid',
  },
  {
    id: 3,
    title: 'Backend Resume',
    category: 'Mid Level',
    description: 'Highlighting server-side development and database expertise',
    pdfUrl: '/resumes/backend.pdf',
    docxUrl: '/resumes/backend.docx',
    level: 'mid',
  },
  {
    id: 4,
    title: 'Resume with Summary',
    category: 'General',
    description: 'Detailed resume with comprehensive professional summary',
    pdfUrl: '/resumes/with-summary.pdf',
    docxUrl: '/resumes/with-summary.docx',
    level: 'general',
  },
  {
    id: 5,
    title: 'Product Design Intern',
    category: 'Intern Level',
    description: 'UI/UX design skills and product thinking capabilities',
    pdfUrl: '/resumes/product-design-intern.pdf',
    docxUrl: '/resumes/product-design-intern.docx',
    level: 'intern',
  },
  {
    id: 6,
    title: 'Frontend Intern',
    category: 'Intern Level',
    description: 'Entry-level frontend development position focused',
    pdfUrl: '/resumes/frontend-intern.pdf',
    docxUrl: '/resumes/frontend-intern.docx',
    level: 'intern',
  },
  {
    id: 7,
    title: 'Backend Intern',
    category: 'Intern Level',
    description: 'Server-side development internship targeted resume',
    pdfUrl: '/resumes/backend-intern.pdf',
    docxUrl: '/resumes/backend-intern.docx',
    level: 'intern',
  },
  {
    id: 8,
    title: 'Fullstack Intern',
    category: 'Intern Level',
    description: 'Complete web development internship application resume',
    pdfUrl: '/resumes/fullstack-intern.pdf',
    docxUrl: '/resumes/fullstack-intern.docx',
    level: 'intern',
  },
];

export default function Resumes() {
  const [viewLayout, setViewLayout] = useState('list'); // 'list' or 'grid'
  const [selectedResume, setSelectedResume] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewResume = (resume) => {
    setSelectedResume(resume);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedResume(null);
  };

  const handleDownload = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className='w-full flex flex-col py-8'>
      {/* Layout Toggle */}
      <div className='flex justify-between items-center mb-6'>
        <div className='flex items-center gap-2'>
          <span className='text-sm text-[#5a5a5a]'>View:</span>
          <div className='flex border border-[#e0e0e0] rounded-lg overflow-hidden'>
            <button
              onClick={() => setViewLayout('list')}
              className={`p-2 transition-colors ${
                viewLayout === 'list'
                  ? 'bg-black text-white'
                  : 'bg-white text-[#5a5a5a] hover:bg-gray-50'
              }`}
            >
              <List className='w-4 h-4' />
            </button>
            <button
              onClick={() => setViewLayout('grid')}
              className={`p-2 transition-colors ${
                viewLayout === 'grid'
                  ? 'bg-black text-white'
                  : 'bg-white text-[#5a5a5a] hover:bg-gray-50'
              }`}
            >
              <Grid className='w-4 h-4' />
            </button>
          </div>
        </div>
        <span className='text-sm text-[#5a5a5a]'>
          {resumeData.length} Resume{resumeData.length > 1 ? 's' : ''}
        </span>
      </div>

      {/* Resume Cards */}
      <div
        className={`${
          viewLayout === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 gap-4'
            : 'flex flex-col gap-3'
        }`}
      >
        {resumeData.map((resume) => (
          <div
            key={resume.id}
            className={`
              border border-[#e0e0e0] rounded-lg bg-white hover:border-[#c0c0c0] 
              transition-all duration-200 hover:shadow-sm
              ${
                viewLayout === 'list'
                  ? 'flex items-center justify-between p-4'
                  : 'flex flex-col p-5'
              }
            `}
          >
            {/* Resume Info */}
            <div
              className={`flex items-center gap-3 ${
                viewLayout === 'grid' ? 'mb-4' : ''
              }`}
            >
              <div className='p-2 bg-gray-50 rounded-lg'>
                <FileText className='w-5 h-5 text-[#5a5a5a]' />
              </div>
              <div className={`${viewLayout === 'list' ? 'flex-1' : ''}`}>
                <h3 className='font-semibold text-black text-base'>
                  {resume.title}
                </h3>
                <div className='flex items-center gap-2 mt-1'>
                  <span
                    className={`
                    text-xs px-2 py-1 rounded-md font-medium
                    ${
                      resume.level === 'senior'
                        ? 'bg-purple-100 text-purple-700'
                        : resume.level === 'mid'
                        ? 'bg-blue-100 text-blue-700'
                        : resume.level === 'intern'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }
                  `}
                  >
                    {resume.category}
                  </span>
                </div>
                {viewLayout === 'grid' && (
                  <p className='text-sm text-[#5a5a5a] mt-2'>
                    {resume.description}
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className={`flex items-center gap-2 ${
                viewLayout === 'grid' ? 'mt-auto' : ''
              }`}
            >
              <button
                onClick={() => handleViewResume(resume)}
                className='flex items-center gap-1 px-3 py-2 text-sm text-[#5a5a5a] 
                         hover:text-black hover:bg-gray-50 rounded-md transition-colors'
                title='View Resume'
              >
                <Eye className='w-4 h-4' />
                <span className='hidden sm:inline'>View</span>
              </button>

              <button
                onClick={() =>
                  handleDownload(resume.pdfUrl, `${resume.title}.pdf`)
                }
                className='flex items-center gap-1 px-3 py-2 text-sm text-[#5a5a5a] 
                         hover:text-black hover:bg-gray-50 rounded-md transition-colors'
                title='Download PDF'
              >
                <Download className='w-4 h-4' />
                <span className='hidden sm:inline'>PDF</span>
              </button>

              <button
                onClick={() =>
                  handleDownload(resume.docxUrl, `${resume.title}.docx`)
                }
                className='flex items-center gap-1 px-3 py-2 text-sm text-[#5a5a5a] 
                         hover:text-black hover:bg-gray-50 rounded-md transition-colors'
                title='Download DOCX'
              >
                <Download className='w-4 h-4' />
                <span className='hidden sm:inline'>DOCX</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Resume Preview */}
      {modalOpen && selectedResume && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center p-4'
          onClick={handleModalClose}
        >
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black/50 backdrop-blur-sm'
            aria-hidden='true'
          />

          {/* Modal content */}
          <div
            className='relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] 
                       overflow-hidden animate-in fade-in-0 zoom-in-95'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className='flex items-center justify-between p-6 border-b border-gray-200'>
              <div>
                <h3 className='text-xl font-semibold text-black'>
                  {selectedResume.title}
                </h3>
                <p className='text-sm text-[#5a5a5a] mt-1'>
                  {selectedResume.description}
                </p>
              </div>
              <button
                onClick={handleModalClose}
                className='p-2 rounded-full hover:bg-gray-100 transition-colors'
              >
                <X className='h-5 w-5 text-[#5a5a5a]' />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className='h-[70vh] bg-gray-50'>
              <iframe
                src={selectedResume.pdfUrl}
                className='w-full h-full'
                title={`${selectedResume.title} Preview`}
              />
            </div>

            {/* Footer with download buttons */}
            <div className='flex items-center justify-between p-6 border-t border-gray-200'>
              <span className='text-sm text-[#5a5a5a]'>
                {selectedResume.category}
              </span>
              <div className='flex gap-3'>
                <button
                  onClick={() =>
                    handleDownload(
                      selectedResume.pdfUrl,
                      `${selectedResume.title}.pdf`
                    )
                  }
                  className='flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg 
                           hover:bg-gray-800 transition-colors text-sm font-medium'
                >
                  <Download className='w-4 h-4' />
                  Download PDF
                </button>
                <button
                  onClick={() =>
                    handleDownload(
                      selectedResume.docxUrl,
                      `${selectedResume.title}.docx`
                    )
                  }
                  className='flex items-center gap-2 px-4 py-2 border border-gray-300 text-black 
                           rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium'
                >
                  <Download className='w-4 h-4' />
                  Download DOCX
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
