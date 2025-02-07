import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
        userid:"1",
        author: "Jane Austen"
    },
    {
        userid:"2",
        author:"J.K Rowling"
    },
    {
        userid:"3",
        author:"Mark Twain"
    }
]

const usersSlice = createSlice(
    {
    name: 'users' ,
    initialState ,
    reducers:{
        
    }
    }
)
export const selectAllUsers = state => state.users;
export const {} = usersSlice.actions
export default usersSlice.reducer