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
    <Todo 
    task = "Learn React" 
    description = "Code along and take notes"
    />

    <Todo 
    task = "Finish ASAP"
    description = "6 hours every day"
    />

    <Todo 
    task = "Land a job"
    description = "3 hours every day"
    />
    <Todo 
    task = "Earn 100k"
    description = "1 hours every day"
    />
    <Todo 
    task = "Land a job"
    description = "4 hours every day"
    />
    <Popup  title= "Are you Okay?" /> 
    </>
  )
}

export default App
