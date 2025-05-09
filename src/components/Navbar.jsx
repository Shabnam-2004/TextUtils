import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggler from "./DarkModeToggler";

export default function Navbar({ title, home = "Home", about }) {
  return (
    <nav className="bg-slate-800 dark:bg-[#0e101c] text-white">
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
        <Link
          to="/"
          className="hover:text-blue-400 transition duration-300 text-xl font-extrabold text-slate-800 uppercase bg-amber-50 rounded-[0.5rem] p-0.5 px-2"
        >
          {title}
        </Link>
        <ul className="flex space-x-8 text-xl items-center">
          <li>
            <Link
              to="/"
              className="hover:text-blue-400 transition duration-300"
            >
              {home}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-400 transition duration-300"
            >
              {about}
            </Link>
          </li>
          <li>
            <DarkModeToggler />
          </li>
        </ul>
      </div>
    </nav>
  );
}
