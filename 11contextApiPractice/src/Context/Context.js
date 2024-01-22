import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todos : [
        {
            id: 1,
            Todo: "skydiving",
            Completed: false
        }
    ],
    AddTodo : (Todo) => {},
    RemoveTodo : (id) => {},
    UpdateTodo : (id,Todo) => {},
    DuplicateTodo : (id) => {},
    CompletedTodo : (id) => {},
})

export const TodoContextProvider = TodoContext.Provider

export const UseTodo = () => {
    return useContext(TodoContext)
}