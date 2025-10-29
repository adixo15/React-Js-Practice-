import React from "react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme } = useTheme();

  return (
    <nav
      className={`flex items-center justify-between px-6 py-4 shadow-lg transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white border-b border-gray-700"
          : "bg-white text-gray-800 border-b border-gray-200"
      }`}
    >
      <h1 className="text-2xl font-bold tracking-wide">
        🌗 Theme Switcher
      </h1>

      <div
        className={`px-4 py-2 text-sm rounded-full font-semibold ${
          theme === "dark"
            ? "bg-indigo-600 text-white"
            : "bg-indigo-100 text-indigo-700"
        }`}
      >
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </div>
    </nav>
  );
}

export default Navbar;
