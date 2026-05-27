import React from 'react'

function UserList() {
  let list =['john','David','sara','alex']
  // let count = 1
  return (
    <div>
        <h2>User List</h2>
        {
          list.map((user,index)=>(
            <li key={index}>{++index}. {user}</li>
          ))
        }       
    </div>
  )
}

export default UserList