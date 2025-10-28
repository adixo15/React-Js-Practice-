import { useReducer } from 'react'
import './App.css'
function countReducer(state, action){
   switch(action.type){
    case "INCREMENT":
      return state+1
    case "DECREMENT":
      return state-1
    case "RESET":
      return 0
    default:
      return state
   }
}
function App() {
  const [count, dispatch] = useReducer(countReducer,0)
  const increase=()=>dispatch({type:"INCREMENT"})
  const decrease=()=>dispatch({type:"DECREMENT"})
  const reset=()=>dispatch({type:"RESET"})

  return (
    <>
     <div>
      <h1>🧮 useReducer Counter</h1>
     <h2>{count}</h2>
      <button onClick={increase}> ➕ Increment</button>
      <br></br>
      <button onClick={decrease}>➖ Decrement</button>
      <div>
        <button onClick={reset}>🔁 Reset</button>
      </div>
     </div>

    </>
  )
}

export default App
