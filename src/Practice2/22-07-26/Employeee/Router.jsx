import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Employees from './Employees'
import About from './About'
import Contact from './Contact'
import EmployeeDetails from './EmployeeDetails'

function Router() {
  return (
    <>
        <nav>
            <Link to='/'>Home</Link> | {" "}
            <Link to='/employees'>Employees</Link> | {" "}
            <Link to='/about'>About</Link> | {" "}
            <Link to='/contact'>Contact</Link>
        </nav>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/employees' element={<Employees/>}/>
            <Route path='/employees/:id' element={<EmployeeDetails/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>            
        </Routes>
    </>
  )
}

export default Router