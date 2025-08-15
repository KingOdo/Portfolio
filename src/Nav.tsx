import React from 'react'
import { FaInstagram, FaLinkedin} from "react-icons/fa";

const Nav = () => {
  return (
   
    <nav className="flex justify-between items-center px-6 py-4 mt-7 m-7">
      {/* Left: Brand Name */}
      <div className="text-2xl font-bold text-gray-900 cursor-pointer">
        KING
      </div>

      {/* Right: Links + Icons */}
      <div className="flex items-center gap-6">
        {/* Navigation Links */}
        <a href="#about" className="text-gray-900 hover:text-black">
          About
        </a>
        <a href="#graphers" className="text-gray-900 hover:text-black">
          Graphers
        </a>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://instagram.com/kingm.odo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
         
        </div>
      </div>
    </nav>
  );
}

export default Nav