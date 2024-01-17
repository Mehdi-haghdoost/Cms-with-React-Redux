import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './../Redux/store/users'
import coursesReducer from './../Redux/store/courses'
import articlesReducer from './../Redux/store/articles'

const store = configureStore({
    reducer: {
        users: usersReducer,
        courses: coursesReducer,
        articles : articlesReducer
    }
})
export default store;