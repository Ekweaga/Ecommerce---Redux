import React from 'react'
import './styles.css'
import { DataItem } from './data'
import MenuItem from './MenuItem'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../../Redux/Cartfolder/cartselector'



function Menu({list}) {
 
  return (
    <main>
    {DataItem.map((item)=>{
    return ( 
    <MenuItem item={item} key={item.id}/>
   )
})}
    </main>
  )
}


export default Menu