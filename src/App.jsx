import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import TestComponent from './components/TestComponent'
import Popup from './components/Popup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <TestComponent />
    <Todo task = "Learn React"/>
    <Todo task = "Finish ASAP"/>
    <Todo task = "Land a job"/>
    <Todo task = "Earn 100k"/>
    <Todo />
    {/* <Popup />  */}
    </>
  )
}

export default App
