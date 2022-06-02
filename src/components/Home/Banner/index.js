import React from 'react'
import Logo from '../../common/Logo';
import './styles.css';
import f1 from './f15.jpeg'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Banner() {
  return (
      <header>
    <div className='header-content'>
        <Logo />
        <div className='content-main'>
            <h1>Delicious food for your cravings</h1>
            <p>We made fresh and healthy meals with different recipes</p>
            <button>View Menu <AiOutlineArrowRight/></button>
        </div>
    </div>
    <img src={f1} className='header-img'/>
    </header>
    
  )
}

export default Banner