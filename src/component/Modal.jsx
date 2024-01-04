import { useContext, useEffect } from 'react'
import { AuthContext } from '../utils/Context'
import { Link, useNavigate } from 'react-router-dom'

const Modal = () => {
  const { setModal, credentials, handleInputChange, handleSignupLogin, user } =
    useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/payment')
    }
  }, [user, navigate])

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalContainer--header">
          <h1>Sign Up</h1>
          <p onClick={() => setModal(false)}>X</p>
        </div>

        <form onSubmit={(e) => handleSignupLogin(e, credentials)}>
          <div className="form-field-wrapper">
            <label>Name:</label>
            <input
              value={credentials.name}
              onChange={handleInputChange}
              type="text"
              name="name"
              placeholder="Enter name..."
            />
          </div>

          <div className="form-field-wrapper">
            <label>Email:</label>
            <input
              value={credentials.email}
              onChange={handleInputChange}
              type="email"
              name="email"
              placeholder="Enter Email..."
            />
          </div>

          <div className="form-field-wrapper">
            <label>Password:</label>
            <input
              value={credentials.password}
              onChange={handleInputChange}
              type="password"
              name="password"
              placeholder="Enter Password..."
            />
          </div>

          <button type="submit" className="signup--btn">
            Submit
          </button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Modal
