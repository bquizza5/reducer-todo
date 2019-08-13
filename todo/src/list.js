import React, { useReducer } from 'react'
import { reducer, initialState } from './reducers/reducer'
import AddToDo from './addToDoForm'

const List = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState)

    console.log(state)





    return (
        <div>
            {state.map(item => {
                return(<h1 className={item.completed ? 'completed' : ''} onClick={() => dispatch({type: 'completed', payload: item.id})}>{item.item}</h1>)
            })}

        <AddToDo state={state} dispatch={dispatch} />
        </div>
    )
}

export default List;