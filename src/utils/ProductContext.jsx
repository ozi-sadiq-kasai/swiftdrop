import { createContext, useState, useEffect } from 'react'
import { foodItems } from '../data'


export const ProductContext = createContext() 

const ProductProvider = ({children}) => {
  // product state
  const [products, setProducts] = useState([])

  // Fetch products when the component mounts
  useEffect(() => {
    setProducts(foodItems) 
  }, [])
 
  //Fetch products when the component changes
  useEffect(()=>{
   setProducts(foodItems)
  },[products])
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider