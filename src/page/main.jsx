import 'animate.css'
import MainCarousel from '../component/MainCarousel'
import Slider from '../component/Slider'
import Network from '../component/Network'
const main = () => {
  return (
    <main>
      <div className="flex justify-center text-2xl font-bold py-4">
        <p
          className="animate__animated animate__slideInRight text-[#f8ed71]"
          style={{ animationDuration: '3s' }}
        >
          Send Us....
        </p>
        <p
          className="animate__animated animate__fadeInLeftBig  text-[#2FC864]"
          style={{ animationDuration: '4s' }}
        >
          Make we run am for You
        </p>
      </div>
      <MainCarousel />
      <Slider/>
      <Network/>
    </main>
  )
}
export default main
