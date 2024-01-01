import { MdPlace } from 'react-icons/md'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState } from 'react'
import OrderOptions from '../component/OrderOptions'

const Orders = () => {
 const [search,setSearch] = useState('')

 const handleSearch =(e)=>{
  setSearch(e.target.value)
  // console.log(search)
 }
 const handleSubmit = (e)=>{
  e.preventDefault()
  // console.log(search)
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
        <OrderOptions />
      </div>
    </div>
  )
}
export default Orders
