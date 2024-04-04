import React from 'react'
import Logo from '../assets/Logo 2.png'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import { useState } from 'react'

function Navbar() {
  const [displayNav, setDisplayNav] = useState(false)
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>
          <img src={Logo} alt="shortkart.logo" />
        </Link>
      </div>

      <div className="navLinks">
        <div>
          <Link to={'aboutus'}>About Us</Link>
          <Link to={'shopLists'}>Go Shop</Link>
        </div>
        <div className="hamburger" onClick={() => setDisplayNav(!displayNav)}>
          <Hamburger isOpen={displayNav} />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 460px) {
          
          .navLinks > :nth-child(1) {
            display: ${displayNav ? 'flex' : 'none'};
            background-color: rgb(221, 230, 237);
            height: 50vh;
            // border : 7px solid brown;
            opacity : 1;
            flex-direction: column;
            justify-content : start;
            align-item : center;
            width: 50vw;
            opacity : 0.8;
            border-top-left-radius: 4rem;
            border-bottom-left-radius: 4rem;
            border-bottom : 1px solid;
            border-left : 1px solid;
            margin-top: -3rem;
            position: absolute;
            right : 0;
            // transition : all 1s linear;
          }
          .navLinks > :nth-child(1) >a {
            padding : 1rem;
            opacity : 1;
          }
          .navLinks > :nth-child(1) > :nth-child(1){
            margin-top : 6rem
          }
          .navLinks {
            display: flex;
            justify-content: center;
            width: 5rem;
           
          }
          header {
            // border: 2px solid red;
            display : flex
            justify-content: space-around;
          }
        }
      `}</style>
    </header>
  )
}

export default Navbar
