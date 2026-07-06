import React from 'react'
import Subject from './Subject'

function PassingArrayAsProps() {
    let subjects = ['Telugu','Hindi','English','Maths','Science','Social Studies']
  return (
    <div>
        <Subject list={subjects}/>
    </div>
  )
}

export default PassingArrayAsProps