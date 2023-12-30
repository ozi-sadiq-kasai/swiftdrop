import 'animate.css'

const words = [
 <p>Curated healthy meals</p>,
 <p>Real-time order tracking </p>,
 <p>Seamless signup</p>,
 <p>Professional personel</p>,
 <p>Diverse Cusine</p>,
]


const FooterCarousel = () => {

  return (
    <div className="relative m-auto w-full overflow-hidden bg-yellow-100 opacity-60 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[20px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[20px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-[''] top-48 md:top-60 lg:top-[22rem]">
      <div className="animate-infinite-slider flex w-[calc(1000px*5)] text-green-800 font-bold py-2">
        {words.map((word, index) => (
          <div
            key={index}
            className="slide flex w-[225px] items-center justify-center key={index}"
          >
            {word}
          </div>
        ))}
        {words.map((word, index) => (
          <div
            key={index}
            className="slide flex w-[225px] items-center justify-center key={index}py-2"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  )
}
export default FooterCarousel