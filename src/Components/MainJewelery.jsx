import React, { useEffect, useState } from 'react'
import '../Styles/MainJewelery.css'
import Logo from '../assets/Logo 2.png'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Loading from './Loading'

function MainJewelery() {
  const [jewel, setJewel] = useState()
  const Jewel = 'https://fakestoreapi.com/products/category/jewelery'

  useEffect(() => {
    fetch(Jewel)
      .then((res) => res.json())
      .then((result) => setJewel(result))
      .catch((error) => console.log(error))
  }, [])

  if (!jewel) {
    return <Loading />
  }
  console.log(jewel)
  return (
    <>
      <div className="mainCloths">
        {jewel.map((items) => {
          return (
            <div key={items.id} className={items.title}>
              <img src={items.image ? items.image : items.images} alt={items.title} />
              <div>
                <p>{items.title}</p>
                <p>{items.description}</p>
              </div>
              <div>
                <p>&#36;{items.price}</p>
                <p>
                  <span>&#9734;</span>
                  {items.rating ? items.rating.rate : 'none'}
                </p>
              </div>
              <div>cart</div>
            </div>
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default MainJewelery
