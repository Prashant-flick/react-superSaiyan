import { configureStore } from "@reduxjs/toolkit"
import TodoReducer from "../Features/Todo/TodoSlice"

export const store = configureStore({
    reducer: TodoReducer
})