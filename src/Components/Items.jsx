import React, { useState } from 'react'
import '../Styles/ItemLists.css'

function Items({ products, cartItems, cart }) {
  const [number, setNumber] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0
  })
  const numberInputCart = (e, id) => {
    for (const a in number) {
      id == a ? (number[a] = e.target.value) : null
    }
    // console.log(number)
  }
  const sendCart = (items, id) => {
    for (const key in number) {
      if (id == key) {
        const numOfItems = Number(number[key])

        cartItems(items, numOfItems)
      }
    }
  }

  return (
    <>
      <div className="mainProducts">
        {products.map((items) => {
          return (
            <div key={items.id}>
              <img src={items.image} alt={items.title} />
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
              <div>
                <input
                  type="number"
                  name="cart"
                  id="cart"
                  min="0"
                  placeholder="0"
                  onChange={(e) => numberInputCart(e, items.id)}
                />
                <button type="button" onClick={(e) => sendCart(items, items.id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Items
