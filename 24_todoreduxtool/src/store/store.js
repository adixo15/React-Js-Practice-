import { configureStore } from "@reduxjs/toolkit";
import todDoReducer from "./todDoSlice";

export const store = configureStore({
    reducer: {
        todos: todDoReducer
    }
});