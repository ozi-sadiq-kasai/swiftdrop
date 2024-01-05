import { MdPlace } from 'react-icons/md'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState } from 'react'
import OrderTypes from '../component/OrderTypes'

const Orders = () => {
 const [search,setSearch] = useState('')

 const handleSearch =(e)=>{
  setSearch(e.target.value)
 }
 const handleSubmit = (e)=>{
  e.preventDefault()
  setSearch('')
 }

  return (
    <div className="relative top-10 p-4">
      <div className="flex justify-between ">
        <div className="flex items-center">
          <MdPlace />
          <p className="text-sm">Enter address</p>
          <RiArrowDropDownLine />
        </div>
        <form
          className="basis-1/3 bg-white p-1 rounded-xl"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search SwiftDrop"
          />
        </form>
      </div>
      <div className="flex justify-center">
        <OrderTypes />
      </div>
    </div>
  )
}
export default Orders
