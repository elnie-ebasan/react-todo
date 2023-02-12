import React from 'react'
import './MyTodoInfo.css'

const MyTodoInfo = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  }

  return (
    <li className='todo-info' onClick={deleteHandler}>
      {props.children}
    </li>
  )
}

export default MyTodoInfo
