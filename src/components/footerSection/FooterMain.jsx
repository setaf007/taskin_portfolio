import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];


const FooterMain = () => {
  // Scroll to top handler
  const handleScrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };
  return (
    <footer className="bg-[#18181b] px-4 pt-16 pb-8 mt-24 border-t border-[#23232a] cursor-default relative">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Md Taskin Hossain</span>
        </div>
        <ul className="flex flex-wrap gap-2 md:gap-6 mt-4 md:mt-0">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.section} smooth={true} spy={true} 
                        duration={500} offset={-130} className='cursor-pointer text-white
                         hover:text-cyan transition-all duration-300'>{link.link}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-[1200px] mx-auto mt-8 flex flex-col md:flex-row items-center justify-between gap-2 border-t border-[#23232a] pt-4">
        <p className="text-xs text-darkGrey">&copy; 2025 Md Taskin Hossain. All Rights Reserved.</p>
        <p className="text-xs text-darkGrey">Designed & Developed by Md Taskin Hossain</p>
      </div>
      {/* Back to Top Button */}
      <button
        onClick={handleScrollToTop}
        aria-label="Back to top"
        className="fixed bottom-8 right-8 z-30 bg-[#23232a] hover:bg-cyan text-white hover:text-[#18181b] border border-cyan rounded-full shadow-lg p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan"
        style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.12)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}

export default FooterMain