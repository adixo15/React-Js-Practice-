import { useState } from 'react'
import useLocalStorage from './useLocalStorage'
import './App.css'

function App() {
  const[name,setName]=useLocalStorage("username","")

  return (
    <>
      <div className='p-6 text-center'>
        <h1 className="text-2xl font-bold mb-4">💾 useLocalStorage Hook</h1>
         <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border p-2 rounded"
      />

         <p className="mt-4 text-lg">Saved Name: {name}</p>

      </div>
    </>
  )
}

export default App
