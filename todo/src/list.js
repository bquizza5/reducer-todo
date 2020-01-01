import React, { useReducer } from 'react'
import { reducer, initialState } from './reducers/reducer'
import AddToDo from './addToDoForm'

const List = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState)






    return (
        <>
            <AddToDo state={state} dispatch={dispatch} />
            <div className='tasks'>
            <h1>Tasks:</h1>
            {state.map(item => {
                return(<h2 className={item.completed ? 'completed' : ''} onClick={() => dispatch({type: 'completed', payload: item.id})}>- {item.item}</h2>)
            })}

        
            </div>
        </>
    )
}

export default List;