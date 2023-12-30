import 'animate.css'
import FooterCarousel from '../component/FooterCarousel'
import Slider from '../component/Slider'
import Cards from '../component/Cards'
import Animation from '../component/Animation'
const main = () => {
  return (
    <main className="mt-14">
      <div className="flex justify-center text-xl font-bold py-4 px-2">
        <p
          className="animate__animated animate__slideInRight text-[#f8ed71] text-sm"
          style={{ animationDuration: '3s' }}
        >
          Send Us....
        </p>
        <p
          className="animate__animated animate__fadeInLeftBig text-[#2FC864]  italic text-sm"
          style={{ animationDuration: '4s' }}
        >
          Make we run am for You!
        </p>
      </div>
      <Animation />
      <Slider />
      <Cards />
      <FooterCarousel />
    </main>
  )
}
export default main
