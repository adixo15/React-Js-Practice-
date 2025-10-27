import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setcount] = useState(0)
  function increase(){
    if(count<20){
      setcount(count+1)
    }
  }

  function decrease(){
    if(count>0){
      setcount(count-1)
    }
  }

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <br></br>
        <button onClick={decrease}>-</button>
      </div>
    </>
  )
}

export default App
