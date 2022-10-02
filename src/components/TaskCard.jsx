import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskCard({ task}) {

    const {deleteTask}=useContext(TaskContext)

    const cardStyle="p-4 rounded-md bg-slate-100 border border-gray-400 shadow-lg"
    const titleStyle="text-xl text-sky-500 font-semibold mb-2"
    const descriptionStyle="text-gray-800 text-base mb-4"
    const buttonStyle="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"

    return (

        <div className={cardStyle} key={task.id}>
            <h1 className={titleStyle}>{task.title}</h1>
            <p className={descriptionStyle}>{task.description}</p>
            <button className={buttonStyle} onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
        </div>

    )
}

export default TaskCard