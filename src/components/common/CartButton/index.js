import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import './styles.css'
import {useHistory} from 'react-router-dom'

function CartButton({cartCount}) {
  const history = useHistory();
  return (
    <div className='btnCartCount' onClick={()=>history.push('/cart')}>
      <div className='count'>{cartCount >=100 ?'99+':cartCount} 50</div>
      <FiShoppingCart style={{transform:'rotate(-45deg)'}}/>
    </div>
  )
}

export default CartButton