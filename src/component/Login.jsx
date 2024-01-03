import {useContext} from 'react'
import { AuthContext } from '../Context'
import { Link} from 'react-router-dom'

const Login = () => {
 const { handleInputChange, credentials, handleUserLogin, } =
   useContext(AuthContext)


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
              value={credentials.password1}
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
