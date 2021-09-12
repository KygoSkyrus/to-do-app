import React from 'react'

export const Todo = ({todo,onDelete}) => {
    return (
        <>
        <div>
            <h4 className="mt-4">{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-outline-primary mb-3" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
        <hr/>
        </>
    )
}
