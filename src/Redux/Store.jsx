import { configureStore } from "@reduxjs/toolkit";
import JWT from "./JWT" 
const Store=configureStore(
    {
    reducer:{
        token:JWT,
    }
}
)
export default Store;