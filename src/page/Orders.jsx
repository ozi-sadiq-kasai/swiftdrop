import { MdPlace } from 'react-icons/md'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState } from 'react'

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
    <div className="relative top-10 p-5 border-2">
      <div className="flex justify-between">
        <div className="flex items-center">
          <MdPlace />
          <p className="text-sm">Enter address</p>
          <RiArrowDropDownLine />
        </div>
        <form 
        className="border basis-1/4 bg-white py-3"
        onSubmit={handleSubmit}
        >
          <input 
          type="text" 
          value={search}
          onChange={handleSearch}
          placeholder="Search SwiftDrop" />
        </form>
      </div>
    </div>
  )
}
export default Orders
