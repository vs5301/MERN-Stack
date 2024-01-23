import React, { useContext } from 'react'
import { ToDoContext } from "../context/ToDoContext"
import "./ToDoList.css"

const ToDoList = () => {
    const { todos, removeToDoAction } = useContext(ToDoContext)
    console.log(todos);
    return (
        <div className='todo-list-container'>
            <div className="todo-item-container">
                {todos.map(todo => {
                    return (
                        <div key={todo.id} className="todo-item-container">
                            <h3>{todo.title}</h3>
                            <button onClick={() => removeToDoAction(todo.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ToDoList