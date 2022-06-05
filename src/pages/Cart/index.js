import React from 'react'
import Footer from '../../components/common/Footer'
import Logo from '../../components/common/Logo'
import Menu from '../../components/common/Menu'
import EmptyCart from '../../components/Emptycart'

function Cart() {
  return (
    <>
   
    <div className='cart-header'>
      <Logo/>

    </div>
    <EmptyCart/>
    {/*<div className='orders'>
<div style={{borderBottom:'2px solid red',marginTop:'50px',marginBottom:'50px',width:'100%',maxWidth:'600px'}}>
  <h1>Your Cart</h1>
</div>
<div>
  <Menu/>
</div>
    </div>
  <div style={{borderTop:'2px solid red',marginTop:'50px',marginBottom:'50px',textAlign:'right'}}><h1 style={{textAlign:'right'}}>Total : #450</h1></div>*/}

    <div>
      <Footer />
    </div>
    </>
  )
}

export default Cart