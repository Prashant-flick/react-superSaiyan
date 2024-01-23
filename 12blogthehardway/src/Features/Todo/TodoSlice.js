import { createSlice, nanoid } from "@reduxjs/toolkit"; 

const initialState = {
    Todos: [{id: 1, Todo: "", Completed: false}]
}

export const TodoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        AddTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                Todo: action.payload
            }

            if(todo.Todo && todo.Todo.lenght==0)return
            console.log(todo);
            state.Todos.push(todo)
        },
        RemoveTodo : (state, action) => {
            state.Todos = state.Todos.filter((elem) => elem.id !== action.payload)
        },
        DuplicateTodo : (state, action) => {
            const todoval = state.Todos.filter((elem) => elem.id===action.payload)
            // console.log(todoval)
            const todo = {
                id: nanoid(),
                Todo: todoval[0].Todo,
            }
            state.Todos.push(todo)
        },
        ToggleCompleted : (state, action) =>{
            state.Todos.map((elem) => 
            {
                if(elem.id === action.payload){
                    elem.Completed = !elem.Completed
                }else{
                    elem
                }
            })
        },
        UpdateTodo: (state, action) => {
            state.Todos.map((elem) => {
                if(elem.id === action.payload.todo.id){
                    elem.Todo = action.payload.val
                }else{
                    elem
                }
        })
        },
        getTodo: (state, action) => {
            state.Todos = action.payload
        }
    }
})

export const {AddTodo, RemoveTodo, UpdateTodo, ToggleCompleted, DuplicateTodo, getTodo} = TodoSlice.actions

export default TodoSlice.reducer
