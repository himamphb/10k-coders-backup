import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";

export const userSlice = createSlice({
    name:"users",
    initialState:defaultState,
    reducers:{
        addUserAction:(state,action)=>{
            state.users.push(action.payload)
        }
    }
})