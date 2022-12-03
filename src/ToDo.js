import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, clearItem, clearTodos } from './features/todoSlice'

function ToDo() {

    const todoArray = useSelector((state) => state.todo.items)
    const renderTodoList = todoArray.map((item, index) => {
        return (
            <li key={index} onClick={() => dispatch(clearItem(index))}>
                {item}
            </li>
        )
    })
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const submitTodoItem = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    return (
        <div>
            <h1>
                ToDo List
            </h1>
            <div>
                <ul>
                    {renderTodoList}
                </ul>
            </div>
            <form onSubmit={(e) => submitTodoItem(e)}>
                <input type='text' onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
            <button onClick={() => dispatch(clearTodos())}>Clear</button>
        </div>
    )
}

export default ToDo