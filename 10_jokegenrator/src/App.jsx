import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [joke, setJoke] = useState("")
  const [punch,setPunch]=useState("")
  const [loading,setLoading]=useState(true)
  
  const fetchjoke=async()=>{
    try{
      const response=await fetch("https://official-joke-api.appspot.com/random_joke")
      const data= await response.json()
      setJoke(data.setup)
      setPunch(data.punchline)
    }
    catch(error){
      console.log("Errro Found",{error})
      setJoke("Oops! Somehing went wrong")
      setPunch("")
    }
    setLoading(false)
  }

  useEffect(()=>{ 
    fetchjoke() 
  },[])
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-700 px-6">
      <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl w-full max-w-md p-8 text-center transition-all duration-300">
        <h1 className="text-3xl font-bold mb-4 text-purple-600">
          Random Joke Generator 🤭
        </h1>

        <div className="text-lg mb-6 min-h-[100px]">
          {loading ? (
            <p className="text-gray-400 animate-pulse">Loading...</p>
          ) : (
            <>
              <p className="mb-3 text-gray-800 font-medium">{joke}</p>
              <p className="text-pink-600 italic">{punch}</p>
            </>
          )}
        </div>

        <button
          onClick={fetchjoke}
          disabled={loading}
          className="mt-3 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-60"
        >
          {loading ? "Fetching..." : "Generate New Joke 😂"}
        </button>
      </div>
    
      </div>
  )
}


export default App
