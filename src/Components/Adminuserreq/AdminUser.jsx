import React from 'react'
import './Adminuser.css'
function AdminUser() {
  return (
    <div className="team-container">
    <h1 className='Team-h1'>User request</h1>
     <div  className='team-main'>
      <div className="img">
        <input type="file" name="" id="product-img" />
      </div>
      <div className="team-products">
        <input type="text" name="" placeholder='Product name' className='Product-details' id="" /><br/>
     
        <textarea name="" id="" cols="30" rows="10" className='description' placeholder='product description'></textarea><br/>
        <input type="text" name="" id="" className='Product-details'  placeholder='price'/><br/>
     
      </div>
       
    </div>
    <div style={{display:"flex" ,justifyContent:"center",gap:"20px"}}>
    <button className='Team-button'>
      Update for approval
    </button>
    <button className='Team-button'>
     reject for approval
    </button>
    </div>
   </div>
  )
}

export default AdminUser