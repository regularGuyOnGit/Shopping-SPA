import React from 'react'
import '../Styles/Jewelry.css'
import { Link } from 'react-router-dom'

export default function Jewelery({ products, changeJewel }) {
  return (
    <div className="jewel">
      <h1>Jewelery section</h1>
      <div className="jewelItems">
        {products.map((item) => {
          return item.id < 5 ? null : item.id < 8 ? (
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
      <h3 className="jewelMore">
        <button onClick={changeJewel}>
          <Link to={'jewelerysection'}>Click to see more.. </Link>
        </button>
      </h3>
    </div>
  )
}
