import {Header} from "./components/Header";
import {InputTodo} from "./components/InputTodo";
import {useState} from "react";
import {TaskTodo} from "./components/TaskTodo";

function App() {
  const [todo, setToDo] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    const taskTode = {
      id : Math.random(),
      value : todo,
      status : false
    };
    let newTask = [taskTode, ...tasks];
    setTasks(newTask);
    setToDo("");
  };

  const deleteTask = (id) => {
    let del = tasks.filter(e => e.id !== id);
    setTasks(del);
  }

  const toggleTask = (id) => {
    let toggle = tasks.map(e => e.id === id ? {...e, status : !e.status} : e);
    setTasks(toggle);
  }

  const taskTodoList = tasks.map(e => <TaskTodo id={e.id} value={e.value} status={e.status} deleteTask={deleteTask} toggleTask={toggleTask}/>)
  return (
    <div className="App">
      <Header/>
      <InputTodo addTask={addTask} todo={todo} setToDo={setToDo}/>
      {taskTodoList}
    </div>
  );
}

export default App;
