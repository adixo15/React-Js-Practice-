import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const questions=[
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language", "IDE"],
    correct: "Library",
  },
  {
    question: "Who developed React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    correct: "Facebook",
  },
  {
    question: "What hook is used for state?",
    options: ["useEffect", "useState", "useReducer", "useRef"],
    correct: "useState",
  },
];
const intitalstate={
  current:0,
  score:0,
  answered:false
}
function quizReducer(state,action){
 switch(action.type){
  case "ANSWER_QUESTION":
    return{
      ...state,
      score: state.score + (action.payload ? 1 : 0),
      answered:true
    }
  case "NEXT_QUESTION":
    return{
     ...state,
     current:state.current+1,
     answered:false
    }
  case "RESET_QUIZ":
    return{
      ...intitalstate
    }
 }
}
function App() {
  const [state, dispatch] = useReducer(quizReducer,intitalstate)
  const currentQuestion=questions[state.current]
  const handleAnswer=(option)=>{
    const isCorrect=option==currentQuestion.correct
    dispatch({type:"ANSWER_QUESTION",payload:isCorrect})
  }
 const handleNext=()=>{
  if(state.current+1<questions.length){
    dispatch({type:"NEXT_QUESTION"})
  }
  else{
     alert(`Quiz Finished! 🏁 Your score: ${state.score}/${questions.length}`);
      dispatch({ type: "RESET_QUIZ" });
  }
 }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex flex-col items-center justify-center px-4 text-white">
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl w-full max-w-lg border border-white/20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center mb-6 text-indigo-400">
        🧠 Quiz Master
      </h1>

      {/* Question Info */}
      <h3 className="text-lg text-gray-300 text-center mb-2">
        Question <span className="text-indigo-400 font-semibold">{state.current + 1}</span> of{" "}
        <span className="text-indigo-400 font-semibold">{questions.length}</span>
      </h3>

      {/* Question */}
      <p className="text-xl font-medium text-center mb-6">
        {currentQuestion.question}
      </p>

      {/* Options */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={state.answered}
            className={`px-5 py-3 rounded-xl text-lg font-semibold transition-all duration-300 ${
              state.answered
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 active:scale-95"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Next Button */}
      {state.answered && (
        <div className="text-center mb-4">
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl text-white font-semibold transition-all duration-300 active:scale-95"
          >
            Next ➡️
          </button>
        </div>
      )}

      {/* Score */}
      <h3 className="text-center text-lg text-gray-300">
        Score: <span className="text-yellow-400 font-bold">{state.score}</span>
      </h3>
    </div>

    {/* Footer */}
    <p className="mt-6 text-sm text-gray-400">
      Powered by <span className="text-indigo-400 font-semibold">QuizVerse</span>
    </p>
  </div>
</>
  )
}

export default App
