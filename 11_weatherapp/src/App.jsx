import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weather, setWeather] = useState("")
  const[main,setMain]=useState("")
  const[wind,setWind]=useState("")
  const[loading,setLoading]=useState(true)
 const fetchWeather=async()=>{
  try{
    const response=await fetch("https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=c2fe0fbdd3464e388e6cf19e2a7eb2e7")
    const data=await response.json()
    setWeather(data.weather[0].description)
    const kelvin=data.main.temp
    const celcius=kelvin - 273.15;
    setMain(celcius.toFixed(2))
    setWind(data.wind.speed)
  }
  catch(error){
   console.log("error",{error})
   setWeather("Opps!something went wrong")
   setMain("")
   setWind("")
  }
  setLoading(false)
 }
 useEffect(() => {
    fetchWeather()
  }, [])


  return (
    <>
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-sky-700 text-white font-sans">
    <h1 className="text-4xl font-bold mb-6 tracking-wide text-center">
      Weather App
    </h1>
    <p className="text-lg text-gray-200 mb-10">
      The weather of the city <span className="font-semibold text-sky-300">Kolkata</span>
    </p>

    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-80 text-center border border-white/20 transition-all hover:scale-105 duration-300">
      <h3 className="text-2xl font-semibold mb-4 text-sky-200">Kolkata</h3>

      {loading ? (
        <p className="text-gray-300 animate-pulse">Loading...</p>
      ) : (
        <>
          <h2 className="text-5xl font-bold mb-2 text-sky-300">{main}</h2>
          <p className="text-xl capitalize mb-3 text-gray-200">{weather}</p>
          <p className="text-sm text-gray-400">💨 Wind: {wind} km/h</p>
        </>
      )}
    </div>

    <footer className="mt-10 text-gray-400 text-sm">
      © 2025 Weatherly — Powered by OpenWeather
    </footer>
</div>
  </>
)

}

export default App
