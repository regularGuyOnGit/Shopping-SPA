import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Corousel from './Components/Corousel'

import Footer from './Components/Footer'
import Loading from './Components/Loading'

export default function App() {
  const FAKE_STORE_API = 'https://fakestoreapi.com/products'

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

  return (
    <>
      <Navbar />
      <Corousel products={product} />
      <Footer />
    </>
  )
}
