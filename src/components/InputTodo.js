export const InputTodo = (props) => {
    return(
        <div className="inputTodo">
            <input className="inputTodo-input" value={props.todo} onChange={(e) => props.setToDo(e.target.value)}/>
            <button onClick={() => props.addTask()}>Add</button>
        </div>
    )
}