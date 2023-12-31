import 'animate.css'
import FooterCarousel from '../component/FooterCarousel'
import Slider from '../component/Slider'
import Cards from '../component/Cards'
import Animation from '../component/Animation'
import Modal from '../component/Modal'
import { useContext } from 'react'
import { AuthContext } from '../utils/Context'


const main = () => {
 const {modal} = useContext(AuthContext)
  return (
    <main className="mt-14">
      <div className="flex justify-center text-xl font-bold py-4 px-2">
        <p
          className="animate__animated animate__slideInRight text-[#f8ed71] text-sm lg:text-lg md:text-lg"
          style={{ animationDuration: '3s' }}
        >
          Send Us....
        </p>
        <p
          className="animate__animated animate__fadeInLeftBig text-[#2FC864] italic text-sm lg:text-lg md:text-lg"
          style={{ animationDuration: '4s' }}
        >
          Make we run am for You!
        </p>
      </div>
      <Animation />
      <Slider />
      <Cards />
      <FooterCarousel />
      {modal && <Modal />}
    </main>
  )
}
export default main
