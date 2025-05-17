import React, { useState } from "react";
import logo from "../assets/logoWaqas.png";
import { Menu, X, Github } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <AnchorLink href="#home">
          <img src={logo} alt="Logo" className="h-[50px] cursor-pointer" />
        </AnchorLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li>
            <AnchorLink href="#home" offset="70" className="hover:text-white">
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about" offset="70" className="hover:text-white">
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#projects"
              offset="70"
              className="hover:text-white"
            >
              Projects
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#contact"
              offset="70"
              className="hover:text-white"
            >
              Contact
            </AnchorLink>
          </li>
        </ul>

        {/* Desktop GitHub Button */}
        <a
          href="https://github.com/MWaqasAfridi"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 text-white font-semibold rounded-full hover:scale-105 transition duration-300"
        >
          <Github className="h-5 w-5" />
          GitHub
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-slate-900 px-4 pb-4 space-y-3 text-gray-300 font-medium flex flex-col items-center">
          <li>
            <AnchorLink
              href="#home"
              offset="70"
              onClick={() => setIsOpen(false)}
            >
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#about"
              offset="70"
              onClick={() => setIsOpen(false)}
            >
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#projects"
              offset="70"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#contact"
              offset="70"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </AnchorLink>
          </li>
          <li>
            <a
              href="https://github.com/MWaqasAfridi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 mt-2 px-5 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 font-semibold rounded-full hover:scale-105 transition duration-300"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
