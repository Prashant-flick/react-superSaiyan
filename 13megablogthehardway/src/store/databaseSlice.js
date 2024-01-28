import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const databaseSlice = createSlice({
    name: "database",
    initialState,
    reducers: {
        add: (state, action) => {
            // console.log(action.payload);
            state.data.push(action.payload)
            // console.log(state);
            localStorage.setItem("data", JSON.stringify(state))
        },
        remove: (state, action) => {
            // console.log(state)
            if(state.data.length !== 0){
                state.data = state.data.filter((data) => data.$id !== action.payload)
            }
            localStorage.setItem("data", JSON.stringify(state))
        },
        getItem : (state, action) => {
            // console.log(action.payload);
            state.data = action.payload.data
            // console.log(state);
        }
    }
})

export const {add, remove, getItem} = databaseSlice.actions;

export default databaseSlice.reducer