import bic1 from '../assets/images/bic1.jpeg'
import bic2 from '../assets/images/bic2.jpeg'
import bic3 from '../assets/images/bic3.jpeg'
import 'animate.css'

const Bics = [
  //   <Bic1 width={50} height={40} />,
  //   <Bic2 width={50} height={40} />,
  //   <Bic3 width={50} height={40} />,
  // ]

  <img src={bic1} alt="" className="width={250} height={240}" loading="lazy" />,
  <img src={bic2} alt="" className="width={250} height={240}" loading="lazy" />,
  <img src={bic2} alt="" className="width={250} height={240}" loading="lazy" />,
  <img src={bic3} alt="" className="width={250} height={240}" loading="lazy" />,
  <img src={bic3} alt="" className="width={250} height={240}" loading="lazy" />,
]

const MainCarousel = () => {


  return (
    <div className="relative m-auto w-[500px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[20px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[20px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-[''] ">
      <div className="animate-infinite-slider flex w-[calc(1000px*3)]">
        {Bics.map((bic, index) => (
          <div
           key={index}
           className="slide flex w-[225px] items-center justify-center key={index}"
          >
            {bic}
          </div>
        ))}
        {Bics.map((bic, index) => (
          <div
           key={index}
           className="slide flex w-[225px] items-center justify-center key={index}"
          >
            {bic}
          </div>
        ))}
      </div>
    </div>
  )
}
export default MainCarousel