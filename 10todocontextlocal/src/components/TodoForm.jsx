import { useState } from "react";
import { UseTodos } from "../Context/index";

function TodoForm() {
    const [todo, settodo] = useState("")
    const {AddTodo} = UseTodos()

    const Add = (e) => {
        e.preventDefault()

        if(!todo) return

        AddTodo({Todo:todo, completed:false});
        console.log(todo);
        settodo("")
    }

    return (
        <form onSubmit={Add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todo}
                onChange={(e) => settodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button
             type="submit" 
             className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
             >
                Add
            </button>
        </form>
    );
}

export default TodoForm;

