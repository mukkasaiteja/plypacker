import React from 'react'
import Products from '../Components/Products/Products'
import TeamNav from '../Components/TeamNav/TeamNav'
import Newrequest from '../Components/Newrequest/Newrequest'
import Myrequest from '../Components/Myrequest/Myrequest'
import { Routes ,Route} from 'react-router'
import './TeamPage.css'

function TeamPage() {
  return (
    <div  className='teampage'>
        <div className='team-nav'>
          <TeamNav/>
        </div>
        <div  >
          <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/newrequest' element={<Newrequest/>}/>
            <Route path='/myrequest' element={<Myrequest/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default TeamPage