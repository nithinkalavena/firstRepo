import React from 'react'

function Reducer() {
  return (
    <div>
        a reducer is a function that decides how the state should change
        based on the action

        {/* function Reducer(state = {count:0}, action) {
        switch(action.type){
            case 'inc':
                return { count: state.count+1}
            case 'dec':
                return { count: state.count-1}
            default:
                return state   
            }
        } */}
    </div>
  )
}

export default Reducer