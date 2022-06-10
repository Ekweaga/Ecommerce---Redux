import React from 'react'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../../../Redux/Cartfolder/cartselector'
import Buttonaddremove from '../../Buttonaddremoveitem'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import {cartAddItem, cartRemoveItem} from '../../../../Redux/Cartfolder/cartaction'

function MenuItem({item,cartAddItem,cartRemoveItem, cartCount,cartList,cartTotal}) {
  const {id,image,name,price,desc}= item

  const handleItemQuantity = () =>{
    let quantity = 0;
    if(cartCount !== 0){
      const foundItemInCart = cartList.find((item)=>item.id === id);
      if(foundItemInCart){
        quantity = foundItemInCart.quantity
      }
    }
    return quantity;
  }
  return (
    <div className='item'>
     <div className='items'>
           <img src={image}/>
           <div className='item-head-desc'>
             <p className='head-desc-name'>{name}</p>
             <p className='head-desc-info' style={{fontSize:'10px'}}>{desc}</p>
           </div>
           <div className='item-foot-desc'>
             <span className='foot-desc-price'>#{price}</span>
            <Buttonaddremove quantity={handleItemQuantity()} handleAddItem={()=>cartAddItem(item)}
         handleRemoveItem={()=>cartRemoveItem(item)}
            
            />
           </div>
      </div>
      
    </div>
  )
  
}
const  mapStateToProps = createStructuredSelector({
  cartCount:selectCartItemsCount,
  cartList:selectCartItems,
  cartTotal : selectCartTotal

})

const mapDispatchToProps = dispatch=>({
  cartAddItem : (item)=>dispatch(cartAddItem(item)),
  cartRemoveItem : (item)=>dispatch(cartRemoveItem(item))

})


export default connect(mapStateToProps,mapDispatchToProps)(MenuItem);