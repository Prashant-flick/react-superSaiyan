import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    Todos : [
        {
            id : 1,
            Todo : "run a mile",
            completed: false
        }
    ],
    AddTodo : (Todo) => {},
    RemoveTodo : (id) => {},
    UpdateTodo : (id,Todo) => {},
    toggleComplete : (id) => {}
})

export const UseTodos = () =>{
    return useContext(TodoContext);
}
    
export const TodoContextProvider  = TodoContext.Provider

