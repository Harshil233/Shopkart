import '../App.css';  
import React, { useEffect, useState } from 'react'  
import { useParams } from 'react-router-dom';  
import { Link, useNavigate } from 'react-router-dom'; 
import {add} from '../Redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
function Details() {  
  const { id } = useParams();  
  const [product, setProduct] = useState(null);  

  const dispatch =useDispatch();
  const handleadd =(product)=>{
    dispatch(add(product));
   }
  
  useEffect(() => {  
    const fetchProduct = async () => {  
      const res = await fetch(`http://localhost:3001/products/${id}`);  
      const data = await res.json();  
      setProduct(data);  
    };  
    fetchProduct();  
  }, [id]);  
  
  if (!product) {  
    return <div>Loading...</div>  
  }  
  
  return (  
    <div className="detail">  
      <div className='detail-img'>  
        <img src={product.image} alt='product'></img>  
      </div>  
      <div className='line'></div>  
      <div className='item-detail'>  
        <div className='item-desc'>  
          <h2>{product.title}</h2>  
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#757575"></path> </g></svg>
         
          <p>{product.description}</p>  
          <h3>₹ {product.amount}</h3>  
        </div>  
        <div className='buy-option'>  
          <button ><Link to="/cart" style={{textDecoration:"none", color:"black"}}>Buy Now</Link></button>  
        
          <button onClick={()=>handleadd(product)}>Add to Basket</button>  
          
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Details;  
