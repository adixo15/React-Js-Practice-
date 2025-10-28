import { useReducer} from 'react'

import './App.css'

function cartReducer(state,action){
  switch(action.type){
    case "ADD_ITEM":
      return [...state,action.payload]
    case "REMOVE_ITEM":
      return state.filter((item)=>item.id!==action.payload)
    case "CLEAR_CART":
      return []
    default:
      return state
  }
}
function App() {
  const[cart,dispatch]=useReducer(cartReducer,[])
  const handleAdd=()=>{
    const newItem={
      id:Date.now(),
      name:`Product ${cart.length + 1}`,
    }
    dispatch({type:"ADD_ITEM",payload:newItem})
  }
const handleRemove=(id)=>{
  dispatch({type:"REMOVE_ITEM",payload:id})
}
const handleCart=()=>{
  dispatch({type:"CLEAR_CART"})
}
  return (
    <>
  <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center px-4">
    <div className="bg-[#1f1f1f] rounded-2xl shadow-2xl p-8 w-full max-w-md border border-orange-500/20">
      {/* Header */}
      <h1 className="text-3xl font-bold text-orange-500 text-center mb-6">
        🛍️ Shopping Cart
      </h1>

      {/* Buttons */}
      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={handleAdd}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md"
        >
          Add Item
        </button>
        <button
          onClick={handleCart}
          className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-lg font-semibold border border-gray-600 transition-all duration-300"
        >
          Clear Cart
        </button>
      </div>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          Your cart is empty 😔
        </p>
      ) : (
        <ul className="space-y-3">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-[#2a2a2a] p-4 rounded-lg hover:bg-[#333] transition duration-300"
            >
              <span className="font-medium text-white">{item.name}</span>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-orange-600 hover:bg-orange-500 px-3 py-1 text-sm rounded-md font-semibold"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>

   
  </div>
</>
  )
}

export default App
