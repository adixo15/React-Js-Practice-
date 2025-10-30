import React from "react";
import { useLang } from "../context/LangContext";

function Navbar() {
  const { lang } = useLang();

  return (
    <nav
      className="fixed top-0 left-0 w-full flex items-center justify-between
                 px-8 py-4 backdrop-blur-lg bg-white/60 dark:bg-gray-900/60
                 border-b border-gray-200 dark:border-gray-700
                 shadow-sm transition-all duration-500 z-50"
    >
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">
        🌍 Language Switcher
      </h1>

      <p className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-300">
        {lang === "en" ? "English Mode" : "हिंदी मोड"}
      </p>
    </nav>
  );
}

export default Navbar;
