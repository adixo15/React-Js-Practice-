import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const toggleShow = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <>
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl shadow-lg w-full max-w-md p-8 text-center">
        <h1 className="text-3xl font-bold mb-6 text-purple-600">
          Password Visibility Toggle
        </h1>

        <div className="flex items-center bg-white rounded-2xl shadow-inner border border-purple-200 overflow-hidden focus-within:ring-2 focus-within:ring-purple-300">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 px-4 py-3 text-gray-700 bg-transparent focus:outline-none placeholder-gray-400"
          />
          <button
            onClick={toggleShow}
            className="px-4 py-3 text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors duration-200"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-4">
          Your password is kept private and secure.
        </p>
      </div>
    </div>
    </>
  )
}

export default App
