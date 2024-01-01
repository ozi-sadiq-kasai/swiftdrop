// OrderPlaces.jsx
import React, { useEffect, useState } from 'react'
import { eatry } from '../data'
import { useNavigate } from 'react-router-dom'

const OrderPlaces = () => {
  const [loading, setLoading] = useState(true)
  const [eatries, setEatries] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const restaurantData = eatry.map((item) => (
      <div
        key={item.id}
        className="hover:shadow-md w-44 px-4 h-58 xsm:h-48 cursor-pointer"
        onClick={() => handleItemClick(item.id)}
      >
        <img src={item.image} alt="restaurant" className="w-48 pb-3" />
        <p className="text-center font-semibold text-yellow-600 xsm:text-sm">
          {item.name}
        </p>
        <p className="text-xs text-green-700 text-center">{item.specialty}</p>
      </div>
    ))
    setEatries(restaurantData)
    setLoading(false)
  }, [])

  const handleItemClick = (itemId) => {
    // Navigate to the OrderItems page with the clicked item's ID
    navigate(`/OrderPlaces/${itemId}`)
  }

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex gap-4 items-center my-12 xsm:mx-2 justify-around">
          {eatries}
        </div>
      )}
    </div>
  )
}

export default OrderPlaces
