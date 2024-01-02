import { useContext } from "react"
import {AuthContext} from '../../src/Context'

const Modal = () => {
  const { handleCloseModal,credentials,handleInputChange} = useContext(AuthContext)

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalContainer--header">
          <h1>Sign Up</h1>
          <p onClick={handleCloseModal}>X</p>
        </div>

        <form>
          <input
            type="text"
            placeholder="FirstName"
            name="fname"
            onChange={handleInputChange}
            value={credentials.name}
          />
          <input
            type="text"
            placeholder="LastName"
            name="lname"
            onChange={handleInputChange}
            value={credentials.name}
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleInputChange}
            value={credentials.name}
          />{' '}
          <input
            type="string"
            placeholder="080XXXXXXXX"
            name="phone"
            onChange={handleInputChange}
            value={credentials.name}
          />
          <button className="modalContainer--btn" onClick={handleCloseModal}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Modal 