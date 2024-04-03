const cart = [
  { id: 1, item: 'Shirt', price: 322 },
  { id: 4, item: 'Skirt', price: 122 },
  { id: 1, item: 'Shirt', price: 322 },
  { id: 11, item: 'Watch', price: 500 },
  { id: 1, item: 'Shirt', price: 322 }
]
let masterObj = {}
function masterCartCreation() {
  cart.map((items) => {
    let itemName = items.item
    masterObj[`${itemName}`] = []
  })
  for (const key in masterObj) {
    cart.map((items) => {
      if (key == items.item) {
        masterObj[`${key}`].push(items)
      }
    })
  }
}
masterCartCreation()
console.log(masterObj)

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
console.log(numberCart)
console.log(priceCart)
console.log(totalAmountItems)

let totalUnits = 0
let totalPrice = 0
function mainInventoryAmountAndUnits() {
  for (const key in numberCart) {
    totalUnits += numberCart[`${key}`]
  }
  for (const key in priceCart) {
    totalPrice += priceCart[`${key}`]
  }
}
mainInventoryAmountAndUnits()
console.log(totalUnits)
console.log(totalPrice)
