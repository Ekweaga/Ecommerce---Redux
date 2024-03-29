import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import CartItem from '../../components/Cart';
import Footer from '../../components/common/Footer'
import Logo from '../../components/common/Logo'
import Menu from '../../components/common/Menu'
import EmptyCart from '../../components/Emptycart'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../Redux/Cartfolder/cartselector';
import './styles.css'
import {useHistory} from 'react-router-dom'

function Cart({cartCount, cartList,cartTotal}) {

  console.log(cartCount, cartList,cartTotal);
  const history = useHistory();
  return (
    <>
   
    <div className='cart-header'>
      <Logo/>

    </div>
   
    {cartCount == 0 ?<EmptyCart/>:(<><div className='orders'>
        <div style={{ borderBottom: '2px solid red', marginTop: '50px', marginBottom: '50px', width: '100%', maxWidth: '600px' }}>
          <h1>Your Cart</h1>
        </div>
       
        
      <Menu list={cartList}/>
      
        
      </div>
      <div style={{ borderTop: '2px solid red', marginTop: '50px', marginBottom: '50px', width: '100%' }}>
        <h1 style={{ fontSize:'16px',marginTop:'20px',textAlign:'right'}}>Total : #{cartTotal}</h1>
        <div style={{marginTop:'20px',textAlign:'right'}}><button style={{backgroundColor:'crimson',color:'white',cursor:'pointer', width:'150px',border:'none',padding:'10px',borderRadius:'15px'}}  onClick={()=>history.push('/checkout')}>CheckOut</button></div>
      </div></>)} 
   
   

    <div>
      <Footer />
    </div>
    </>
  )
}
const  mapStateToProps = createStructuredSelector({
  cartCount:selectCartItemsCount ,
  cartList:selectCartItems,
  cartTotal : selectCartTotal

})

export default connect(mapStateToProps)(Cart)