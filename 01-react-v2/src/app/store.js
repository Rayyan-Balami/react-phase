import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer // This assigns the todoReducer to a state slice named 'todos'
  }
});

export default store