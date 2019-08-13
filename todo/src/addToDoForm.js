import React, { useState } from 'react'


const AddToDo = (props) => {

    const [ newToDo, setNewToDo ] = useState()

    const changeHandler = (event) => {
        setNewToDo(event.target.value)
        console.log(event.target.value)

    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.dispatch({type: 'add', payload: newToDo})

    }

    return (
        <>
        <form onSubmit={submitHandler} >
        <h3>add ToDo</h3>
        <input onChange={(event) => changeHandler(event)} value={newToDo} />
        <button>Create</button>
        </form>
        <button onClick={() => props.dispatch({type: 'update', payload: newToDo})}>update</button>
        </>
    ) 
} 
export default AddToDo;