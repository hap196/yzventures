import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex max-w-7xl mx-48">
      <h6 className="font-lora text-left text-md mr-2">©Y&Z Ventures</h6>
      <a href="https://www.linkedin.com/company/y-z-ventures/" target="_blank">
        <FaLinkedin className="w-5 h-5 hover:text-accent-blue" />
      </a>
    </div>
  );
};

export default Footer;
