import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>My Todos</h1>
    <div>
      <h2>Finish React Course</h2>
      <button>Delete</button>
    </div>
    <div>
      <h2>Finish ALX Course</h2>
      <button>Delete</button>
    </div>
    <div>
      <h2>Earn From Freelancing </h2>
      <button>Delete</button>
    </div>
    <div>
      <h2>Enjoy Financial Freedom React Course</h2>
      <button>Delete</button>
    </div>
    </>
  )
}

export default App
