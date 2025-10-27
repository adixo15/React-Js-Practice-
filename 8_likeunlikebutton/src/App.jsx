import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [like,setLike]=useState(false)
  const [text,setText]=useState(true)
  const handlelike=()=>{
    setLike(!like)
    setText(!text)
  }
  

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-3xl shadow-xl w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">
          Like And Unlike Content
        </h1>

        <p className="text-gray-300 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          cupiditate modi nam ut aliquam iure tempora optio nemo animi sit
          accusamus consequatur rem non et a culpa similique, iste velit sunt
          odio assumenda dolorum vitae vel. Facilis suscipit ad sapiente minus
          deserunt repellendus debitis commodi.
        </p>

        <button
          onClick={handlelike}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
            like
              ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          <span
            className={`text-2xl transition-transform duration-300 ${
              like ? "scale-110 drop-shadow-[0_0_8px_#f87171]" : "scale-100"
            }`}
          >
            {like ? "❤️" : "🤍"}
          </span>
          <span className="text-sm tracking-wide">
            {text ? "Like" : "Unlike"}
          </span>
        </button>
      </div>
    </div>
    </>
  )
}

export default App
