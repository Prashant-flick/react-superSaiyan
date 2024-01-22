/* eslint-disable react/prop-types */
import { UseTodo } from "../Context/Index"

import { useState } from "react"

function TodoList({ todo }) {
    const [val, setval] = useState(todo.Todo)
    const [iseditable, setiseditable] = useState(false)

    const {RemoveTodo, CompletedTodo, DuplicateTodo} = UseTodo()

    const toggleeditable = (e) => {
        e.preventDefault()
        if(todo.Completed)return
        setiseditable(!iseditable)
    }

    const toggleComplete = (e) => {
       
        if(iseditable){
            e.preventDefault()
            // e.stopPropagation();
            return
        }
        CompletedTodo(todo.id)
    }


  return (
    <div className='w-full items-center flex flex-row justify-between h-10 bg-gray-400 rounded-full'>
        <div className={`pl-1 flex flex-row gap-2 ${todo.Completed ? "line-through" : "" }`}>
            <input 
                type="checkbox"
                value={todo.Completed}
                onChange={toggleComplete}
            />
            <input
                className={`w-full rounded-xl border-none outline-none ${iseditable ? "bg-gray-200" : "bg-gray-400"} `}
                type="text"
                value={val}
                readOnly={!iseditable}
                onChange={(e) => setval(e.target.val)}
            />
        </div>
        <div className='flex gap-3 pr-2'>
            <button 
                onClick={toggleeditable}
                className='border-black border-2 bg-green-700 text-black rounded-xl'>
                {!iseditable ? <h4>change</h4> : <h4>save</h4>}
            </button>
            <button
                onClick={() => RemoveTodo(todo.id)}
                className='border-black border-2 bg-green-700 text-black rounded-xl'>
                delete
            </button>
            <button
                className='border-black border-2 bg-green-700 text-black rounded-xl'
                onClick={() => DuplicateTodo(todo.id)}
            >
                copy
            </button>
        </div>
    </div>
  )
}

export default TodoList