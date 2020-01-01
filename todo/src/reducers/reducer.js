import react, { useState } from 'react';


export const reducer = (state, action) => {
  switch(action.type) {

    case 'add':
        return([...state, {item: action.payload, completed: false, id: Date.now()}])
    
    case 'completed':
        return(
            state.map((item) => {
            if (action.payload === item.id) {
                item.completed = !item.completed
                return item
            } else {
                return item 
            }
        }))
    case 'update':

        return( state.filter(item => !item.completed ))

            // state.map((item) => {
            //     if (item.completed) {
            //         // console.log(item)
            //     } else {
            //         console.log(item)
            //         return item
            //     }
            // })
            
            

    
    default:
      return state;
  }
}

export const initialState = [
    
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'something else',
        completed: false,
        id: 3892987510
    }
]
    
