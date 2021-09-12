import React from 'react'
import { Todo } from './Todo';


export const Todos = (props) => {
    return (
        <div className="container right">
            <h3 className="mt-5">Todo list</h3>
            
            {props.todos.length===0?"Nothing to display!!!":
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return (<Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
            })
            }
        </div>
    )
}
