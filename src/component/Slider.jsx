import { useState } from 'react'

const Slider = () => {
  const [selectedOption, setSelectedOption] = useState('Customers')

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div className="switch3-container">
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

     
      <div className="relative top-20">
        {selectedOption === 'Customers' && (
          <>
            <h1 className="relative left-16 py-3 text-[45px] font-bold">
              Try the App
            </h1>
            <p className="text-center px-5 leading-7 text-lg">
              Have meals delivered to you within minutes from a wide variety of
              restaurants ranging from African to Continental cuisines to
              satisfy your cravings.
            </p>
          </>
        )}
        {selectedOption === 'Vendors' && (
          <>
            <h1 className="relative left-20 py-3 text-[45px] font-bold">
              All in One
            </h1>
            <p className="text-center px-5 leading-7 text-lg">
              Unlock new levels of growth with seamless menu and orders
              management, multiple branches and team, easy payouts withdrawal
              and a lot more.
            </p>
          </>
        )}
        {selectedOption === 'Riders' && (
          <>
            <h1 className="relative left-12 py-3 text-[45px] font-bold">
              Be an Odogu
            </h1>
            <p className="text-center px-5 leading-7 text-lg">
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
