import React, { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading'
import NavShopLists from './NavShopLists'
import Items from './Items'
import Footer from './Footer'
import Cart from './Cart'

function ShoppingLists() {
  const [fakeApi, setFakeApi] = useState('https://fakestoreapi.com/products')
  const [products, setProducts] = useState(null)
  const [cart, setCart] = useState([])
  const [displayCart, setDisplayCart] = useState(false)

  const cartItems = (items, numOfItems) => {
    const totalItems = []
    for (let i = 0; i < numOfItems; i++) {
      totalItems.push(items)
    }
    console.log(totalItems)
    setCart([...cart, ...totalItems])
  }
  const disCart = () => {
    setDisplayCart(true)
  }
  const undisCart = () => {
    setDisplayCart(false)
  }
  const cartAddFromCart = (itemname) => {
    cart.map((items) => {
      if (items.title == itemname) {
        setCart([...cart, items])
      }
    })
    console.log(cart)
  }

  const cartRemoveFromCart = (itemname) => {
    let index
    for (let i = cart.length - 1; i > 0; i--) {
      if (cart[i].title == itemname) {
        index = i
        break
      }
    }
    cart.splice(index, 1)
    setCart([...cart])
    console.log(cart)
  }

  useEffect(() => {
    const productsFetching = async () => {
      const products = await (await fetch(fakeApi)).json()
      setProducts(products)
    }
    productsFetching()
  }, [fakeApi])

  if (!products) {
    return <Loading />
  }
  if (displayCart) {
    return (
      <>
        <Cart
          undisCart={undisCart}
          cart={cart}
          cartRemoveFromCart={cartRemoveFromCart}
          cartAddFromCart={cartAddFromCart}
        />
      </>
    )
  }

  return (
    <>
      <NavShopLists cart={cart} disCart={disCart} />
      {/* Sort Logic */}
      <Items products={products} cartItems={cartItems} cart={cart} />
      <Footer />
    </>
  )
}

export default ShoppingLists
