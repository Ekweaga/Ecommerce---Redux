import React, { useRef } from 'react'
import CartButton from '../../components/common/CartButton'
import Footer from '../../components/common/Footer'
import Menu from '../../components/common/Menu'
import Banner from '../../components/Home/Banner'
import { DataItem } from '../../components/common/Menu/data'

function Home() {

  const menuRef = useRef();

  const handleScrollMenu = ()=>menuRef.current.scrollIntoView({behavior:'smooth'})

  

  return (
    <div>
    {/*Banner*/}
    <Banner handleScrollMenu={handleScrollMenu}/>
     {/*Menu*/}
     <Menu ref={menuRef} list={DataItem}/>
      {/*Footer*/}
      <Footer />
       {/*Cart count button*/}
      
    </div>
  )
}

export default Home