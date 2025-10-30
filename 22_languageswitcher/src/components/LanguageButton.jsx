import React from "react";
import { useLang } from "../context/LangContext";

function LangButton() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      onClick={toggleLang}
      className="px-6 py-2.5 mt-4 rounded-full font-semibold text-lg 
                 shadow-md transition-all duration-300 transform hover:scale-105
                 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                 text-white hover:opacity-90 focus:ring-indigo-300
                 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600"
    >
      {lang === "en" ? "🇮🇳 Switch to Hindi" : "🇬🇧 अंग्रेज़ी में बदलें"}
    </button>
  );
}

export default LangButton;
