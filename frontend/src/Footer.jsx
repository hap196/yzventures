import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center border-t w-full border-opacity-30 border-gray-800 py-10">
      <h6 className="font-lora text-md flex items-center justify-center md:justify-start lg:ml-32 md:ml-24">
        ©Y&Z Ventures
      </h6>
      <a
        href="https://www.linkedin.com/company/y-z-ventures/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 md:mt-0 md:ml-2 flex justify-center"
      >
        <FaLinkedin className="w-6 h-6 hover:text-accent-blue" />
      </a>
    </div>
  );
};

export default Footer;
