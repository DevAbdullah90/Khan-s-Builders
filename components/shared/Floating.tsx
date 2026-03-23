"use client";

import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp, FaFileDownload } from "react-icons/fa";

const Floating = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      <div
        className={`fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col gap-3 transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923000000000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="
            flex items-center justify-center text-white bg-gold rounded-l-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 transition-all duration-300
            w-12 h-12 text-xl
            md:w-14 md:h-14 md:text-2xl
            border-y border-l border-white/20
          "
        >
          <FaWhatsapp className="drop-shadow-md" />
        </a>

        {/* Phone Call Button */}
        <a
          href="tel:03000000000"
          aria-label="Call us"
          title="Call us"
          className="
            flex items-center justify-center text-white bg-black rounded-l-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 transition-all duration-300
            w-12 h-12 text-lg
            md:w-14 md:h-14 md:text-xl
            border-y border-l border-gold/40
          "
        >
          <FaPhoneAlt className="text-gold drop-shadow-md" />
        </a>

        {/* Company Profile Download Button */}
        <a
          href="/assets/Khans-Builders-Profile.pdf"
          download="Khans-Builders-Profile.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Company Profile"
          title="Download Company Profile"
          className="
            flex items-center justify-center text-white bg-gold rounded-l-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 transition-all duration-300
            w-12 h-12 text-xl
            md:w-14 md:h-14 md:text-2xl
            border-y border-l border-white/20
          "
        >
          <FaFileDownload className="drop-shadow-md" />
        </a>
      </div>
    </div>
  );
};

export default Floating;
