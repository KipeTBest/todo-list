export const TaskTodo = (props) => {
    return(
        <div className="task-todo" key={props.id}>
            <input className="task-todo-input" type="checkbox" onClick={() => props.toggleTask(props.id)} defaultChecked={props.status}/>
            <p className="task-todo-text" style={props.status ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{props.value}</p>
            <button onClick={() => props.deleteTask(props.id)}>Delete</button>
        </div>
    )
}