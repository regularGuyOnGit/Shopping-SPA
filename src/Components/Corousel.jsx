import React, { useEffect, useState } from 'react'
import '../Styles/Corousel.css'
import { Link } from 'react-router-dom'
function Corousel({ products }) {
  const product1 = products[1].image
  const product2 = products[5].image
  const product3 = products[13].image
  const product4 = products[19].image

  const [currentCorosel, setCurrentCorosel] = useState(product1)
  function coruselChange() {
    currentCorosel == product1
      ? setCurrentCorosel(product2)
      : currentCorosel == product2
        ? setCurrentCorosel(product3)
        : currentCorosel == product3
          ? setCurrentCorosel(product4)
          : currentCorosel == product4
            ? setCurrentCorosel(product1)
            : null
  }
  function coruselChangeTwo() {
    currentCorosel == product1
      ? setCurrentCorosel(product4)
      : currentCorosel == product2
        ? setCurrentCorosel(product1)
        : currentCorosel == product3
          ? setCurrentCorosel(product2)
          : currentCorosel == product4
            ? setCurrentCorosel(product3)
            : null
  }
  useEffect(() => {
    const timeOut = setTimeout(() => {
      coruselChange()
    }, 2000)

    return () => {
      clearTimeout(timeOut)
    }
  })

  return (
    <>
      <div className="parentCorousel">
        <button onClick={coruselChange}>&lArr;</button>
        <div className="corousel">
          {currentCorosel == product1 ? (
            <Link to={'shopLists'}>
              {' '}
              : <img src={currentCorosel} alt="fashions" />
            </Link>
          ) : currentCorosel == product2 ? (
            <Link to={'shopLists'}>
              {' '}
              : <img src={currentCorosel} alt="fashions" />
            </Link>
          ) : currentCorosel == product3 ? (
            <Link to={'shopLists'}>
              {' '}
              : <img src={currentCorosel} alt="fashions" />
            </Link>
          ) : currentCorosel == product4 ? (
            <Link to={'shopLists'}>
              {' '}
              : <img src={currentCorosel} alt="fashions" />
            </Link>
          ) : null}
        </div>
        <button onClick={coruselChangeTwo}>&rArr;</button>
      </div>
    </>
  )
}

export default Corousel
