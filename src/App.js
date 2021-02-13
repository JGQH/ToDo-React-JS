import { useState } from 'react'
import Task from './Task'

function App() {
  const [taskName, setTaskName] = useState("");
  const [taskPrevs, setTaskPrevs] = useState(new Array());
  const [tasks, setTasks] = useState(new Array());

  function createTask(){
    const newTask = {
      name: taskName,
      prevs: taskPrevs
    };

    setTasks([...tasks, newTask])
    setTaskPrevs(new Array());
    setTaskName("")
  }

  function createPrev(){
    let newPrev = parseInt(prompt("Enter the number of the task", "1"));
    setTaskPrevs([...taskPrevs, newPrev])
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
          return <Task key={index} name={task.name} index={index} prevs={task.prevs} onClick={deleteTask}/>
        })}
      </div>
      <div id="editor">
        <textarea placeholder="Insert name of a task here..." onChange={evt => setTaskName(evt.target.value)} value={taskName}></textarea>
        <div>
          <button onClick={createTask} disabled={taskName.trim().length == 0}>Create Task</button>
          <button onClick={createPrev}>Add Previous Tasks</button>
        </div>
      </div>
    </>
  );
}

export default App;