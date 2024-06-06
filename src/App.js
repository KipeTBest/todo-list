import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";
import { useState } from "react";
import { TaskTodo } from "./components/TaskTodo";
const winston = require('winston');
require('winston-loki');

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Loki({
      host: 'http://loki:3100',
      json: true,
      labels: { job: 'todo-app' },
    }),
    new winston.transports.Console()
  ]
});

function App() {
  const [todo, setToDo] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    const taskTode = {
      id: Math.random(),
      value: todo,
      status: false
    };
    logger.info('New task added:', taskTode);
    let newTask = [taskTode, ...tasks];
    setTasks(newTask);
    setToDo("");
  };

  const deleteTask = (id) => {
    let del = tasks.filter(e => e.id !== id);
    logger.info('Task deleted:', id);
    setTasks(del);
  }

  const toggleTask = (id) => {
    let toggle = tasks.map(e => e.id === id ? { ...e, status: !e.status } : e);
    logger.info('Task toggled:', id);
    setTasks(toggle);
  }

  const taskTodoList = tasks.map(e => <TaskTodo id={e.id} value={e.value} status={e.status} deleteTask={deleteTask} toggleTask={toggleTask} />)
  return (
      <div className="App">
        <Header />
        <InputTodo addTask={addTask} todo={todo} setToDo={setToDo} />
        {taskTodoList}
      </div>
  );
}

export default App;