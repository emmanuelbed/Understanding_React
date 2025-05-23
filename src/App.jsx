import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";
import TestComponent from "./components/TestComponent";
import Popup from "./components/Popup";
import Counter from "./components/Counter";


function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  

  return (
    <>
      <Counter number = {0} />
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

      <Todo task="Learn React" />

      <Todo task="Finish ASAP" />

      <Todo task="Land a job" />
      <Todo task="Earn 100k" />
      <Todo task="Land a job" />
      {popupOpen ? <Popup title="Are you Okay?" /> : null}
    </>
  );
}

export default App;
