import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Project", completed: true },
    { id: 3, text: "Read a Book", completed: false },
  ])

  const [newTodo, setNewTodo] = useState("")

  const handleAdd = () => {
    if (!newTodo.trim()) return
    const newItem = {
      id: Date.now(),
      text: newTodo,
      completed: false
    }
    setTodos([newItem, ...todos])
    setNewTodo("")
  }

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center py-10 px-4">
      
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-8 drop-shadow-md tracking-wide">
        ✅ Todo - Your Task Manager
      </h1>

      {/* Input Section */}
      <div className="flex items-center gap-3 w-full max-w-md mb-8">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new Todo..."
          className="flex-1 p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        <button
          onClick={handleAdd}
          className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl font-semibold shadow-md transition-transform hover:scale-105"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="w-full max-w-md space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center bg-gray-800/70 backdrop-blur-sm border border-gray-700 p-4 rounded-2xl shadow-md transition hover:shadow-cyan-500/20 ${
              todo.completed ? "opacity-70 line-through text-gray-400" : ""
            }`}
          >
            <span className="text-lg font-medium">{todo.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleToggle(todo.id)}
                className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-lg font-medium transition"
              >
                {todo.completed ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
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
