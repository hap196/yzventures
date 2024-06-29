import React from 'react';
import logo from './assets/yz_logo.png';
import './assets/yz_logo.png';

const Navbar = () => {
    return (
      <div className="flex items-center justify-between px-16 py-6 text-white">
        <div className="flex-shrink-0">
          <img src={logo} className="h-14" alt="logo" />
        </div>
        <div className="flex space-x-10">
          <a href="#mission" className="font-lora text-custom-blue-1 hover:text-gray-400">Mission</a>
          <a href="#about" className="font-lora text-custom-blue-1 hover:text-gray-400">About</a>
          <a href="#contact" className="font-lora text-custom-blue-1 hover:text-gray-400">Contact</a>
        </div>
      </div>
    );
  };
  
  export default Navbar;
