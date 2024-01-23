import React, {useReducer, createContext, useEffect} from 'react'

export const ToDoContext = createContext()

// initial state

// get data from local storage
const getToDos = () => {
    const todos = localStorage.getItem("todos")
    if (todos) {
        return JSON.parse(todos)
    } else {
        return []
    }
}

const INITIAL_STATE = getToDos()

// reducer
const todoReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case "ADD_TODO":
            return [...state, payload]
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== payload)    
        default:
            return state;
    }
}

export const ToDoContextProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, INITIAL_STATE)

    // save to local storage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    // Add ToDo Action
    const addToDoAction = title => {
        dispatch({
            type: "ADD_TODO",
            payload: {
                id: todos.length + 1,
                title,
            }
        })
    }

    // remove
    const removeToDoAction = id => {
        dispatch({
            type: "REMOVE_TODO",
            payload: id,
        })
    }
    return (
        <div>
            <ToDoContext.Provider value={{ todos, addToDoAction, removeToDoAction }}>
                {children}
            </ToDoContext.Provider> 
        </div>
    )
}