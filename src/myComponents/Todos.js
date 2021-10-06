import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
    let todostyle ={
        minHeight:"70vh",
        margin: "10px auto"
    }
    return (
        <div className="container" style={todostyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? "No todos to display" :
                props.todos.map((todo) => {
                    return(
                    <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                )})
                }
        </div>
    )
}
