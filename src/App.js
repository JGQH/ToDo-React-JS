import { getTasks, saveTasks } from './Utilities'
import { useState, useEffect } from 'react'
import Task from './Task'

function App() {
  const [taskName, setTaskName] = useState("");
  const [taskPrevs, setTaskPrevs] = useState([]);
  const [tasks, setTasks] = useState(getTasks());

  useEffect(() => {saveTasks(tasks)}, [tasks]);

  function createTask(){
    const newTask = {
      name: taskName,
      prevs: taskPrevs,
      available: !(taskPrevs.length > 0),
      checked: false,
    };

    setTasks([...tasks, newTask]);

    setTaskPrevs(new Array());
    setTaskName("")
  }

  function createPrev(){
    let newPrev = parseInt(prompt("Enter the number of the task", tasks.length));
    if(newPrev <= tasks.length) {
      setTaskPrevs([...taskPrevs, newPrev])
    }
  }

  function deleteTask(index){
    let tasks_ = [...tasks];
    tasks_.splice(index, 1);

    for(let i = index; i < tasks_.length; i++){
      let task_ = tasks_[i];
      //Remove prev task if it is the deleted task
      let index_ = task_.prevs.indexOf(index + 1);
      if(index_ >= 0){
        task_.prevs.splice(index_, 1);
      }

      //Substract 1 from all other prevs if index was modified
      task_.prevs = task_.prevs.map(prev => {
        return prev - ((prev - 1) < index ? 0 : 1)
      })
    }

    setTasks(tasks_);
  }

  function checkTask(index, val){
    let tasks_ = [...tasks];
    //Update current checked task
    let task_ = tasks_[index];
    task_.checked = val;

    //Update availability of all tasks
    tasks_.forEach(task__ => {
      const completedPrevs = task__.prevs.filter(prev => {
        return tasks_[prev - 1].checked;
      }).length;

      task__.available = (completedPrevs == task__.prevs.length);
    })

    setTasks(tasks_);
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