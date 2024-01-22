import { useEffect, useState } from 'react'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'
import { TodoContextProvider } from './Context/Context'

function App() {
  const [Todos, SetTodos] = useState([])

  const AddTodo = (todo) => {
    console.log(todo);
    SetTodos((prev) => [{id : Date.now(), Todo: todo, Completed: false}, ...prev])
  }

  const RemoveTodo = (id) => {
    SetTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id))
  }

  const UpdateTodo = (id, todo) => {
    SetTodos((prev) => prev.map((elem) => elem.id === id ? {...elem, Todo: todo} : elem))
  }

  const CompletedTodo = (id) => {
    console.log(id);
    SetTodos((prev) => prev.map((elem) => elem.id === id ? {...elem, Completed: !elem.Completed} : elem))
  }

  const DuplicateTodo = (id) => {
    Todos.map((elem) => {
      if(elem.id===id){
        AddTodo(elem.Todo)
      }
    })
  }

  useEffect(()=>{
    const todo = JSON.parse(localStorage.getItem("Todos"))

    if(todo && todo.length > 1){
      SetTodos(todo)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("Todos",JSON.stringify(Todos))
  },[Todos])

  return (
    <TodoContextProvider value={{Todos, AddTodo, RemoveTodo, UpdateTodo, CompletedTodo, DuplicateTodo}}>
      <div className='flex justify-center h-screen w-full bg-black'>
        <div className='flex flex-col gap-4 items-center w-1/2 py-10 bg-gray-500 h-screen'>
          <div className='w-2/3'>
            <TodoForm/>
          </div>
          <div className='w-2/3 flex flex-col gap-4'>
            {Todos.map((todo) => (
              <div key={todo.id}
              className='w-full'
              >
                <TodoList todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
