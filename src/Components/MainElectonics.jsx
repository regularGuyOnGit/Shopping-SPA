import React from 'react'
import '../Styles/MainElectronics.css'
import Logo from '../assets/Logo 2.png'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Loading from './Loading'
import { useEffect, useState } from 'react'

function MainElectonics() {
  const [electronic, setElectronic] = useState()
  const electronicApi = 'https://fakestoreapi.com/products/category/electronics'

  useEffect(() => {
    fetch(electronicApi)
      .then((res) => res.json())
      .then((result) => setElectronic(result))
      .catch((error) => console.log(error))
  }, [])

  if (!electronic) {
    return <Loading />
  }
  return (
    <>
      <div className="mainCloths">
        {electronic.map((items) => {
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

export default MainElectonics
