//import React from 'react'
import Footer from './Footer'
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiCplusplus } from "react-icons/si";
import {DiJava} from "react-icons/di"
import Projects from './Projects';

const About = () => {
  return (
    <>
    <div className="flex flex-col-reverse md:flex-row items-center md:justify-between mt-8 px-4 md:px-12">
  {/* Text Section */}
  <div className="text-center md:text-left md:max-w-xl mb-8 md:mb-0">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-black">
      about.
    </h1>
    <h5 className="mt-4 sm:text-lg md:text-xl font-normal mx-auto md:mx-0">
      From my first "Hello World" to building a website and now being able to build full stack web applications, Software Engineering has been quite the adventure. The experiences and challenges along the way have served as a strong foundation for me, which in turn has motivated me to seek out roles where I can challenge myself and provide web value to others.
    </h5>
  </div>

  {/* Image Section */}
  <img
    src="images/King.jpg"
    alt="King's pfp"
    className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full object-cover mb-6 md:mb-0"
  />
</div>

    <section className="max-w-5xl px-6 py-20 ml-4 sm:ml-15 flex mt-10 items-center justify-center">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-gray-800">Tech Stack</h2>
          <span className="text-gray-400">| </span>
          </div>
            {/* Tech stack icons */}
        <div className="flex flex-wrap gap-12 text-5xl">
          <FaHtml5 className="text-orange-600 hover:scale-110 transition-transform duration-200" />
          <FaCss3Alt className="text-blue-600 hover:scale-110 transition-transform duration-200" />
          <SiJavascript className="text-yellow-400 hover:scale-110 transition-transform duration-200" />
          <FaReact className="text-sky-400 hover:scale-110 transition-transform duration-200" />
          <SiTailwindcss className="text-sky-500 hover:scale-110 transition-transform duration-200" />
          <DiJava className="text-red-600 hover:scale-110 transition-transform duration-200" />
           <SiCplusplus className="text-blue-700 hover:scale-110 transition-transform duration-200" />
        
        </div>
    </section>

    <section>
      {/*projects go here*/}
      <Projects/>
    </section>
    <section>
      {/*KING-MICHAEL is on his way to t becoming the best SWE Eng. */}
     
    </section>
     <Footer/>
     </>
  )
}

export default About