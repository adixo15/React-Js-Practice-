import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState("")
  const [password,setPassword]=useState("")
  const[showPassword,setShowPassword]=useState(false)
const handleSubmit=(e)=>{
  e.preventDefault()
  setUsername("")
  setPassword("")
  setShowPassword(prev => !prev)
}

return (
    <>
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900">
    <div className="bg-violet-950 bg-opacity-60 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96 border border-violet-700">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Login Form
      </h1>
      
      <div className="flex flex-col gap-4">
        {/* Username Input */}
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 rounded-lg bg-violet-900 text-white placeholder-gray-400 border border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
        />

        {/* Password Input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-violet-900 text-white placeholder-gray-400 border border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
          />
          <button
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-3 text-sm text-violet-300 hover:text-white transition"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-4 bg-violet-700 hover:bg-violet-600 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-lg"
        >
          Submit
        </button>
      </div>

      {/* Optional Footer */}
      <p className="text-center text-sm text-gray-400 mt-6">
        Don’t have an account?{" "}
        <a href="#" className="text-violet-400 hover:text-violet-300 font-medium">
          Sign up
        </a>
      </p>
    </div>
  </div>
</>

    
  )
}

export default App
