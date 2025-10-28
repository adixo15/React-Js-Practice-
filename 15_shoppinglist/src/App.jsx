import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Milk", completed: false },
    { id: 2, text: "Coconut", completed: true },
    { id: 3, text: "Shirt", completed: true },
  ])

  const [newItem, setNewItem] = useState("")

  const handlePurchase = () => {
    if (!newItem.trim()) return
    const newitems = {
      id: Date.now(),
      text: newItem,
      completed: false
    }
    setItems([newitems, ...items])
    setNewItem("")
  }

  const handleToggle = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 flex flex-col items-center py-10 px-5 text-white">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-violet-300 mb-8 tracking-wide drop-shadow-md">
        🛒 Shopping List Manager
      </h1>

      {/* Input Section */}
      <div className="flex items-center gap-3 w-full max-w-md mb-10">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item..."
          className="flex-1 p-3 rounded-xl bg-violet-950/40 border border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 placeholder-violet-200 text-white shadow-sm"
        />
        <button
          onClick={handlePurchase}
          className="px-5 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 font-semibold shadow-md transition-transform hover:scale-105"
        >
          Add
        </button>
      </div>

      {/* Items List */}
      <ul className="w-full max-w-md space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className={`flex justify-between items-center p-4 rounded-2xl border border-violet-700 bg-violet-950/50 backdrop-blur-sm shadow-md transition hover:shadow-violet-500/30 ${
              item.completed ? "opacity-70 line-through text-violet-300" : ""
            }`}
          >
            <span className="text-lg font-medium">{item.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleToggle(item.id)}
                className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-lg font-medium transition"
              >
                {item.completed ? "Undo" : "Bought"}
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg font-medium transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
