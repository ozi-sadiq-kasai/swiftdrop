import { GiShoppingCart } from 'react-icons/gi'
import { RiMenuFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
 const navigate = useNavigate()


  return (
    <div className="w-full flex justify-center py-1 bg-yellow-100">
      <div className="flex justify-between items-center w-11/12">
        <h1
          className="font-semibold text-yellow-900 text-xl cursor-pointer py-1"
          onClick={navigate('/')}
        >
          swift<span className="text-green-700">Drop</span>
        </h1>

        <div className="flex items-center gap-3">
          <GiShoppingCart className="text-green-700  text-[32px]" />
          <RiMenuFill className="font text-[26px] text-gray-500" />
        </div>
      </div>
    </div>
  )
}
export default Navbar

