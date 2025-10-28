import { useState } from 'react'
import './App.css'

function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Have a good day", completed: false },
  ])

  const [newnote, setnewNote] = useState("")

  const handleadd = () => {
    if (!newnote.trim()) return
    const newitems = {
      id: Date.now(),
      text: newnote,
      completed: false,
    }
    setNotes([newitems, ...notes])
    setnewNote("")
  }

  const handleToggle = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    )
  }

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-pink-100 to-purple-200 flex flex-col items-center py-10 px-4 text-gray-800">
      
      {/* Header */}
      <h1 className="text-4xl font-extrabold mb-8 text-purple-600 drop-shadow-md">
        📝 Notes Keeper
      </h1>

      {/* Input Section */}
      <div className="flex items-center gap-3 w-full max-w-md mb-10">
        <input
          type="text"
          value={newnote}
          onChange={(e) => setnewNote(e.target.value)}
          placeholder="Add a new note..."
          className="flex-1 p-3 rounded-xl bg-white/70 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-500 shadow-sm"
        />
        <button
          onClick={handleadd}
          className="px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow-md transition-transform hover:scale-105"
        >
          Add
        </button>
      </div>

      {/* Notes List */}
      <ul className="w-full max-w-md space-y-4">
        {notes.map((note) => (
          <li
            key={note.id}
            className={`flex justify-between items-center p-4 rounded-2xl bg-white/80 border border-purple-300 shadow-md backdrop-blur-sm transition hover:shadow-purple-400/30 ${
              note.completed ? "opacity-70 line-through text-gray-500" : ""
            }`}
          >
            <span className="text-lg font-medium">{note.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleToggle(note.id)}
                className="bg-green-400 hover:bg-green-500 px-3 py-1 rounded-lg text-white font-medium transition"
              >
                {note.completed ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => handleDelete(note.id)}
                className="bg-red-400 hover:bg-red-500 px-3 py-1 rounded-lg text-white font-medium transition"
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
