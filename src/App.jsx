import { useState } from 'react'
import './App.css'
import MyInput from './components/MyInput/MyInput'
import MyTodo2023 from './components/MyTodos/MyTodo2023/MyTodo2023'

function App() {
  const [myTodos, haveMyTodos] = useState([
    // {id: 'abc', text: 'Be Successful Someday!'},
    // {id: '123', text: 'Own a Business!'},
  ])

  const addSaveToListHandler = inputedText => {
    haveMyTodos(prevTodos => {
      const updatedTodos = [ ... prevTodos]
      updatedTodos.unshift({ id: Math.random.toString(), text: inputedText })
      return updatedTodos
    })
  }

  const deleteSaveToListHandler = (todoId) => {
    haveMyTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    })
  }

  return (
    <div>
      <h1>
      Must Do for the Year 2023!
      </h1>
      
      <section id="todo-form">
        <MyInput onSaveToList={addSaveToListHandler} />
      </section>
      <section id="todos">
        <MyTodo2023 items={myTodos} onDeleteItem={deleteSaveToListHandler} />
      </section>
    </div>
  )
}

export default App
