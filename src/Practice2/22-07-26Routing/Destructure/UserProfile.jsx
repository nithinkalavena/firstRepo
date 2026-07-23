import React from 'react'

function Profile({name,role,location}){
    return(
        <>
            <h2>{name}</h2>
            <h2>{role}</h2>
            <h2>{location}</h2>
        </>
    )
}
function UserProfile() {
  return (
    <div>
        <Profile name='MyName' role='AssociateSoftwareEngineer' location='Hyd'/>
    </div>
  )
}

export default UserProfile