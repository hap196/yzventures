import React from "react";

const LogoBox = ({ href, src, alt, height }) => {
  return (
    <div className="flex items-center justify-center flex-grow border-r border-gray-300 py-10 hover:bg-gray-200 ease-out duration-500 transition-all">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} className={`inline-block ${height} max-h-20 mx-24`} />
      </a>
    </div>
  );
};

export default LogoBox;
