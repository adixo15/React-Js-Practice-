import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [quote, setQuote] = useState("")
  const [author,setAuthor]=useState("")
  const[loading,setLoading]=useState(true)
 const fetchquote=async()=>{
  setLoading(true)
  try{
    const response=await fetch("https://api.quotable.io/random")
    const data=await response.json()
    setQuote(data.content)
    setAuthor(data.author)
  }
  catch(error){
    console.error("Error",error)
    setQuote("Oops! Something went Wrong")
    setAuthor("")
  }
  setLoading(false)
 }
 useEffect(()=>{ fetchquote() },[])
  return (
    <>
      <div>
        <h1>Random Quote Genrator</h1>
        <div>
          {
            loading?(
            <p>Loading...</p>)
            :
            (
              <div>
                <p>{quote}</p>
                <p>{author}</p>
              </div>

            )
            
          }
          <button onClick={fetchquote}>Generate Quote</button>
        </div>
      </div>
    </>
  )
}

export default App
