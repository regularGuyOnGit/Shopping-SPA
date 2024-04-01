import React from 'react'
import '../Styles/MenClothings.css'
import { Link } from 'react-router-dom'

export default function MenClothings({ products, changeMen }) {
  const productoneTitle = products[0].title

  return (
    <div className="men">
      {/* <button onClick={cartAdd}>click</button> */}
      <h1>Men section</h1>
      <div className="clothingItems">
        {products.map((item) => {
          return item.id == 1 ? null : item.id < 5 ? (
            <div key={item.id}>
              <div className="Image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="priceAndRatings">
                {' '}
                <span>&#x24;{item.price}</span>{' '}
                <span>
                  <span>&#9734;</span>
                  {item.rating.rate}{' '}
                </span>
              </div>
              <div className="addToCart"> cart</div>
            </div>
          ) : null
        })}
      </div>
      <h3 className="menMore">
        <button onClick={changeMen}>
          <Link to={'mensection'}>Click to see more.. </Link>
        </button>
      </h3>
    </div>
  )
}

// to={'mensection'} state={{  }}
//
