import React from 'react'
import "./styles.css"
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../Redux/Cartfolder/cartselector';
import {loadStripe} from '@stripe/stripe-js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'


let stripePromise;
const getstripe = loadStripe("pk_test_51L9rxrE9S3i7xmxzQW7xEEziVUd3gEidwo8BPFnT1gxxjdyrjYLPv5P8PhAvpl5jOnEi7TxXwfzDzeTC7T4MCzsa00KTZYvXOt");
  

  



function CheckOut({cartTotal,cartCount,cartList}) {

  const item = {
    price:{cartTotal},
    quantity : {cartCount}
  }
 const options = {
   lineItem:[item],
   mode:"payment",
   successUrl:`${window.location.origin}/success`,
   
   cancelUrl:`${window.location.origin}/cancel`
 }
 const redirectToCheckout = async()=>{
console.log("redirect");
const stripe = await getstripe();
const {error} = await stripe.redirectToCheckout(options);
console.log(error)
 }
  return (
  <>
  <div className="checkout">
  <div><h1>Stripe Payment</h1>
  <p>Customers payment are safe and secured</p>
  </div>
  <div className='count'>
    <div style={{fontSize:'24px'}}>Total Items : <b>{cartCount}</b></div>
    <div  style={{fontSize:'24px'}}>Total Payment : <b>#{cartTotal}</b></div>
    </div>
  
  <div><button onClick={redirectToCheckout}>Buy</button></div>
  </div>
  
  </>

  )
}
const  mapStateToProps = createStructuredSelector({
  cartCount:selectCartItemsCount ,
  cartList:selectCartItems,
  cartTotal : selectCartTotal

})

export default connect(mapStateToProps)(CheckOut)