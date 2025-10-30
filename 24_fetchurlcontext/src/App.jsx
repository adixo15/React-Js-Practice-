import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
 
  if(loading) return <p className="text-center mt-10">Loading...</p>;
  if(error)return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
       <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">🌐 useFetch Hook</h1>
      {data.map((user) => (
        <div key={user.id} className="border p-3 mb-2 rounded">
          <h2 className="font-semibold">{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
