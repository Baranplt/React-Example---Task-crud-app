import TaskList from "./components/TaskList";
import TaskCreate from "./components/TaskCreate";
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([])
  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks, {
        id: Math.round(Math.random() * 9999999),
        title: title,
        taskDesc: taskDesc,
      }
    ];
    setTasks(createdTasks)
  }
  const deleteTaskById = (id) => {
    const afterDeletedTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeletedTasks)

  }
  const editTaskById = (id, updateTitle, updateTaskDesc) => {

    const editTask = tasks.find(task => task.id == id);
    console.log(editTask)
    editTask.id = id
    editTask.title = updateTitle
    editTask.taskDesc = updateTaskDesc
    // editTask = {
    //   id: id,
    //   title: updateTitle,
    //   taskDesc: updateTaskDesc,
    // }

  }
  return (
    <div className="App flex flex-col items-center mt-20">
      <TaskCreate onCreate={createTask} />
      <h1 className="font-bold my-5">Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  );
}

export default App;
