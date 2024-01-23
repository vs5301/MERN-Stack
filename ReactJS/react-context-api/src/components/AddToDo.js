import React, { useState, useContext } from 'react'
import { ToDoContext } from "../context/ToDoContext"
import "./AddToDo.css"

const AddToDo = () => {
    const { addToDoAction, state } = useContext(ToDoContext)
    console.log(state);
    const [title, setTitle] = useState("")

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    // submit
    const handleSubmit = e => {
        e.preventDefault()
        if (title === "") {
            return alert("Please provide all details")
        }
        addToDoAction(title)
        setTitle("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={handleTitleChange} />
                <button type="submit">Add ToDo</button>
            </form>
        </div>
    )
}

export default AddToDo