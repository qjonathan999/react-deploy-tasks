import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"

function App(){
  
  const mainStyle="bg-stone-200 h-screen p-10"
  const containerStyle="container mx-auto"
  
  return(
    <main className={mainStyle}>
      <div className={containerStyle}>
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  )
}

export default App