import { GiShoppingCart } from 'react-icons/gi'
import { RiMenuFill } from 'react-icons/ri'
import Logo from '../assets/images/Logo.jpg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
 const navigate = useNavigate()


  return (
    <div className="flex justify-between items-center top-0 bg-white">
      <img
        src={Logo}
        alt="logo"
        onClick={() => navigate('/')}
        className="pl-7 w-24 rounded-full cursor-pointer"
      />
      <div className="flex pr-7 gap-3">
        <GiShoppingCart className="text-green-500 font text-4xl rounded-full p-1 bg-yellow-100" />
        <RiMenuFill className="font text-4xl text-gray-500 rounded-full p-1 bg-yellow-100" />
      </div>
    </div>
  )
}
export default Navbar
