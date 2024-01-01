import { icons } from "../data"
import OrderPlaces from "./OrderPlaces"

const renderIcons = icons.map((icon, index) => (
  <div key={icon.name}>
    <img src={icon.icon} alt={icon} className="w-16 cursor-pointer xsm:w-10" />
    <p className="text-center xsm:text-[10px] hover:text-green-400 cursor-pointer">
      {icon.name}
    </p>
  </div>
))

const OrderTypess = () => {
  return (
    <div className="w-screen my-2">
      <p>Explore our Categories</p>
      <div className="flex justify-around items-center flex-wrap xsm:justify-evenly xsm:gap-2">
        {renderIcons}
      </div>
      <OrderPlaces/>
    </div>
  )
}
export default OrderTypess
