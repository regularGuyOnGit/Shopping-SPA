import React, { useState } from 'react'
import '../Styles/Cart.css'
import { Link } from 'react-router-dom'

function Cart({ undisCart, cart, cartAddFromCart, cartRemoveFromCart }) {
  if (cart.length == 0) {
    return (
      <div className="emptyMsg">
        <span onClick={undisCart}>Cart Is Empty,Go Shop Now !!</span>
      </div>
    )
  }
  const cartMainFunction = () => {
    let masterObj = {}
    function masterCartCreation() {
      cart.map((items) => {
        let itemName = items.title
        masterObj[`${itemName}`] = []
      })
      for (const key in masterObj) {
        cart.map((items) => {
          if (key == items.title) {
            masterObj[`${key}`].push(items)
          }
        })
      }
    }
    masterCartCreation()

    let numberCart = {}
    let priceCart = {}
    let totalAmountItems = {}
    function masterCartTotalAmount() {
      for (const key in masterObj) {
        numberCart[`${key}`] = masterObj[`${key}`].length
        priceCart[`${key}`] = masterObj[`${key}`][0].price
        totalAmountItems[`${key}`] = masterObj[`${key}`]
      }
      for (const key in totalAmountItems) {
        totalAmountItems[`${key}`] = numberCart[`${key}`] * priceCart[`${key}`]
      }
    }
    masterCartTotalAmount()

    let totalUnits = 0
    let totalPrice = 0

    function mainInventoryAmountAndUnits() {
      for (const key in numberCart) {
        totalUnits += numberCart[`${key}`]
      }
      for (const key in totalAmountItems) {
        totalPrice += totalAmountItems[`${key}`]
      }
    }
    mainInventoryAmountAndUnits()
    // console.log(totalPrice)
    return { masterObj, numberCart, priceCart, totalAmountItems, totalUnits, totalPrice }
  }
  const inventory = cartMainFunction()
  function congrats() {
    alert('ThankYou for shopping with us')
  }
  return (
    <>
      {' '}
      <div className="mainInventory">
        <div className="mainLeftInventory">
          <div className="clothesItems">
            <h3>Items </h3>
            {Object.entries(inventory.masterObj).map(([itemName, item], index) => {
              return (
                <div key={index} className="itemInfo">
                  <img src={item[0].image} alt="" />
                  <p>{itemName}</p>
                </div>
              )
            })}
          </div>
          <div className="quantity">
            <h3>Quantity.</h3>
            {Object.entries(inventory.numberCart).map(([itemName, itemQuantity], index) => {
              return (
                <div key={index} className="quantityInfo">
                  <div>
                    {' '}
                    <button onClick={() => cartRemoveFromCart(itemName)}>-</button>
                    <span>{itemQuantity}</span>
                    <button onClick={() => cartAddFromCart(itemName)}>+</button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="pricePerItems">
            <h3>Price</h3>
            {Object.entries(inventory.priceCart).map(([itemNames, price], index) => {
              return (
                <div key={index} className="priceInfo">
                  <span>${price}</span>
                </div>
              )
            })}
          </div>
          <div className="totalPriceItems">
            <h3>Total </h3>
            {Object.entries(inventory.totalAmountItems).map(([itemNames, totalPrice], index) => {
              return (
                <div key={index} className="totalPriceInfo">
                  <span>${Math.round(totalPrice * 100) / 100}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mainRightInventory">
          <div>
            <div className="totalQuantity">
              <h3>Total Quantity.</h3>
              {inventory.totalUnits}
            </div>
            <div className="totalPrice">
              <h3>Total Amount.</h3>${Math.round(inventory.totalPrice * 100) / 100}
            </div>
          </div>
          <div className="btn">
            <Link to={'/'} onClick={congrats}>
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
