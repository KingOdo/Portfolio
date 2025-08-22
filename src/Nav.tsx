import { useState } from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi"; 

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 mt-7 mx-7 relative">
      {/* Left: Brand Name */}
      <Link className="text-2xl font-bold text-gray-900 cursor-pointer" to="/">
        KING
      </Link>

      {/* Desktop Links + Icons */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/about" className="text-gray-900 hover:text-black">About</Link>
        <Link to="/graphers" className="text-gray-900 hover:text-black">Graphers</Link>
        <div className="flex gap-4 text-xl">
          <a href="https://instagram.com/kingm.odo/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/king-michael-odo/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
      {/* Menu Overlay */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <Link onClick={() => setMenuOpen(false)} to="/about" className="text-gray-900 text-lg hover:text-black">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/graphers" className="text-gray-900 text-lg hover:text-black">Graphers</Link>
          <div className="flex gap-4 text-2xl">
            <a href="https://instagram.com/kingm.odo/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
