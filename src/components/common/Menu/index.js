import React, { forwardRef } from 'react'
import './styles.css'
import { DataItem } from './data'
import MenuItem from './MenuItem'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../../Redux/Cartfolder/cartselector'



const Menu = forwardRef(({list},ref) => {
 
 return(
    <main ref={ref}>
    {list.map((item)=>{
    return ( 
    <MenuItem item={item} key={item.id}/>
   )
})}
    </main>
 )
});


export default Menu