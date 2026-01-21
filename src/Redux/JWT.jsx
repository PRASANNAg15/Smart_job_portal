import { createSlice } from "@reduxjs/toolkit";
const token =localStorage.getItem("token");
const initialState={
    id:"",
    email:"",
    isAuthenticated:false,
    token:token,
}
const JWT=createSlice(
    {
    name:"jwttoken",
    initialState,
    reducers:{
        loggedin:(state,action)=>{
        state.id=action.payload.id;
         state.email=action.payload.email;
         state.token=action.payload.token;
         state.isAuthenticated=true;
        }
        ,loggedout:(state)=>{
           state.id="",
           state.email="",
           state.token=null,
           state.isAuthenticated=false
        }
    }
    }
)
export const{loggedin,loggedout}=JWT.actions;
export default JWT.reducer;