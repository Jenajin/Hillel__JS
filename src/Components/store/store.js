import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import weatherApp from "./slices/weatherApp";



const store = configureStore({
    reducer: {
        todos: todoSlice,
        weather: weatherApp,
    }
})

export default store