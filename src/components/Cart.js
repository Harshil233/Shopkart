import '../App.css';  
import React, { useState } from 'react';  
import { useDispatch, useSelector } from 'react-redux'
import {remove} from '../Redux/cartSlice'
  
function Cart() {  
  
    const [showSuccess, setShowSuccess] = useState(false);  
   const dispatch =useDispatch();
    const cartItems = useSelector((state)=>state.cart)

     // Calculate total price  
     console.log("ccc", cartItems)
     const totalPrice = cartItems.reduce((total, item) => total + (+item.amount)  , 0); 
    const handleremove =(id)=>{
        dispatch(remove(id))
    }
 
  
    const handlePlaceOrder = () => {  
        // Show the success message  
        setShowSuccess(true);  
  
        // Set a timeout to hide the success message after 3 seconds  
        setTimeout(() => {  
            setShowSuccess(false);  
        }, 3000);  
    };  
  
    return (  
        <div className="cart">  
            {showSuccess && (  
                <div className='success-purchase'>  
                    <div>  
                        {/* Your SVG */}  
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ff0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              
                        <p>Order Placed successfully</p>  
                        <p>It will be delivered in 5 days</p>  
                    </div>  
                </div>  
            )}  
            <div className='order'>  
                <div className='order-summary'>  
                    <h1>My cart</h1>  
                    {cartItems.map((item) => (  
                        <div className='product-summary'>  
                            <img src={item.image} alt='product'></img>  
                            <div className='product-info'>  
                                <h2>{item.title}</h2>  
                                <h3>₹ {item.amount}</h3>  
                                <div className='no-of-product'>  
                                    <p>+</p>  
                                    <button>1</button>  
                                    <p>-</p>  
                                </div>  
                            </div>  
                            {/* Your SVG */}  
                            <svg onClick={()=>handleremove(item.id)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ff0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
             
                        </div>  
                    ))}  
                </div>  
                <button className='place-order' onClick={handlePlaceOrder}>Place Order</button>  
            </div>  
            {/* Rest of your code */}  
            <div className='purchase'>
                <h1>Price Details</h1>
                <div className='price'>
                    <div className='charges'>
                        <p>Price</p>
                        <p>Discount Price</p>
                        <p>Delivery Charge</p>
                    </div>
                    <div className='amount'>
                        <p>{totalPrice}</p>
                        <p>0</p>
                        <p>0</p>
                    </div>
                </div>
                <div className='total'>
                    <h2>Total</h2>
                    <h2>{totalPrice}</h2>
                </div>
            </div>
        </div>  
    )  
}  
  
export default Cart;  
