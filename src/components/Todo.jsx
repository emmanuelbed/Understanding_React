function Todo({ task, handleClick }) {
  function deleteHandler() {
    console.log("Delete", task);
  }

  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
export default Todo;
