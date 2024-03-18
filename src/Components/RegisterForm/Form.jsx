import React from 'react'
import {useData } from '../context/Mycontext'

function Form() {
  const {setRadio,changeHome}=useData();
    const buttonNav={
        padding:"10px",
        marginTop:"20px"
        ,width:"120px",
        background:"#600080",
        color:"white"
    }
  return (
    <div>

<h1 style={{textAlign:"center"}}>Register</h1>

<form style={{display:"flex",flexDirection:"column",gap:"30px",marginLeft:"45%" }} action="">

<input style={{width:"200px",padding:"10px",background:"black",outline:"none",color:"white",border:"1px solid white",borderRadius:"5px"}} type="email" name="" id="" placeholder='Email  address' />
<input style={{width:"200px",padding:"10px",background:"black",outline:"none",color:"white",border:"1px solid white",borderRadius:"5px"}} type="password" name="" id="" placeholder='Password' />
<section>
<input type="radio" name="manage" id="" value='admin' onChange={(e)=>{
  setRadio(e.target.value) ;
}} /><label>admin</label>
</section>
<section>
<input type="radio" name="manage" id="" value='member' onChange={(e)=>{
  setRadio(e.target.value); 
}} /><label>team member</label><br/>
<button style={buttonNav} onClick={changeHome}>Register</button>
</section>
</form>

    </div>
  )
}

export default Form