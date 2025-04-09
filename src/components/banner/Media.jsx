import React from 'react';
import { FaWhatsapp, FaGithub } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col justify-between gap-6 xl:flex-row lgl:gap-0">
        <div>
          <h2 className="mb-4 text-base uppercase font-titleFont">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://wa.me/919344812187" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/ZAMEER622" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaGithub />
            </a>
          </div>
        </div>
    </div>
  )
}

export default Media;