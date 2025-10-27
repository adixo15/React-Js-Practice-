import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("")

  return (
     <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white"
      style={{ backgroundColor: color }}>
        <h1 className="text-4xl font-bold mb-2">Color Changer</h1>
        <p className="text-lg text-gray-300">Press the color button to change the color</p>

        {/* Buttons at the bottom */}
        <div className="fixed bottom-6 left-0 right-0 flex flex-wrap justify-center gap-3 px-4">
          <button className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-red-400/40 transition-all duration-200" onClick={()=>setColor('red')}>
            Red
          </button>
          <button className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-blue-400/40 transition-all duration-200"onClick={()=>setColor('blue')}>
            Blue
          </button>
          <button className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-green-400/40 transition-all duration-200"onClick={()=>setColor('green')}>
            Green
          </button>
          <button className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-orange-400/40 transition-all duration-200"onClick={()=>setColor('orange')}>
            Orange
          </button>
          <button className="px-5 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 shadow-lg hover:shadow-yellow-300/40 text-black transition-all duration-200"onClick={()=>setColor('yellow')}>
            Yellow
          </button>
          <button className="px-5 py-2 rounded-xl bg-gray-500 hover:bg-gray-600 shadow-lg hover:shadow-gray-400/40 transition-all duration-200"onClick={()=>setColor('gray')}>
            Gray
          </button>
          <button className="px-5 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 shadow-lg hover:shadow-pink-400/40 transition-all duration-200"onClick={()=>setColor('pink')}>
            Pink
          </button>
          <button className="px-5 py-2 rounded-xl bg-violet-500 hover:bg-violet-600 shadow-lg hover:shadow-violet-400/40 transition-all duration-200"onClick={()=>setColor('violet')}>
            Violet
          </button>
          <button className="px-5 py-2 rounded-xl bg-black hover:bg-gray-800 shadow-lg hover:shadow-gray-700/40 transition-all duration-200"onClick={()=>setColor('black')}>
            Black
          </button>
        </div>
      </div>
    </>
  )
}

export default App
