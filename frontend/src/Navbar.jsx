import React, { useState, useRef } from "react";
import logo from "./assets/logo_nowords.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItemsRef = useRef([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    const navbar = document.getElementById("navbar");
    const offset = navbar.offsetHeight;
    const sectionPosition =
      section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav
      id="navbar"
      className="fixed bg-blue-gray z-10 w-full top-0 border-b border-gray-300 border-opacity-30"
    >
      <div className="absolute top-0 bottom-0 left-4 sm:left-8 md:left-16 lg:left-20 w-px bg-gray-300 opacity-30"></div>
      <div className="absolute top-0 bottom-0 right-4 sm:right-8 md:right-16 lg:right-20 w-px bg-gray-300 opacity-30"></div>
      <div className="lg:mx-24 md:mx-20 sm:mx-18 mx-10 px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-10 mr-2 hover:text-accent-blue"
                ref={(el) => (menuItemsRef.current[0] = el)}
              />
              <a
                href="#home"
                className="font-poppins text-gray-200 hover:text-accent-blue text-4xl font-bold"
                ref={(el) => (menuItemsRef.current[1] = el)}
              >
                Y&Z
              </a>
            </div>
          </div>
          <div className="hidden lg:flex space-x-10">
            <a
              ref={(el) => (menuItemsRef.current[2] = el)}
              href="#mission"
              onClick={(event) => scrollToSection(event, "#mission")}
              className="font-poppins text-gray-200 hover:text-accent-blue hover:underline hover:underline-offset-8 text-md"
            >
              MISSION
            </a>
            <a
              ref={(el) => (menuItemsRef.current[3] = el)}
              href="#portfolio"
              onClick={(event) => scrollToSection(event, "#portfolio")}
              className="font-poppins text-gray-200 hover:text-accent-blue hover:underline hover:underline-offset-8 text-md"
            >
              PORTFOLIO
            </a>
            <a
              ref={(el) => (menuItemsRef.current[4] = el)}
              href="#about"
              onClick={(event) => scrollToSection(event, "#about")}
              className="font-poppins text-gray-200 hover:text-accent-blue hover:underline hover:underline-offset-8 text-md"
            >
              ABOUT
            </a>
            <a
              ref={(el) => (menuItemsRef.current[5] = el)}
              href="#contact"
              onClick={(event) => scrollToSection(event, "#contact")}
              className="font-poppins text-gray-200 hover:text-accent-blue hover:underline hover:underline-offset-8 text-md"
            >
              CONTACT
            </a>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-gray-800 focus:outline-none focus:text-gray-800 px-4"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-6">
            <a
              href="#mission"
              onClick={(event) => scrollToSection(event, "#mission")}
              className="block px-3 py-2 rounded-md text-base font-poppins text-xl text-center text-gray-800 hover:text-gray-300"
            >
              MISSION
            </a>
            <a
              href="#portfolio"
              onClick={(event) => scrollToSection(event, "#portfolio")}
              className="block px-3 py-2 rounded-md text-base font-poppins text-xl text-center text-gray-800 hover:text-gray-300"
            >
              PORTFOLIO
            </a>
            <a
              href="#about"
              onClick={(event) => scrollToSection(event, "#about")}
              className="block px-3 py-2 rounded-md text-base font-poppins text-xl text-center text-gray-800 hover:text-gray-300"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, "#contact")}
              className="block px-3 py-2 rounded-md text-base font-poppins text-xl text-center text-gray-800 hover:text-gray-300"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
