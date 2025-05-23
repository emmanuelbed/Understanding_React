function Todo({task, description}){
    console.log(task);
    
    return(
        <div className="todo-item">
            <h2>{task}</h2>
            <p>{description}</p>
            <button onClick={() =>{
                console.log("Button Clicked");
                
            }}>Delete</button>
        </div>
    )
}
export default Todo;