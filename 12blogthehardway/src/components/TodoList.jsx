/* eslint-disable react/prop-types */
import { useState } from "react"
import {RemoveTodo, ToggleCompleted, DuplicateTodo, UpdateTodo} from '../Features/Todo/TodoSlice'
import { useDispatch } from "react-redux"

function TodoList({ todo }) {
    // console.log(todo)
    const [val, setval] = useState(todo.Todo)
    const [iseditable, setiseditable] = useState(false)

    const Dispatch = useDispatch()

    const toggleeditable = (e) => {
        // console.log(val);
        e.preventDefault()
        if(todo.Completed)return
        Dispatch(UpdateTodo({val,todo}))
        setiseditable(!iseditable)
    }

    const toggleComplete = (e) => {
       
        if(iseditable){
            e.preventDefault()
            // e.stopPropagation();
            return
        }
        Dispatch(ToggleCompleted(todo.id))
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
                onChange={(e) => setval(e.target.value)}
            />
        </div>
        <div className='flex gap-3 pr-2'>
            <button 
                onClick={toggleeditable}
                className='border-black border-2 bg-green-700 text-black rounded-xl'>
                {!iseditable ? <h4>change</h4> : <h4>save</h4>}
            </button>
            <button
                onClick={() => Dispatch(RemoveTodo(todo.id))}
                className='border-black border-2 bg-green-700 text-black rounded-xl'>
                delete
            </button>
            <button
                className='border-black border-2 bg-green-700 text-black rounded-xl'
                onClick={() => Dispatch(DuplicateTodo(todo.id))}
            >
                copy
            </button>
        </div>
    </div>
  )
}

export default TodoList