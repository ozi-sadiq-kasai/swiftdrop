import React from 'react'
import ReactDOM from 'react-dom/client' 
import App from './App.jsx'
import ProductProvider from './utils/ProductContext.jsx'
import './index.css'
import CartProvider from './utils/CartContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>
)
