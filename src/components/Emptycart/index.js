import React from 'react'
import img from './small.png'
import './styles.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {useHistory} from 'react-router-dom'

function EmptyCart() {
    const history = useHistory();
  return (
    <div className="emptyCart" >
              <h1 style={{marginTop:'85px'}}>
                Empty Cart
              </h1>
            <img src={img}/>
            <button onClick={()=>history.push('/')}> Shop Now<AiOutlineArrowRight/> </button>
    </div>
  )
}

export default EmptyCart