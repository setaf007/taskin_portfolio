import React from 'react'
import { Link } from 'react-scroll'
import { FaFolderOpen } from 'react-icons/fa6'

const AboutMeText = () => {
  return (
  <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center w-full">
    <h2 className="text-4xl sm:text-5xl font-bold text-lightGrey flex items-center gap-4 mb-8 cursor-default">
      <span className="inline-block w-2 h-8 bg-cyan-400 rounded-full"></span>
      About Me
    </h2>
    <div className="w-full">
      <div className="pl-0 md:pl-6">
        <p className="text-lightGrey text-lg sm:text-xl mb-4 leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
          <span className="text-cyan-400 font-semibold text-2xl block mb-2">Hi, I'm a <span className="text-white">Software Engineer</span> 👋</span>
          With <span className="text-cyan-400 font-medium">3+ years</span> of experience in <span className="text-cyan-400">backend development</span>, <span className="text-cyan-400">data engineering</span>, and <span className="text-cyan-400">automation</span>.
        </p>
        <ul className="text-lightGrey text-lg sm:text-xl mb-4 leading-relaxed max-w-3xl mx-auto font-light list-disc list-inside">
          <li>Skilled in <span className="text-cyan-400">Python</span>, <span className="text-cyan-400">Java</span>, <span className="text-cyan-400">SQL</span></li>
          <li>Experienced with <span className="text-cyan-400">Apache Spark</span>, <span className="text-cyan-400">Kafka</span>, <span className="text-cyan-400">Docker</span></li>
          <li>Full Stack development in both professional and personal projects</li>
        </ul>
        <p className="text-lightGrey text-lg sm:text-xl mb-4 leading-relaxed max-w-3xl mx-auto font-light">
          <span className="text-white font-medium">Currently exploring:</span> <span className="text-cyan-400">AI</span>, <span className="text-cyan-400">ML</span>, and <span className="text-cyan-400">cloud-native architecture</span>.
        </p>
        <p className="text-lightGrey text-base sm:text-lg max-w-3xl mx-auto mb-2">
          This portfolio is a living document of my growth. Feel free to explore my work and reach out if you'd like to collaborate!
        </p>
      </div>
    </div>
    <button className="border border-cyan-400 rounded-full py-3 px-8 text-lg flex items-center justify-center mt-8 bg-cyan text-white font-semibold shadow-md hover:bg-darkCyan hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer md:self-start sm:self-center gap-2">
      <Link to={"projects"} smooth={true} spy={true} duration={500} offset={-130} className="flex items-center gap-2 cursor-pointer text-white hover:text-cyan-200 transition-all duration-300">
        <FaFolderOpen className="text-xl" /> My Projects
      </Link>
    </button>
  </div>
  )
}

export default AboutMeText
