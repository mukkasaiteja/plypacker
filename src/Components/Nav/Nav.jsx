import React from 'react'
import logo from './playLogo.png'

function Nav() {
  return (
    <div>
     <nav style={{display:"flex",alignItems:"center"}}>
    <img src={logo} alt="" height={80} width={100} />
    <h2 style={
    {
     color:"white"   
    }
    }>PLYPICKERS</h2>
    <div></div>
    </nav>

    </div>
  )
}

export default Nav