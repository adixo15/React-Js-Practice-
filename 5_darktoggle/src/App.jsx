import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')
  const [text,setText]=useState('Dark Mode')

  function darkMode(){
    if(color=="white"){
      setColor('black')
      setText("Light Mode")
    }
    else{
      setColor('white')
      setText("Dark Mode")
    }
  }

  return (
    <>
     <div
  style={{ backgroundColor: color }}
  className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500 text-white px-6"
>
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center shadow-2xl w-full max-w-md">
    <h1 className="text-4xl font-bold mb-6 text-purple-300">Dark Theme</h1>
    <button
      onClick={darkMode}
      className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 shadow-md hover:shadow-purple-400/40 font-medium text-white transition-all duration-200"
    >
      {text}
    </button>
  </div>
</div>
    </>
  )
}

export default App
