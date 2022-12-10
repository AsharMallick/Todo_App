import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const submit = (e) => {
    e.preventDefault()
    if (!title || !description) {
      alert("Title or description cannot be empty")
    } else {
      setTitle("");
      setDescription("");
      addTodo(title, description)
    }
  }

  return (
    <div className='my-3'>
      <h1>Enter a todo</h1>
      <form onSubmit={submit} className='my-3'>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input value={title} type="text" className="form-control" id="title" onChange={e => setTitle(e.target.value)} aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input value={description} type="text" className="form-control" onChange={e => setDescription(e.target.value)} id="desc" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddTodo
