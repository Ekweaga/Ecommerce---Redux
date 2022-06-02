import React from 'react'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import './styles.css';
function Buttonaddremove({quantity,handleAddItem,handleRemoveItem}) {
  return (
    <div className='btnaddremove'>{quantity !==0 ?<div className='btnAddRemove-positive'><AiOutlineMinus onClick={handleRemoveItem}/><span>{quantity}</span><AiOutlinePlus onClick={handleAddItem}/></div>:<div className='btnAddRemove-negative' onClick={handleAddItem}>ADD <AiOutlinePlus /></div>}</div>
  )
}

export default Buttonaddremove;
