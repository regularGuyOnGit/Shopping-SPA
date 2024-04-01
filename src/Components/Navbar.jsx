import React from 'react'
import Logo from '../assets/Logo 2.png'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar({
  cart,
  changeMenF = false,
  changeWomenF = false,
  changeJeweleryF = false,
  changeElectronics = false
}) {
  const noOfItems = cart.length
  return (
    <header>
      <div className="logo">
        <button onClick={changeMenF || changeWomenF || changeJeweleryF || changeElectronics}>
          <Link to={'/'}>
            <img src={Logo} alt="shortkart.logo" />
          </Link>
        </button>
      </div>

      <div className="navLinks">
        <Link to={'aboutus'}>About Us</Link>
        <p>Cart :-{noOfItems}</p>
        {/* C3 componet that would be cart */}
      </div>
    </header>
  )
}

export default Navbar
