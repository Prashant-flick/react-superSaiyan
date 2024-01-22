import { useState } from 'react'
import { UseTodo } from '../Context/Context';

function TodoForm() {
    const [todo, settodo] = useState("");

    const {AddTodo} = UseTodo()

    const Add = (e) => {
        e.preventDefault()
        if(!todo) return

        AddTodo(todo)
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