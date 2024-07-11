import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center border-t w-full border-gray-300 border-opacity-30 py-10">
      <h6 className="text-gray-200 font-lora text-md flex items-center justify-center md:justify-start lg:ml-32 md:ml-24">
        ©Y&Z Ventures
      </h6>
      <a
        href="https://www.linkedin.com/company/y-z-ventures/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 md:mt-0 md:ml-2 flex justify-center"
      >
        <FaLinkedin className="text-gray-200 w-6 h-6 hover:text-accent-blue" />
      </a>
    </div>
  );
};

export default Footer;
