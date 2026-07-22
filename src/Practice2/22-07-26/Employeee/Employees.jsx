import React from 'react'
import { Link } from 'react-router-dom'

function Employees() {
  return (
    <div>
        <h2>Employees</h2>
        <ul>
            <li>
                <Link to='/employees/101'>Nithin</Link>
            </li>
            <li>
                <Link to='/employees/102'>Ravi</Link>
            </li>
            <li>
                <Link to='/employees/103'>Seenu</Link>
            </li>
        </ul>
    </div>
  )
}

export default Employees