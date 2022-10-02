import TaskCard from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskList(){

    const {tasks}=useContext(TaskContext)
    const mensajeStyle="text-center text-xl font-bold bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"

    if(tasks.length===0){
        return(
            <h1 className={mensajeStyle}>No hay tareas creadas</h1>
        )
    }

    const taskStyle="grid grid-cols-4 gap-2"

    return(
        <div className={taskStyle}>
            {tasks.map((task)=>(
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    )
}

export default TaskList