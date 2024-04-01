import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Corousel from './Components/Corousel'
import MenClothings from './Components/MenClothings'
import WomenClothings from './Components/WomenClothings'
import Footer from './Components/Footer'
import Loading from './Components/Loading'
import Jewelery from './Components/Jewelery'
import Electronics from './Components/Electronics'

export default function App() {
  const FAKE_STORE_API = 'https://fakestoreapi.com/products'

  const [cart, setCart] = useState(['first item', 'second Item'])

  const [menCloth, setMenCloth] = useState(false)
  const [womenCloth, setwomenCloth] = useState(false)
  const [jewelery, setJewelery] = useState(false)
  const [electronics, setElectronics] = useState(false)

  const cartAdd = () => {
    setCart([...cart, 'Namo'])
  }
  const handleChangeMenTrue = () => {
    setMenCloth(true)
  }
  const handleChangeMenFalse = () => {
    setMenCloth(false)
  }
  const handleChangeWomenTrue = () => {
    setwomenCloth(true)
  }
  const handleChangeWomenFalse = () => {
    setwomenCloth(false)
  }

  const handleChangeJeweleryTrue = () => {
    setJewelery(true)
  }
  const handleChangeJeweleryFalse = () => {
    setJewelery(false)
  }

  const handleChangeElectronicsTrue = () => {
    setElectronics(true)
  }
  const handleChangeElectronicsFalse = () => {
    setElectronics(false)
  }

  const useData = () => {
    const [product, setProduct] = useState()

    useEffect(() => {
      const prodData = async () => {
        const data = await (await fetch(FAKE_STORE_API)).json()
        setProduct(data)
      }
      prodData()
    }, [])

    return { product }
  }

  const { product } = useData()

  if (!product) {
    return <Loading />
  }
  if (menCloth) {
    return (
      <>
        <Navbar changeMenF={handleChangeMenFalse} cart={cart} />
        <Outlet />
      </>
    )
  }

  if (womenCloth) {
    return (
      <>
        <Navbar changeWomenF={handleChangeWomenFalse} cart={cart} />
        <Outlet />
      </>
    )
  }
  if (jewelery) {
    return (
      <>
        <Navbar changeJeweleryF={handleChangeJeweleryFalse} cart={cart} />
        <Outlet />
      </>
    )
  }
  if (electronics) {
    return (
      <>
        <Navbar changeElectronics={handleChangeElectronicsFalse} cart={cart} />
        <Outlet />
      </>
    )
  }

  return (
    <>
      <Navbar cart={cart} />
      <button onClick={cartAdd}>Click</button>
      <Corousel products={product} />
      <MenClothings
        products={product}
        cart={cart}
        cartAdd={cartAdd}
        changeMen={handleChangeMenTrue}
      />
      <WomenClothings products={product} changeWomen={handleChangeWomenTrue} cart={cart} />
      <Jewelery changeJewel={handleChangeJeweleryTrue} products={product} cart={cart} />
      <Electronics changeElectronics={handleChangeElectronicsTrue} products={product} cart={cart} />
      <Footer />
    </>
  )
}
