import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  // ADD TO CART
  const addToCart = (product, sid) => {
    const newItem = { ...product, amount: 1 }
console.log(newItem)
    // Determine if the item is already in the cart
    const cartItem = cart.find((item) => item.sid === sid)

    // If cart item is already in cart
    if (cartItem) {
      const newCart = cart.map((item) =>
        item.sid === sid ? { ...item, amount: item.amount + 1 } : item
      )
      setCart(newCart)
    } else {
      setCart((prevCart) => [...prevCart, newItem])
    }


  }
useEffect(() => {
  console.log(cart)
}, [cart])

  // REMOVE FROM CART
  const removeCart = (sid) => {
    const newCart = cart.filter((item) => {
      return item.sid !== sid
    })
    setCart(newCart)
  }

  // ADD QUANTITY
  useEffect(() => {
    if (cart) {
      const quantity = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)
      setQuantity(quantity)
    }
  })

  // ADD TOTAL AMOUNT
  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotalAmount(amount)
  })

  // INCREASE QUANTITY
  const addQuantity = (sid) => {
    const updatedCart = cart.map((item) => {
      if (item.sid === sid) {
        // Increase the quantity of the item
        return { ...item, amount: item.amount + 1 }
      }
      return item
    })
    setCart(updatedCart)
  }

  // DECREASE QUANTITY
  const removeQuantity = (sid) => {
    const updatedCart = cart.map((item) => {
      if (item.sid === sid) {
        // Increase the quantity of the item
        return { ...item, amount: item.amount - 1 }
      }
      return item
    })
    setCart(updatedCart)
  }

  // CLEAR CART
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        removeCart,
        quantity,
        totalAmount,
        addQuantity,
        removeQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider
