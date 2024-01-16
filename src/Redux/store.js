import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './../Redux/store/users'
 const store = configureStore({
    reducer : {
        users : usersReducer
    }
})
export default store ;