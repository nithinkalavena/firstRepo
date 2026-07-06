import React from 'react'
import Student from './Student'

function BasicProps() {
  return (
    <div>
        <h1>Props Example</h1>
        <Student name='John' age={10} city='Peddapalli' state='Telangana'/>
    </div>
  )
}

export default BasicProps