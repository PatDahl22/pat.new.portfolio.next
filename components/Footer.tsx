import React, { useState, useEffect } from "react";
import { socialMedia } from "@/data";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full py-10">
      <div className="flex mt-8 flex-row justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          © {currentYear} Pat Dahl Copyright
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank" // Open in a new tab/window
              rel="noopener noreferrer" // Security best practice for external links
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
