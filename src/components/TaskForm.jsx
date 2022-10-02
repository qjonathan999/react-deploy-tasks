import {useState,useContext} from "react"
import {TaskContext} from "../context/TaskContext"

function TaskForm(){

    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const {createTask}=useContext(TaskContext)
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        createTask({
            title,
            description
        })
        setTitle("")
        setDescription("")
    }

    const containerStyle="max-w-md mx-auto"
    const formStyle="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    const inputStyle="shadow appearance-none my-1 border rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    const textAreaStyle="shadow appearance-none my-1 border rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    const buttonStyle="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 border-4 text-white p-1 rounded"
    const titleStyle="block text-green-600 text-decoration-line: underline font-bold mb-2 text-center"

    return(
        <div className={containerStyle}>
            <form className={formStyle} onSubmit={handleSubmit}>
                <h1 className={titleStyle}>Crea tu Tarea</h1>
                <input className={inputStyle} autoFocus value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Ingrese su Tarea" />
                <textarea className={textAreaStyle} value={description} onChange={(e)=>{setDescription(e.target.value)}} rows="4" cols="50" placeholder="Ingrese la descripcion de la Tarea"></textarea>
                <button className={buttonStyle}>Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm