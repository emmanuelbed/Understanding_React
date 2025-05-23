import { useState } from "react";
function Counter() {
  const [user, setUser] = useState({ name: "Emmanuel", age: 28 });

  return (
    <div>
      <h1>Counter: {user.age}</h1>
      <button
        onClick={() => {
          setUser((prevUser) => ({
            ...prevUser,
            age: prevUser.age + 1,
          }));
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setUser((prevUser) =>({
            ...prevUser,
            age: prevUser.age - 1,
          }));
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setUser((prevUser) => ({
            ...prevUser,
            age: 0,
          }));
        }}
      >
        Reset
      </button>
    </div>
  );
}
export default Counter;
