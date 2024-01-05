<<<<<<< HEAD
import React from 'react'
=======
import {useContext} from 'react'
import 'animate.css'
>>>>>>> orders
import { useParams } from 'react-router-dom'
import {CartContext}from '../utils/CartContext'
import { ProductContext } from '../utils/ProductContext'
import orderNow from '../assets/images/ordernow.png'

const OrderItems = () => {
 const{products} =useContext(ProductContext)
 const { addToCart } = useContext(CartContext)
  const { id } = useParams()

  const selectedItems = products.filter((product) => product.id === id)

  return (
    <>
      <img
        className="w-36 m-auto animate__animated animate__rollIn relative top-11"
        src={orderNow}
        alt="logo"
      />
      <div className="py-5 flex xsm:flex-col justify-center items-center flex-wrap gap-4">
        {selectedItems.map((product) => (
          <div
            key={product.sid}
            className="mb-6 border lg:w-[30%]"
          >
            <img src={product.image} alt={product.name} className="w-full" />
            <p className="text-lg">{product.name}</p>
            <p className="text-sm">&#8358; {product.price}</p>
            <button
              onClick={() => addToCart(product, product.sid)}
              className="border py-1 px-5 rounded-md bg-[#84BA98] text-yellow-300 hover:bg-yellow-300 hover:text-[#84BA98]"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default OrderItems