import { createContext, useState } from 'react'
import { account } from './appwriteConfig'
import { useNavigate } from 'react-router-dom'
import { ID } from 'appwrite'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const [user, setUser] = useState(null)
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  })
  // handle close modal
  const handleCloseModal = () => {
    setModal(false)
    console.log(modal)
  }

  //handle inputChange
  const handleInputChange = (e) => {
    e.preventDefault()
    let name = e.target.name
    let value = e.target.value
    setCredentials({ ...credentials, [name]: value })
    console.log(credentials)
  }

  //handle Userlogin
  const handleUserLogin = async (e) => {
    e.preventDefault()
    try {
      let response = await account.createEmailSession(
        credentials.email,
        credentials.password
      )
      console.log('logged', response)
      const accountDetails = account.get()
      setUser(accountDetails)
      navigate('/payment')
    } catch (error) {
      console.error(error)
    }
  }

  // handle userSignup
  const handleSignupLogin = async (e, credentials) => {
    e.preventDefault()
    try {
      let response = await account.create(
        ID.unique(),
        credentials.email,
        credentials.password,
        credentials.name
      )

      await account.createEmailSession(credentials.email, credentials.password)

      const accountDetails = await account.get()
      setUser(accountDetails)
      setCredentials({
        name: '',
        email: '',
        password: '',
      })
    } catch (error) {
      console.error(error)
    }
  }

  const contextData = {
    handleCloseModal,
    handleSignupLogin,
    setModal,
    user,
    modal,
    handleUserLogin,
    handleInputChange,
    credentials,
  }
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}
export default AuthProvider

export { AuthContext }
