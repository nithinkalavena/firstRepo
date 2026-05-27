 import React from 'react'
import UseFetch from '../UseFetch'
function UseFetch2() {
  let {data,loading,error} = UseFetch('https://jsonplaceholder.typicode.com/users')
  console.log(data)
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>

  return (
    <div>
      <h3>UseFetch</h3>
      {
        data?.map((kp)=>(
          <p key={kp.id}>{kp.id}. {kp.name} - {kp.username}</p>
        ))
      }
    </div>
  )
}

export default UseFetch2