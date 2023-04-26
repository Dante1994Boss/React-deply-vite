import { createContext, useState, useEffect } from "react"
import { tasks as data } from "../data/tasks.js";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTasks(task){
        setTasks([...tasks, {
          title: task.title,
          id: tasks.length,
          description: task.description
        }]) //copia todo lo que tiene task y despues agregale un nuevo objeto sin alterar task
      }
      function deleteTask(taskId){
        setTasks(tasks.filter(task => task.id !== taskId)) //por cada tarea que recorras verifica si task.id es diferente a taskId
      }

      useEffect(() => {
        setTasks(data);
      }, []);
  return (
   <TaskContext.Provider value={{
        tasks,
        createTasks,
        deleteTask
   }}>
        {props.children}
   </TaskContext.Provider>
  )
}

