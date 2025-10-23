import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8 md:px-16 bg-bgcream">
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-green-200 shadow-sm"></div>
        <h3 className="font-semibold text-darkbrown">Rachida Ouarhache</h3>
      </div>

      <ul className="hidden md:flex gap-8 font-semibold text-darkbrown">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resume">CV</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/projects">Projets</Link></li>

      </ul>

      {/* mobile simple menu icon */}
      <div className="md:hidden">
        <button aria-label="menu" className="text-darkbrown font-bold">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
