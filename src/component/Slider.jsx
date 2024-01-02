import { useState } from 'react'

const Slider = () => {
  const [selectedOption, setSelectedOption] = useState('Customers')

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div className="switch3-container relative top-28 md:top-44 lg:top-64 w-full z-0">
      <div className="switch3">
        <input
          type="radio"
          id="switch3-radio1"
          name="radio"
          value="Customers"
          checked={selectedOption === 'Customers'}
          onChange={handleRadioChange}
        />
        <label htmlFor="switch3-radio1">Customers</label>

        <input
          type="radio"
          id="switch3-radio2"
          name="radio"
          value="Vendors"
          checked={selectedOption === 'Vendors'}
          onChange={handleRadioChange}
        />
        <label htmlFor="switch3-radio2">Vendors</label>

        <input
          type="radio"
          id="switch3-radio3"
          name="radio"
          value="Riders"
          checked={selectedOption === 'Riders'}
          onChange={handleRadioChange}
        />
        <label htmlFor="switch3-radio3">Riders</label>
      </div>

      <div className="relative top-16">
        {selectedOption === 'Customers' && (
          <>
            <h1 className="relative py-1 text-[40px] font-bold text-center">
              Try the App
            </h1>
            <p className="px-2 text-center leading-7 text-lg">
              Have meals delivered to you within minutes from a wide variety of
              restaurants ranging from African to Continental cuisines to
              satisfy your cravings.
            </p>
          </>
        )}
        {selectedOption === 'Vendors' && (
          <>
            <h1 className="relative py-1 text-[40px] font-bold text-center">
              All in One
            </h1>
            <p className="px-2 text-center leading-7 text-lg">
              Unlock new levels of growth with seamless menu and orders
              management, multiple branches and team, easy payouts withdrawal
              and a lot more.
            </p>
          </>
        )}
        {selectedOption === 'Riders' && (
          <>
            <h1 className="relative py-1 text-[40px] font-bold text-center">
              Be an Odogu
            </h1>
            <p className="px-2 text-center leading-7 text-lg">
              Choose your own working hours, ride your choice of bike, track
              your metrics, earn bonuses and withdraw easily to your account. Do
              more with our app.
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default Slider
