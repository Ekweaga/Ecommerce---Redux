import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import './styles.css'
import {useHistory} from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../../Redux/Cartfolder/cartselector'

function CartButton({cartCount}) {
  const history = useHistory();
  return (
    <div className='btnCartCount' onClick={()=>history.push('/cart')}>
      <div className='count'>{cartCount >=100 ?'99+':cartCount}</div>
      <FiShoppingCart style={{transform:'rotate(-45deg)'}}/>
    </div>
  )
}
const  mapStateToProps = createStructuredSelector({
  cartCount:selectCartItemsCount ,
  

})

export default connect(mapStateToProps)(CartButton)