import React from 'react'
import { ACTIONS } from '../pages/use-reducer'

const Todo = ({todo, dispatch }) => {
    return (
        <div style={{ marginTop: "10px"}}>
            <span style={{
                color: todo.complete ? '#007bff' : '#efefef'
            }}>
                {todo.name}
            </span>

            <button 
                onClick={() => dispatch({
                    type: ACTIONS.TOGGLE_TODO,
                    payload: { id: todo.id }
                })} 
            >
            Toggle</button>


            <button
                onClick={() => dispatch({
                    type: ACTIONS.DELETE_TODO,
                    payload: { id: todo.id }
                })}
            >Delete</button>
        </div>
    )
}

export default Todo