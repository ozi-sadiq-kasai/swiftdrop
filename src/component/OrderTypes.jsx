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
    <div className="w-screen h-dvh">
      <p className="pl-3 mt-8 font-semibold text-md text-gray-600">
        Explore our Categories
      </p>
      <div className="flex justify-around items-center flex-wrap xsm:justify-evenly xsm:gap-2 my-8">
        {renderIcons}
      </div>
      <OrderPlaces />
      <div style={{ bottom: -200, position: 'relative', zIndex: 1 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#84BA98"
            fill-opacity="1"
            d="M0,64L30,85.3C60,107,120,149,180,181.3C240,213,300,235,360,250.7C420,267,480,277,540,240C600,203,660,117,720,96C780,75,840,117,900,160C960,203,1020,245,1080,256C1140,267,1200,245,1260,213.3C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
      {modal && <Modal />}
    </div>
  )
}
export default OrderTypes
