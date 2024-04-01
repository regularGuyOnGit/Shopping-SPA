import React from 'react'
import '../Styles/WomenClothings.css'
import { Link } from 'react-router-dom'
export default function WomenClothings({ products, changeWomen }) {
  return (
    <div className="women">
      <h1>Women section</h1>
      <div className="clothingItems">
        {products.map((item) => {
          return item.id < 17 ? null : item.id < 20 ? (
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
      <h3 className="womenMore">
        <button onClick={changeWomen}>
          <Link to={'womensection'}>Click to see more.. </Link>
        </button>
      </h3>
    </div>
  )
}
