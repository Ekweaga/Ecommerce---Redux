import React from 'react'
import './styles.css'
import { DataItem } from './data'
import MenuItem from './MenuItem'
import Buttonaddremove from '../Buttonaddremoveitem'


function Menu() {
  return (
    <main>
    {DataItem.map((item)=>{
    return ( 
      <div className='item'>
           <img src={item.image}/>
           <div className='item-head-desc'>
             <p className='head-desc-name'>{item.name}</p>
             <p className='head-desc-info' style={{fontSize:'10px'}}>{item.desc}</p>
           </div>
           <div className='item-foot-desc'>
             <span className='foot-desc-price'>#{item.price}</span>
            <Buttonaddremove quantity={40}/>
           </div>
      </div>
   )
})}
    </main>
  )
}

export default Menu