import React, {useState} from 'react'
import { FaInstagram, FaLinkedin} from "react-icons/fa";
import {Link} from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi"; 

const Nav = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
   
    <nav className="flex justify-between items-center px-6 py-4 mt-7 m-7">
      {/* Left: Brand Name */}
      <Link className="text-2xl font-bold text-gray-900 cursor-pointer" to="/">
        KING
      </Link>

      {/* Right: Links + Icons */}
      <div className="flex items-center gap-6">
        {/* Navigation Links */}
       
          <Link to="/about" className="text-gray-900 hover:text-black">
            About
          </Link>
        
        
        <Link to="/graphers" className="text-gray-900 hover:text-black">
          Graphers
        </Link>

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

      {/*burger menu*/}
        
     
    </nav>
  );
}

export default Nav