import React from 'react'
import { useSelector } from 'react-redux'
import TodoList from './TodoList'

function Todos() {
  const todos = useSelector(state=>state.todos)
  return (
  <>
    {todos.map((todo) => (
      <TodoList key={todo.id} {...todo} />
    ))}
  </>
)
}

export default Todos