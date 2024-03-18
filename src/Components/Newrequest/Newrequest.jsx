import React from 'react'
import './New.css'
function Newrequest() {
  return (
    <div className="team-container">
    <h1 className='Team-h1'>Team Page</h1>
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
    <button className='Team-button'>
      submit changes for approval
    </button>
   </div>
  )
}

export default Newrequest