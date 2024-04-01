import React from 'react'
import '../Styles/Electronics.css'
import { Link } from 'react-router-dom'

export default function Electronics({ products, changeElectronics }) {
  return (
    <div className="electronics">
      <h1>Electronics section</h1>
      <div className="electronicsItems">
        {products.map((item) => {
          return item.id < 9 ? null : item.id < 12 ? (
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
      <h3 className="electronicsMore">
        <button onClick={changeElectronics}>
          {' '}
          <Link to={'electronicsection'}>Click to see more.. </Link>
        </button>
      </h3>
    </div>
  )
}
