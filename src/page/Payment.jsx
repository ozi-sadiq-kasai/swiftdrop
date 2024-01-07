import { useContext } from "react"
import {CartContext} from '../utils/CartContext'
import { HiMiniMinusSmall } from 'react-icons/hi2'
import { HiMiniPlusSmall } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'

const Payment = () => {
 const { cart, addQuantity, removeQuantity, removeCart, totalAmount,clearCart } =
   useContext(CartContext)

 const purchaseItems = cart.map((item) => (
   <div className="m-4 border-b relative px-2" key={`${item.sid}-${item.name}`}>
     <div className="flex justify-between items-center mb-2 gap-2 ">
       <div className="w-2/5 flex-2">
         <img src={item.image} alt={item.name} />
       </div>
       <div className="flex-2">
         <p className="font-semibold text-sm">{item.name}</p>
         <div className="flex items-center border w-14 justify-around cursor-pointer mb-1">
           <HiMiniPlusSmall
             onClick={() => {
               addQuantity(item.sid)
             }}
           />
           <p>{item.amount}</p>
           <HiMiniMinusSmall
             onClick={() => {
               removeQuantity(item.sid)
             }}
           />
         </div>
         <span>&#8358;</span>
         {item.price}
       </div>
       <div className="flex-1 ">
         <div className="absolute top-4 right-4 cursor-pointer ">
           <IoMdClose
             onClick={() => removeCart(item.sid)}
             className="text-gray-500 hover:text-red-500  transition"
           />
         </div>
         <span>&#8358;</span>
         {item.price * item.amount}
       </div>
     </div>
   </div>
 ))
 console.log(purchaseItems)
  return (
    <div className="mt-11 mx-10">
      <div className="border-b py-1 flex justify-between">
        <p>Checkout</p>
        <div className='flex'>
          <p className="text-green-400 font-bold"> Total Amount: </p>
          <span>&#8358;{totalAmount}</span>
        </div>
      </div>
      {purchaseItems}
      <div>
       <p
       onClick={clearCart}
       >
        Clear Cart </p>
      </div>
    </div>
  )
}
export default Payment

