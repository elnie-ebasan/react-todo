import React from 'react'
import './MyTodo2023.css'
import MyTodoInfo from "../MyTodoInfo/MyTodoInfo"

const MyTodo2023 = (props) => {
  return (
    <ul className='todo-must-do'>
      { props.items.map((todo) => (
        <MyTodoInfo key={todo.id} id={todo.id} onDelete={props.onDeleteItem}>
          {todo.text}
        </MyTodoInfo>
      ))}
    </ul>
  )
}

export default MyTodo2023
