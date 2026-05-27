import React, { useEffect, useState } from 'react'
import axios  from 'axios'

function B() {
    let [users,setUsers] = useState([])
    let [error,setError] = useState('')

let axiosBtn = async ()=>{
    try{
        let response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    }
    catch(err){
        setError('something went wrong')
        console.log(err)
    }
}
  let remove = ()=>{
    setUsers([])
  }
  return (
    <div>
        <center>
            <p>To Get the data from server click the button below</p>
        {users.length === 0 && <button onClick={axiosBtn}>Get Data</button>}
        {error && <p>{error}</p>}  <br /><br />
        {users.length>0 && (<table><thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                </tr></thead>
                <tbody>                
                        {users.map((user)=>( 
                            <tr key={user.id}>                           
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            </tr>
                        ))}
                </tbody>            
        </table>) } <br />
        {users.length > 0 &&
        <button onClick={remove}>Remove</button>}   
        </center>        
    </div>
  )
}

export default B