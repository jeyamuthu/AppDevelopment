import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "./Components/Pages/UserSlice";

export default configureStore({
    reducer:{
        user:userReducer,
    }
})