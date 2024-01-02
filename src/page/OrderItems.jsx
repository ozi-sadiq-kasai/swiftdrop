// OrderItems.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import { republic } from '../data'

const OrderItems = () => {
  const { id } = useParams()

  const selectedItems = republic.filter((item) => item.id === id)

  return (
    <div>
      <h1>OrderItems Page</h1>
      {selectedItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default OrderItems
