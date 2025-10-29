import React from "react";
import { useTheme } from "../context/ThemeContext";

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`mt-6 px-6 py-2.5 font-semibold rounded-full shadow-md transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        theme === "light"
          ? "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-600"
          : "bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-300"
      }`}
    >
      {theme === "light" ? "🌙 Switch to Dark Mode" : "☀️ Switch to Light Mode"}
    </button>
  );
}

export default ThemeButton;
