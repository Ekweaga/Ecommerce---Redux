import React from 'react'
import Logo from './common/Logo'

function Navbar() {
  return (
    <>
    <nav className="z-10 text-white flex items-center justify-between p-6">
        <div>
            <Logo/>
        </div>
        <div>
          <ul className="z-10 text-white flex items-center justify-around mr-[35px] gap-10">
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
