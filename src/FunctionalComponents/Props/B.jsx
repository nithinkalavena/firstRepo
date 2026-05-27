import React from 'react'

function B({name,age}) {
    console.log(name)
    console.log(age)
  return (
    <div>B
        <h2>Data From parent : {name}-{age}</h2>
    </div>
  )
}

export default B