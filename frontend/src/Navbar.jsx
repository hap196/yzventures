import React, { useState } from "react";
import logo from "./assets/yz_logo.png";
import "./assets/yz_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={logo} className="h-14" alt="logo" />
            </div>
          </div>
          <div className="hidden md:flex space-x-10">
            <a
              href="#mission"
              className="font-lora text-custom-blue-1 hover:text-gray-400"
            >
              Mission
            </a>
            <a
              href="#about"
              className="font-lora text-custom-blue-1 hover:text-gray-400"
            >
              About
            </a>
            <a
              href="#contact"
              className="font-lora text-custom-blue-1 hover:text-gray-400"
            >
              Contact
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className=" inline-flex items-center justify-center p-2 rounded-md text-custom-blue-1 hover:text-accent-blue focus:outline-none focus:text-accent-blue"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
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
                  className="h-6 w-6"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#mission"
              className="block px-3 py-2 rounded-md text-base font-medium text-center text-custom-blue-1 hover:text-accent-blue"
            >
              Mission
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-center text-custom-blue-1 hover:text-accent-blue"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-center text-custom-blue-1 hover:text-accent-blue"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
