import React from "react";

const LogoBox = ({ href, src, alt, height }) => {
  return (
    <div className="flex items-center justify-center flex-shrink-0 md:flex-grow border-r border-gray-500 py-10 hover:bg-accent-blue hover:bg-opacity-50 ease-out duration-500 transition-all">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} className={`inline-block ${height} max-h-20 mx-20 md:mx-24 white-filter`} />
      </a>
    </div>
  );
};

export default LogoBox;