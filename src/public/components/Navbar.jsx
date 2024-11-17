import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-20 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">RAIFOX</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-300">
            Home
          </a>
          <a href="#about" className="hover:text-blue-300">
            About
          </a>
          <a href="#services" className="hover:text-blue-300">
            Services
          </a>
          <a href="#products" className="hover:text-blue-300">
            Products
          </a>
          <a href="#contact" className="hover:text-blue-300">
            Contact
          </a>
        </div>

        {/* Get Started Button */}
        <a
          href="#get-started"
          className="hidden md:block px-6 py-2 border border-blue-300 rounded-full text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition"
        >
          Get Started
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button className="text-xl">
            <i className="fas fa-bars"></i> {/* Replace with icon */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
