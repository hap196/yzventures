import React from "react";
import image1 from "./assets/company_logos/aster_logo.svg";
import image2 from "./assets/company_logos/daisy_logo.png";
import image3 from "./assets/company_logos/livvy_logo.svg";
import image4 from "./assets/company_logos/odynn_logo.svg";
import image5 from "./assets/company_logos/splash_logo.png";
import LogoBox from "./LogoBox";

const PortfolioScroll = () => {
  const logos = [
    { src: image1, alt: "Image 1", href: "https://www.astercare.com/", height: "h-10" },
    { src: image2, alt: "Image 2", href: "https://daisyco.com/", height: "h-20" },
    { src: image3, alt: "Image 3", href: "https://www.bylivvy.com/", height: "h-14" },
    { src: image4, alt: "Image 4", href: "https://www.odynn.com/", height: "h-16" },
    { src: image5, alt: "Image 5", href: "https://splashventures.com/", height: "h-14" },
  ];

  return (
    <div className="border-t border-b border-gray-300 overflow-hidden mx-24 mb-36 flex items-center">
      <div className="flex">
        {logos.map((logo, index) => (
          <LogoBox key={index} href={logo.href} src={logo.src} alt={logo.alt} height={logo.height} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioScroll;
