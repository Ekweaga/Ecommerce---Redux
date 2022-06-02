import React from 'react'
import Footer from '../../components/common/Footer'
import Menu from '../../components/common/Menu'
import Banner from '../../components/Home/Banner'

function Home() {
  return (
    <div>
    {/*Banner*/}
    <Banner />
     {/*Menu*/}
     <Menu />
      {/*Footer*/}
      <Footer />
       {/*Cart count button*/}
    </div>
  )
}

export default Home