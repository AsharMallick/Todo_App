import React, { useEffect, useState } from 'react'
import AddTodo from './Components/AddTodo';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo';

function App() {
  let initTodo;
  if (localStorage.todo == null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.todo)
  }

  //Deleting todo
  const deleteTodo = (todo) => {
    console.log("deleting todo", todo)
    setTodos(todos.filter((e) => {
      return e != todo;
    }))
    localStorage.setItem('todo', JSON.stringify(todos))
  }

  //Adding todo
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1
    }
    let newTodo = {
      sno: sno,
      title: title,
      description: desc
    }
    setTodos([...todos, newTodo])
    console.log(newTodo)
  }

  //Setting Todos
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <Navbar />
      <div className="container">
        <AddTodo addTodo={addTodo} />
        <Todo todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
