import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const navLinks = [
    { href: "#home", lable: "Home" },
    { href: "#about", lable: "About" },
    { href: "#services", lable: "Our Services" },
    { href: "#testimonials", lable: "Testimonials" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm ">
      <div className="w-full container mx-auto flex items-center  justify-between  px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-2 h-15 bg-purple-900 mt-3 rounded-full opacity-100 hover:opacity-75 transition-opacity transform -rotate-35"></div>
          <div className="w-7 h-2 bg-purple-900 -ml-3 mt-1 rounded-full opacity-100 hover:opacity-75 transition-opacity transform -rotate-30 "></div>
          <div className="w-7 h-2 bg-purple-900 -ml-11 -mt-11 rounded-full opacity-100 hover:opacity-75 transition-opacity transform -rotate-29"></div>
          <div className="w-7 h-2 bg-amber-600 -ml-4 -mt-8 rounded-full opacity-100 hover:opacity-75 transition-opacity transform -rotate-30 "></div>
          <div className="w-7 h-2 bg-amber-600 -ml-5 mt-3 rounded-full opacity-100 hover:opacity-75 transition-opacity transform -rotate-30 "></div>
          <div className="w-2 h-8 bg-amber-600 -ml-4 -mt-6 rounded-full opacity-100 hover:opacity-75 transition-opacity transform -rotate-35 "></div>
        </div>
        <button
          onClick={() => setIsmenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute 
                after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full 
                after:bg-purple-900 after:transition-all ${
                  activeLink === link.href
                    ? "text-purple-900 after:w-full"
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {link.lable}
            </a>
          ))}
        </div>
        <button className="hidden md:block bg-amber-600 text-white px-6 py-2.5 rounded-lg hover:bg-amber-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-amber-100">
          <a href="#newsletter">Get in touch</a>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                onClick={() => {
                  setActiveLink(link.href), setIsmenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 ${
                  activeLink === link.href
                    ? "text-purple-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                key={index}
                href={link.href}
              >
                {link.lable}
              </a>
            ))}
            <button className="w-full bg-amber-600 text-white px-6 py-2.5 rounded-lg hover:bg-amber-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-amber-100">
              <a href="#newsletter">Get in touch</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
