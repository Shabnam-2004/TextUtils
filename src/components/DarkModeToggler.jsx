import React from "react";
import { useDarkMode } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function DarkModeToggler() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className=" p-1.5 cursor-pointer  rounded-2xl text-shadow-md text-white  transition duration-500"
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="mr-2" />
    </button>
  );
}
