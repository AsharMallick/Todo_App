import React from 'react'

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className='container my-3 row'>
      <div className="col-md-3">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.description}</p>
        <a href="/" className="btn btn-danger" onClick={(e) => {
          deleteTodo(todo)
          e.preventDefault()
        }}>Delete</a>
        <hr />
      </div>
    </div>
  )
}

export default TodoItem
