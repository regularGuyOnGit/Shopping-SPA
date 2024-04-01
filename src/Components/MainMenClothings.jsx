import React, { useEffect, useState } from 'react'
import '../Styles/MainMenClothings.css'
import Logo from '../assets/Logo 2.png'
import { Link, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Loading from './Loading'

function MainMenClothings() {
  const location = useLocation()

  // const cartIncrement =
  const menClothes1 = 'https://fakestoreapi.com/products?limit=4'
  const menClothes2 = 'https://api.escuelajs.co/api/v1/categories/1/products?offset=2&limit=7'

  const useData = () => {
    const [clothes, setClothes] = useState()

    useEffect(() => {
      const clothData = async () => {
        const promiseData = Promise.all([fetch(menClothes1), fetch(menClothes2)])
        const data = await promiseData
        const clothes1 = await data[0].json()
        const clothes2 = await data[1].json()
        setClothes([...clothes1, ...clothes2])
      }
      clothData()
    }, [])
    return { clothes }
  }
  const { clothes } = useData()

  if (!clothes) {
    return <Loading />
  }
  console.log(location)
  return (
    <>
      {/* <div className="nav">
        <div className="logo">
          <Link to={'/'}>
            <img src={Logo} alt="shortkart.logo" />
          </Link>
        </div> */}
      {/* <div className="cart">Cart :- {cart.length}</div> */}
      {/* </div> */}
      <div className="mainCloths">
        {clothes.map((items) => {
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
              <div>cart </div>
            </div>
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default MainMenClothings
