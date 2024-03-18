import React from 'react'
import './TeamNav.css'
import { Link } from 'react-router-dom'
function TeamNav() {
  return (
    <div className='TeamNav'>
        <Link to='/'><p>Products</p></Link>
        <Link to='/newrequest'><p>New request</p></Link>
        <Link to='/myrequest'><p>My request</p></Link>
    </div>
  )
}

export default TeamNav