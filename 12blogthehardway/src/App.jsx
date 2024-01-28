import { useEffect} from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useSelector, useDispatch } from "react-redux"
import { getTodo } from "./Features/Todo/TodoSlice"

function App() {
  const Todos = useSelector(state => state.Todos)

  const Dispatch = useDispatch()

  useEffect(()=>{
    const todo = JSON.parse(localStorage.getItem("todos"))
    if(todo && todo.length>0){
      Dispatch(getTodo(todo))
    }    
  },[Dispatch])

  useEffect(() => {
    // console.log(Todos)
    localStorage.setItem("todos", JSON.stringify(Todos));
  },[Todos])

  return (
    <>
      <div className='flex justify-center h-screen w-full bg-black'>
        <div className='flex flex-col gap-4 items-center w-1/2 py-10 bg-gray-500 h-screen'>
          <div className='w-2/3'>
            {/* Todoform */}
            <TodoForm/>
          </div>
          <div className='w-2/3 flex flex-col gap-4'>
            {Todos.map((todo)=>{
              if(todo.Todo.length===0){
                // console.log("mid");
                return
              }
              return (<div key={todo.id}>
                <TodoList todo={todo} />
              </div>)
            })}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
