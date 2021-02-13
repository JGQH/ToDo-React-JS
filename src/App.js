import { useState } from 'react'
import Task from './Task'

function App() {
  const [taskName, setTaskName] = useState("");
  const [taskPrevs, setTaskPrevs] = useState(new Array());
  const [tasks, setTasks] = useState(new Array());

  function createTask(){
    const newTask = {
      name: taskName,
      prevs: taskPrevs,
      available: !(taskPrevs.length > 0),
      checked: false,
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

  function setAvailable(){
    let tasks_ = [...tasks];
    tasks_.forEach(task_ => {
      const completedPrevs = task_.prevs.filter(prev => {
        return tasks_[prev - 1].checked;
      }).length;

      task_.available = (completedPrevs == task_.prevs.length);
    })
    setTasks(tasks_);
  }

  function checkTask(index, val){
    let tasks_ = [...tasks];
    let task_ = tasks_[index];
    task_.checked = val;
    setTasks(tasks_);
    setAvailable();
  }

  return (
    <>
      <div id="tasks">
        {tasks.map((task, index) => {
          return <Task key={index} name={task.name} index={index} prevs={task.prevs} available={task.available} onClick={deleteTask} onChange={checkTask}/>
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