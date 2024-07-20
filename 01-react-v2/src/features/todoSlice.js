import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {id: 1, text: "hello world"},
];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload
      };
      state.push(newTodo);
    },
    delTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    clearTodo: (state) => {
      return [];
    }
  }
});

export const { addTodo, delTodo, clearTodo } = todoSlice.actions;

export default todoSlice.reducer;