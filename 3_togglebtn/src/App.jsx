import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("Hello")
  function togglebtn(){
    if(text=="Hello"){
      setText("Bye! Have a Good Day")
    }
    else{
      setText("Hello")
    }
  }

  return (
    <>
      <h1>Toogle Button</h1>
      <p>Click on the button for TOGGLING</p>
      <br></br>
      <button onClick={togglebtn}>{text}</button>
    </>
  )
}

export default App
