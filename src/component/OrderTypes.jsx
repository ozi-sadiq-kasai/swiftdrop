import { icons } from '../data'
import OrderPlaces from './OrderPlaces'
import Modal from './Modal'
import { useContext } from 'react'
import { AuthContext } from '../utils/Context'

const renderIcons = icons.map((icon, index) => (
  <div key={icon.name}>
    <img src={icon.icon} alt={icon} className="w-16 cursor-pointer xsm:w-10" />
    <p className="text-center xsm:text-[10px] hover:text-green-400 cursor-pointer">
      {icon.name}
    </p>
  </div>
))

const OrderTypes = () => {
  const { modal } = useContext(AuthContext)
  return (
    <div className="w-screen my-2">
      <p>Explore our Categories</p>
      <div className="flex justify-around items-center flex-wrap xsm:justify-evenly xsm:gap-2">
        {renderIcons}
      </div>
      <OrderPlaces />
      {modal && <Modal />}
    </div>
  )
}
export default OrderTypes
