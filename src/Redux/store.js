import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './../Redux/store/users'
import coursesReducer from './../Redux/store/courses'

const store = configureStore({
    reducer: {
        users: usersReducer,
        courses: coursesReducer
    }
})
export default store;