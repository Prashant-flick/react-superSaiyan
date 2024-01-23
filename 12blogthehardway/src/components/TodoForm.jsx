import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {AddTodo} from '../Features/Todo/TodoSlice'

function TodoForm() {
    const [todo, settodo] = useState("");

    const Dispatch = useDispatch()    

    const Add = (e) => {
        e.preventDefault()
        
        Dispatch(AddTodo(todo))
        settodo("")
    }


  return (
    <form className="w-full flex flex-row justify-center h-10">
        <input 
            className='pl-2 outline-none rounded-l-full w-full'
            type="text" 
            value={todo}
            placeholder='Write your Todo'
            onChange={(e) => settodo(e.target.value)}
        />
        <button
            type='submit'
            className='bg-gray-700 rounded-r-full w-14'
            onClick={Add}
        >
            Add
        </button>
    </form>
  )
}

export default TodoForm