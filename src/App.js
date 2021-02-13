import { useState } from 'react'
import Task from './Task'

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState(new Array());

  function createTask(){
    const newTask = {
      name: taskName
    };

    setTasks([...tasks, newTask])
    setTaskName("")
  }

  function deleteTask(index){
    let tasks_ = [...tasks];
    tasks_.splice(index, 1);
    setTasks(tasks_);
  }

  return (
    <>
      <div id="tasks">
        {tasks.map((task, index) => {
          return <Task key={index} name={task.name} index={index} onClick={deleteTask}/>
        })}
      </div>
      <div id="editor">
        <textarea placeholder="Insert name of a task here..." onChange={evt => setTaskName(evt.target.value)} value={taskName}></textarea>
        <div>
          <button onClick={createTask} disabled={taskName.trim().length == 0}>Create Task</button>
          <button>Add Previous Tasks</button>
        </div>
      </div>
    </>
  );
}

export default App;