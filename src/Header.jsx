import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Abouts from './Abouts'

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/a/3">About us</Link></li>
        </ul>
      </nav>
      <Routes>
      <Route path='/' element= {<Home/>}/> 
      <Route path='/a/:id/' element={<Abouts/>}/>
      </Routes>
      
    </div>
  )
}

export default Header
