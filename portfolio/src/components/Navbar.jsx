import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8 md:px-16 bg-bgcream shadow-sm">
      {/* Logo + Nom */}
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-red-500 shadow-sm"></div>
        <h3 className="font-semibold text-darkbrown text-lg tracking-wide">
          Rachida Ouarhache
        </h3>
      </div>

      {/* Liens de navigation */}
      <ul className="hidden md:flex items-center gap-8 font-semibold text-darkbrown">
        <li>
          <Link to="/" className="hover:text-gray-700 transition">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-700 transition">
            À propos
          </Link>
        </li>
        <li>
          <Link to="/resume" className="hover:text-gray-700 transition">
            CV
          </Link>
        </li>

        {/* Bouton Contact */}
        <li>
          <Link
            to="/contact"
            className="bg-darkbrown text-white px-5 py-2 rounded-full shadow-md hover:bg-opacity-90 transition"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Menu mobile */}
      <div className="md:hidden">
        <button aria-label="menu" className="text-darkbrown text-2xl font-bold">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
