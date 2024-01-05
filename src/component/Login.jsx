import {useContext,useEffect} from 'react'
import { AuthContext } from '../utils/Context'
import { Link,useNavigate} from 'react-router-dom'

const Login = () => {
 const { handleInputChange, credentials, handleUserLogin, user} =
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
        <p className="modalContainer--header">Sigin In</p>
        <form
          className="modalForm"
          onSubmit={(e) => handleUserLogin(e, credentials)}
        >
          <input
            value={credentials.email}
            onChange={handleInputChange}
            name="email"
            placeholder="Enter email"
          />
          <input
            type="password"
            value={credentials.password}
            onChange={handleInputChange}
            name="password"
            placeholder="Enter password"
            className="login--password"
          />
          <button
            type="submit"
            className="signup--btn bg-green-700 py-1 px-6 rounded-md"
          >
            Submit
          </button>
        </form>
        <p className="text-xs text-center py-3">
          Don't have an account?{' '}
          <Link to="/signup" className="text-yellow-500">
            Signup
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
