import {useContext} from 'react'
import { useParams } from 'react-router-dom'
import {CartContext}from '../utils/CartContext'
import { ProductContext } from '../utils/ProductContext'

const OrderItems = () => {
 const{products} =useContext(ProductContext)
 const { addToCart } = useContext(CartContext)
  const { id } = useParams()

  const selectedItems = products.filter((product) => product.id === id)

  return (
    <div>
      <h1>OrderItems Page</h1>
      {selectedItems.map((product) => (
        <div key={product.sid}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={()=>addToCart(product,product.sid)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default OrderItems

