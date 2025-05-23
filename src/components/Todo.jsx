function Todo({task, description}){
    function handleClick(){
        console.log("Button Clicked")
        
    }
    
    return(
        <div className="todo-item">
            <h2>{task}</h2>
            <p>{description}</p>
            <button onClick={() =>{
                handleClick()
            }}>Delete</button>
        </div>
    )
}
export default Todo;