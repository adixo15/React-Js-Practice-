import MovieCard from './components/MovieCard'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 py-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-red-500 mb-10">🎬 Movie Card</h1>

      {/* Movie Card */}
      <MovieCard
        title="Inception"
        rate={8.8}        
        year={2008}
        image="https://imgs.search.brave.com/uNkeKYYv4J3veW2jxRspGRYpweMIy04ucVcCPn5ST9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTEteXNELTNMOEwu/anBn"
      />
    </div>
  )
}

export default App
