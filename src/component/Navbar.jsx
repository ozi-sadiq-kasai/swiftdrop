import { GiShoppingCart } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { ImEnter } from 'react-icons/im'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className="w-full flex justify-center py-1 bg-white z-50 opacity-50 fixed top-0">
      <div className="flex justify-between items-center w-11/12">
        <Link to={'/'}>
          <h1 className="font-semibold text-yellow-900 text-xl cursor-pointer py-1">
            swift<span className="text-green-700">Drop</span>
          </h1>
        </Link>
        <div className="flex items-center gap-3 cursor-pointer">
          <CgProfile className="text-[26px] text-green-700 " />
          <Link to={'/orders'}>
            <ImEnter className="text-[26px] text-green-700 " />
          </Link>

          <GiShoppingCart className="text-green-700 text-[32px]" />
        </div>
      </div>
    </div>
  )
}
export default Navbar
