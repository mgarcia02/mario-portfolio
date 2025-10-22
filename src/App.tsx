import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Hola mundo</h1>
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
  )
}

export default App
