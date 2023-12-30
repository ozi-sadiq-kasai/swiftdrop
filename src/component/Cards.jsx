import { FaArrowDown, FaArrowRight } from 'react-icons/fa6'
import { LuShoppingBag } from 'react-icons/lu'
import { FaBicycle } from 'react-icons/fa'
import { GiLaptop } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import shoppingBags from '../assets/images/shoppingbags.png'
import deliverybike from '../assets/images/deliverybike.png'
import remotework from '../assets/images/remotework.png'
import 'animate.css'



const Cards = () => {

  return (
    <div className="relative top-52 md:top-64 md:m-10 lg:top-[22rem]">
      <div className="flex justify-center items-center gap-3">
        <h1 className="text-2xl font text-gray-300">
          Join our growing network
        </h1>
        <FaArrowDown className="text-2xl font text-gray-300" />
      </div>
      <div className="lg:flex xl:flex 2xl:flex">
        {/*  */}
        <div className="bg-[#FFFBCE] mx-5 my-7 py-5 px-3 shadow-lg rounded-lg">
          <div className="flex items-center gap-2">
            <LuShoppingBag className="text-[#2FC864] text-xl" />
            <p className="text-xl font-semibold">Start Selling</p>
          </div>
          <p className="leading-7 text-md pt-3">
            Are you a business owner looking to grow your business? Reach new
            customers when you join our network.
          </p>
          <div className="flex items-center gap-2 hover:text-green-400">
            <Link to="/">See More </Link>
            <FaArrowRight />
          </div>
          <img src={shoppingBags} alt="shoppingBags" />
        </div>
        {/*  */}
        <div className="bg-[#FFFBCE] mx-5 my-7 py-5 px-3 shadow-lg rounded-lg">
          <div className="flex items-center gap-2">
            <FaBicycle className="text-[#2FC864] text-xl" />
            <p className="text-xl font-semibold">Deliver happiness</p>
          </div>
          <p className="leading-7 text-md pt-3">
            Join our elite league of delivery riders delivering happiness to
            customers and earn to achieve your dreams while at it.
          </p>
          <div className="flex items-center gap-2 hover:text-green-400">
            <Link to="/">See More</Link>
            <FaArrowRight />
          </div>
          <img src={deliverybike} alt="deliverybike" />
        </div>
        {/*  */}
        <div className="bg-[#FFFBCE] mx-5 my-7 py-5 px-3 shadow-lg rounded-lg">
          <div className="flex items-center gap-2">
            <GiLaptop className="text-[#2FC864] text-xl" />
            <p className="text-xl font-semibold">Behind the scenes</p>
          </div>
          <p className="leading-7 text-md pt-3">
            If you are passionate about helping us achieve our goal to deliver
            meals seamlessly, come join the team.
          </p>
          <div className="flex items-center gap-2 hover:text-green-400">
            <Link to="/">See More </Link>
            <FaArrowRight />
          </div>
          <img src={remotework} alt="remotework" />
        </div>
      </div>
    </div>
  )
}
export default Cards

