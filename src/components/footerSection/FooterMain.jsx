import React from 'react'
import {Link} from 'react-scroll'

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <footer className="bg-[#18181b] px-4 pt-16 pb-8 mt-24 border-t border-[#23232a] cursor-default">
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
    </footer>
  );
}

export default FooterMain