import React from 'react'

function ArrayDes() {
    let stones = ['powerStone','mindStone','soulStone','spaceStone','timeStone','realityStone']
    let [first,,,,fifth] = stones
    console.log(fifth)
  return (
    <div>
        <h4>Array Destructure on console</h4>
    </div>
  )
}

export default ArrayDes