import React from 'react'
import Logo from '../assets/Logo 2.png'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>
          <img src={Logo} alt="shortkart.logo" />
        </Link>
      </div>

      <div className="navLinks">
        <Link to={'aboutus'}>About Us</Link>
        <Link to={'shopLists'}>Go Shop</Link>
      </div>
    </header>
  )
}

export default Navbar
