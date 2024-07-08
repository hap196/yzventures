import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center border-t w-full border-opacity-30 border-gray-400 py-10">
      <h6 className="mx-48 font-lora text-md flex items-center">
        ©Y&Z Ventures |
        <a href="https://www.linkedin.com/company/y-ventures/" target="_blank" className="ml-2">
          <FaLinkedin className="w-6 h-6 hover:text-accent-blue" />
        </a>
      </h6>
    </div>
  );
};

export default Footer;
