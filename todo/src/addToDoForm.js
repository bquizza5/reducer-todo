import React, { useState } from 'react'


const AddToDo = (props) => {

    const [ newToDo, setNewToDo ] = useState()

    const changeHandler = (event) => {
        setNewToDo(event.target.value)


    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.dispatch({type: 'add', payload: newToDo})
        setNewToDo('')

    }

    return (
        <div className='addATask'>
        <form onSubmit={submitHandler} >
        <input placeHolder='type task here' type='text' onChange={(event) => changeHandler(event)} value={newToDo} />
        <button type='submit'>Create Task</button>
        <button type='button' onClick={() => props.dispatch({type: 'update', payload: newToDo})}>Remove Completed Tasks</button>
        </form>
        
        </div>
    ) 
} 
export default AddToDo;