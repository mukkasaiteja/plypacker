import {useState,useEffect} from 'react'
import axios from 'axios';

import './Products.css'
function Products() {
    const  [products, setProducts]=useState([]);
    useEffect(()=>{

        axios.get("https://64e0caef50713530432cafa1.mockapi.io/api/products")
        .then(data=>{
            console.log(data);
            setProducts(data.data)
        })
    },[])
  return (
    <>
    <h1 style={{textAlign:"center",padding:"20px",textDecoration:"underline"}}>Product page</h1>
    <div className='product-main'>
    
 {
    products.map((e,i)=>{
        return(
            <>
            
            <div className="container card">
              <div className='imgBox '>  <img src={e.image} alt="" className='mouse' height={100} width='100%' /></div>
                <h2>{e.productName}</h2>
                <p>${e.price}</p>
                <button className='buttonNav'>click here</button>
                <div class="contentBox">
              
  </div>
            </div>
            </>
        )
    })
 }

    </div>
    </>
  )
}

export default Products