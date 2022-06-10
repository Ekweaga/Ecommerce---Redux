import React from 'react'
import './styles.css';
import Buttonaddremove from '../common/Buttonaddremoveitem'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../Redux/Cartfolder/cartselector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import {cartAddItem, cartRemoveItem} from '../../Redux/Cartfolder/cartaction'


function CartItem({cartlist}) {
  const {name,price,image,desc,id} = cartlist
  
 
  return (
    <section>
    <div className='item'>
     <div className='items'>
           <img src={image}/>
           <div className='item-head-desc'>
             <p className='head-desc-name'>{name}</p>
             <p className='head-desc-info' style={{fontSize:'10px'}}>{desc}</p>
           </div>
           <div className='item-foot-desc'>
             <span className='foot-desc-price'>#{price}</span>
         
          <Buttonaddremove handleAddItem={()=>cartAddItem(cartlist)} handleRemoveItem={()=>cartRemoveItem(cartlist)} />
          
           </div>
      </div>
      
    </div>
    </section>
  )
}

const mapDispatchToProps = dispatch=>({
  cartAddItem : (item)=>dispatch(cartAddItem(item)),
  cartRemoveItem : (item)=>dispatch(cartRemoveItem(item))

})


export default connect(mapDispatchToProps)(CartItem)