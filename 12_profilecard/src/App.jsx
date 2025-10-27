import ProfileCard from './components/ProfileCard'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center py-10 px-4">
        
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 tracking-wide drop-shadow-sm">
          👤 Profile Cards
        </h1>

        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          
          <ProfileCard
            name="Aditya Shukla"
            age={18}
            profession="Student, CSE"
            image="https://i.pravatar.cc/150?img=3"
          />

          <ProfileCard
            name="Diksha Rajput"
            age={17}
            profession="Student, BDS"
            image="https://i.pravatar.cc/150?img=5"
          />

          <ProfileCard
            name="Rohan Bhattacharya"
            age={32}
            profession="Founder, ElsePlay"
            image="https://i.pravatar.cc/150?img=7"
          />
        </div>
      </div>
    </>
  )
}

export default App
