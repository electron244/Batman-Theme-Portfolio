
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="backdrop-blur-md bg-white/10 py-4 rounded-lg mx-auto max-w-[1300px] px-4 sm:px-10 flex justify-between items-center text-lg h-15 mt-5">
      <div className="text-[#e43232] font-bold mt-4 text-3xl ">WEB-DEVELOPER</div>

      {/* Hamburger button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation menu */}
      <ul
        className={`flex-col sm:flex-row sm:flex gap-8 list-none absolute sm:static bg-[#1b1f24]/90 sm:bg-transparent top-full left-0 w-full sm:w-auto sm:opacity-100 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } sm:opacity-100 sm:visible rounded-b-lg sm:rounded-none p-4 sm:p-0`}
      >
        <li>
          <a
            href="#"
            className="block py-2 sm:py-0 text-white hover:text-[#e43232]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block py-2 sm:py-0 text-white hover:text-[#e43232]"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#project"
            className="block py-2 sm:py-0 text-white hover:text-[#e43232]"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block py-2 sm:py-0 text-white hover:text-[#e43232]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
