import React from 'react'
import Footer from '../../components/common/Footer'
import Logo from '../../components/common/Logo'
import Menu from '../../components/common/Menu'

function Cart() {
  return (
    <><div className='cart-header'>
      <Logo/>

    </div>
    <div className='orders'>
<div style={{borderBottom:'2px solid red',marginTop:'50px',marginBottom:'50px'}}>
  <h1>Your Cart</h1>
</div>
<div>
  <Menu/>
</div>
    </div>
    <div>
      <Footer />
    </div>
    </>
  )
}

export default Cart