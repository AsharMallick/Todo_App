import React from 'react'
import TodoItem from './TodoItem'

const Todo = ({ todos, deleteTodo }) => {

  return (
    <div>
      <h1>Enter a todo</h1>
      {todos.length === 0 ? "No todos to display" :
        todos.map((todo) => {
          return <TodoItem todo={todo} deleteTodo={deleteTodo} key={todo.sno} />
        })}

    </div>
  )
}

export default Todo
