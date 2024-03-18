import React from 'react'
import { Link } from 'react-router-dom'
import './Adminnav.css'

function AdminNav() {
  return (
    <div className='admin-navbar'>

        <Link to='/'><p>Products</p></Link>
        <Link to='/getrequest'><p>request</p></Link>
        <Link to='/userrequest'><p>user request</p></Link>
        <Link to='/profile'><p>profile</p></Link>

    </div>
  )
}

export default AdminNav