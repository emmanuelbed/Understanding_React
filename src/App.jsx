import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import TestComponent from './components/TestComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TestComponent />
    <Todo />
    <Todo />
    <Todo />
    </>
  )
}

export default App
