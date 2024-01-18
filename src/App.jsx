import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <h1>Count: {count}</h1>
      <div className='button-container'>
      <button onClick={() => { setCount(count - 1) }}>−</button>
      <button onClick={() => { setCount(count + 1) }}>+</button>
      </div>
     
      
 </div>
  )
}

export default App
