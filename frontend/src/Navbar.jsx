import React, { useState, useEffect, useRef } from "react";
import logo from "./assets/yz_logo.png";
import "./assets/yz_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItemsRef = useRef([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-floatUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    menuItemsRef.current.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          observer.observe(el);
        }, index * 200); // delay to make them appear one after the other
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isOpen]);

  return (
    <nav className="fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                ref={(el) => (menuItemsRef.current[0] = el)}
                href="#home"
                className="font-lora text-gray-300 hover:text-gray-400 text-2xl opacity-0"
              >
                Y & Z
              </a>
            </div>
          </div>
          <div className="hidden md:flex space-x-10">
            <a
              ref={(el) => (menuItemsRef.current[1] = el)}
              href="#mission"
              className={`font-lora text-gray-300 hover:text-gray-400 text-lg opacity-0`}
            >
              Mission
            </a>
            <a
              ref={(el) => (menuItemsRef.current[2] = el)}
              href="#about"
              className={`font-lora text-gray-300 hover:text-gray-400 text-lg opacity-0`}
            >
              About
            </a>
            <a
              ref={(el) => (menuItemsRef.current[3] = el)}
              href="#contact"
              className={`font-lora text-gray-300 hover:text-gray-400 text-lg opacity-0`}
            >
              Contact
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-accent-blue focus:outline-none focus:text-accent-blue"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
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
              ref={(el) => (menuItemsRef.current[4] = el)}
              href="#mission"
              className={`block px-3 py-2 rounded-md text-base font-medium text-center text-custom-blue-1 hover:text-accent-blue opacity-0`}
            >
              Mission
            </a>
            <a
              ref={(el) => (menuItemsRef.current[5] = el)}
              href="#about"
              className={`block px-3 py-2 rounded-md text-base font-medium text-center text-custom-blue-1 hover:text-accent-blue opacity-0`}
            >
              About
            </a>
            <a
              ref={(el) => (menuItemsRef.current[6] = el)}
              href="#contact"
              className={`block px-3 py-2 rounded-md text-base font-medium text-center text-custom-blue-1 hover:text-accent-blue opacity-0`}
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
