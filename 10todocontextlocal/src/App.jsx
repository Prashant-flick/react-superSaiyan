import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import {TodoContextProvider} from './Context/index'

function App() {
  const [Todos, SetTodos] = useState([])

  const AddTodo = (Todo) => {
    SetTodos((prev) => [{id: Date.now(), ...Todo},...prev])
  }

  const RemoveTodo = (id) => {
    SetTodos((prev) => prev.filter((elem) =>
      elem.id !== id  
    ))
  }

  const UpdateTodo = (id, Todo) => {

    SetTodos((prev) => prev.map((elem) => 
      elem.id === id ? Todo : elem
    ))
  }

  const toggleComplete = (id) => {
    SetTodos((prev) => prev.map((elem) =>
      elem.id === id ? {...elem, completed: !elem.completed} : elem
    ))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("Todos"))

    if(todos && todos.length > 0){
      SetTodos(todos);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  },[Todos])


  return (
    <TodoContextProvider value={{Todos, AddTodo, RemoveTodo, UpdateTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {Todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
            </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
