import React from 'react'
import AdminNav from '../Components/AdminNav/AdminNav'
import { Routes ,Route} from 'react-router'
import Products from '../Components/Products/Products'
import Request from '../Components/Adminreq/Request'
import Profile from '../Components/Profile/Profile'
import AdminUser from '../Components/Adminuserreq/AdminUser'

function Admin() {
  return (
    <div>
        <div>
          <AdminNav/>
        </div>
        <div>
        <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/getrequest' element={<Request/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/userrequest' element={<AdminUser/>}/>
           
           
          </Routes>
        </div>
    </div>
  )
}

export default Admin