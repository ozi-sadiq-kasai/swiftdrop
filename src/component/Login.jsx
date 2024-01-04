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
    <div className="">
      <div className="login-register-container">
        <form onSubmit={(e) => handleUserLogin(e, credentials)}>
          <div className="mt-64">
            <label>Email:</label>
            <input
              value={credentials.email}
              onChange={handleInputChange}
              name="email"
              placeholder="Enter email"
            />
          </div>

          <div className="form-field-wrapper">
            <label>Password:</label>
            <input
              type="password"
              value={credentials.password}
              onChange={handleInputChange}
              name="password"
              placeholder="Enter password"
              className="login--password"
            />
          </div>

          <button type="submit" className="login--btn">
            Submit
          </button>
        </form>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
