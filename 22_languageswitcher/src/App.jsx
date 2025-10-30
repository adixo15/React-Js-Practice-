import { useState } from "react";
import "./App.css";
import { LangProvider, useLang } from "./context/LangContext";
import Navbar from "./components/Navbar";
import LangButton from "./components/LanguageButton";

function AppContent() {
  const { lang } = useLang();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center 
                 bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 
                 dark:from-gray-900 dark:via-gray-800 dark:to-black 
                 text-center transition-all duration-500 px-4"
    >
      <Navbar />
      <div className="mt-16 max-w-2xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800 dark:text-white">
          {lang === "en" ? "Hello, Welcome!" : "नमस्ते, स्वागत है!"}
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {lang === "en"
            ? "This page supports both English and Hindi."
            : "यह पेज अंग्रेज़ी और हिंदी दोनों का समर्थन करता है।"}
        </p>

        <div className="pt-6">
          <LangButton />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  );
}

export default App;
