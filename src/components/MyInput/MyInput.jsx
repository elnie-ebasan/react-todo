import React, { useState } from 'react'
import './MyInput.css'

const MyInput = (props) => {
  const [input, haveInput] = useState("")

  const myInputedText = (event) => {
    haveInput(event.target.value)
  }

  const submittedText = (event) => {
    event.preventDefault()
    props.onSaveToList(input)
    haveInput("")
  }
  
  return (
    <form onSubmit={submittedText}>
      <div className='input-todo'>
        <label htmlFor="my-todo">Things to do</label>
        <input type="text" id="my-todo" onChange={myInputedText} value={input} />
      </div>
      <button type='submit' className='button'>
        Save To List
      </button>
    </form>
  )
}

export default MyInput
