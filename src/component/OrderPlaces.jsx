import React, { useEffect, useState } from 'react'
import { restaurantblock } from '../data'
import { useNavigate } from 'react-router-dom'

const OrderPlaces = () => {
  const [loading, setLoading] = useState(true)
  const [eatries, setEatries] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const restaurantData = restaurantblock.map((item) => (
      <div
        key={item.id}
        className="hover:shadow-lg w-1/2 xsm:w-full h-content cursor-pointer xsm:mb-8 md:mb-8 lg:w-96"
        onClick={() => handleItemClick(item.id)}
      >
        <img
          src={item.image}
          alt="restaurant"
          className="w-full rounded-t-lg lg:h-96"
        />
        <p className="text-center font-semibold text-yellow-600 xsm:text-md">
          {item.name}
        </p>
        <p className="text-xs text-green-700 text-center">{item.specialty}</p>
      </div>
    ))
    setEatries(restaurantData)
    setLoading(false)
  }, [])

  const handleItemClick = (itemId) => {
    navigate(`/OrderPlaces/${itemId}`)
  }

  return (
    < >
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex lg:flex-row lg:flex-wrap flex-col justify-around items-center">
          {eatries}
        </div>
      )}
    </>
  )
}

export default OrderPlaces
