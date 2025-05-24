import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";
import TestComponent from "./components/TestComponent";
import Popup from "./components/Popup";
import Counter from "./components/Counter";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  function handleClick() {
    setPopupOpen(true);
    console.log("Parent Notified");
  }

  function cancelPopup() {
    setPopupOpen(false);
  }

  useEffect(() =>{
    console.log("Component Mounted");
    
  }, [])

  return (
    <>
      <TestComponent />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setPopupOpen(true);
          }}
        >
          Add to do
        </button>
      </div>

      <Todo task="Learn React" handleClick={handleClick} />

      <Todo task="Finish ASAP" handleClick={handleClick} />

      <Todo task="Land a job" handleClick={handleClick} />
      <Todo task="Earn 100k" handleClick={handleClick} />
      <Todo task="Land a job" handleClick={handleClick} />
      {popupOpen ? (
        <Popup cancelPopup={cancelPopup} title="Are you Okay?" />
      ) : null}
    </>
  );
}

export default App;
