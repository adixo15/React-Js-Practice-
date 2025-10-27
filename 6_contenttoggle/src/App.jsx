import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [show, setShow] = useState(true)
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white px-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-2 text-purple-300">Content Hidder</h1>
        <p className="text-gray-300 mb-6">
          Click the button to hide or show your content
        </p>

        <div
          className={`transition-all duration-500 ${
            show ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <p className="text-gray-200 leading-relaxed mb-4">
            Aditya is a good boy. He loves coding. I am truly amazed to be Aditya —
            I love challenges and pressure work. Follow me for more content!
          </p>
        </div>

        <button
          onClick={() => setShow(!show)}
          className={`px-6 py-3 rounded-xl font-medium shadow-md transition-all duration-300 ${
            show
              ? "bg-red-600 hover:bg-red-700 hover:shadow-red-400/40"
              : "bg-green-600 hover:bg-green-700 hover:shadow-green-400/40"
          }`}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
    </>
  )
}

export default App
