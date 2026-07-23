import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

let Home = lazy(()=> import('./Home'))
let About = lazy(()=> import('./About'))
let Contact = lazy(()=> import('./Contact'))

function LazyLoader() {
  return (
    <BrowserRouter>
        <Suspense fallback={<h2>Loading...</h2>}>     
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Suspense>
    </BrowserRouter>
  )
}

export default LazyLoader