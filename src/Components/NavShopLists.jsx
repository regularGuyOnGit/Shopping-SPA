import React from 'react'
import Logo from '../assets/Logo 2.png'
import '../Styles/SubNavBar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/fontawesome-free-regular'

function NavShopLists({ cart, disCart }) {
  return (
    <>
      <header className="subHeader">
        <div className="logo">
          <Link to={'/'}>
            <img src={Logo} alt="shortkart.logo" />
          </Link>
        </div>

        <div className="subNavLinks">
          <FontAwesomeIcon onClick={disCart} icon={faCalendar} />
          <span>{cart.length}</span>
        </div>
      </header>
    </>
  )
}

export default NavShopLists
