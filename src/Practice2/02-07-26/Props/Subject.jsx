import React from 'react'

function Subject({list}) {
    console.log(list)
  return (
    <div>
        <h3>List of subjects</h3>
        {
            list.map((item,index)=>(
                <li key={index}>{++index}. {item}</li>
            ))
        }
    </div>
  )
}

export default Subject