import React from "react"; 
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import ThemeButton from "./components/ThemeButton";
import './App.css'

function App() {
  
  return (
    <ThemeProvider>
        <div
          className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 
          bg-gradient-to-br from-gray-100 via-white to-gray-200 
          dark:from-gray-900 dark:via-gray-950 dark:to-black`}
        >
          <Navbar />
          <div className="mt-20 text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white">
              Welcome to the Theme Switcher App 🌗
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Toggle between <span className="font-semibold">Light</span> and <span className="font-semibold">Dark</span> modes easily.
            </p>
            <ThemeButton />
          </div>
        </div>
      </ThemeProvider>
  )
}

export default App
