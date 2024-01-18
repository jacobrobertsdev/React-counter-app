import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Count:{count}</h1>
      <button onClick={() => { setCount(count - 1) }}>➖</button>
      <button onClick={() => { setCount(count + 1) }}>➕</button>
      
 </main>
  )
}

export default App
