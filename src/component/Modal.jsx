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
      <p 
      onClick={() => setModal(false)}
      className='cursor-pointer text-red-900 font-extrabold'
      >
       Close
      </p>
      <div className="modalContainer">
          <h1 className="modalContainer--header">Sign Up</h1>
        <form 
        className="modalForm"
        onSubmit={(e) => handleSignupLogin(e, credentials)}>
            <input
              value={credentials.name}
              onChange={handleInputChange}
              type="text"
              name="name"
              placeholder='Name'
            />
            <input
              value={credentials.email}
              onChange={handleInputChange}
              type="email"
              name="email"
              placeholder='Email...'
            />
            <input
              value={credentials.password}
              onChange={handleInputChange}
              type="password"
              name="password"
              placeholder="Enter Password..."
            />

          <button type="submit" className="signup--btn bg-green-700 py-1 px-6 rounded-md">
            Submit
          </button>
        </form>

        <p className='text-xs text-center py-3'>
          Already have an account? <Link to="/login" className='text-yellow-500'>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Modal
