import { createContext,useState } from "react"
import { ID } from "appwrite"
import {account} from './appwriteConfig'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [modal, setModal] = useState(false)
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  })

  const handleCloseModal = () => {
    setModal(false)
  }

  // handle input value
  // const handleInputChange = (e) => {
  //   e.preventDefault()
  //   let name = e.target.name
  //   let value = e.target.value
  //   setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }))
  // }//handle inputChange
  const handleInputChange = (e) => {
    e.preventDefault()
    let name = e.target.name
    let value = e.target.value
    setCredentials({ ...credentials, [name]: value })
    // console.log(credentials)
  }

  // handle input submit
  // handle userSignup
  const handleSignupLogin = async (e, credentials) => {
    e.preventDefault()
    // if (credentials.password1 !== credentials.password2) {
    //   alert('Passwords do not match')
    // }
    try {
      let response = await account.create(
        ID.unique(),
        credentials.email,
        credentials.password1,
        credentials.name
      )

      console.log(response)

      await account.createEmailSession(credentials.email, credentials.password1)

      const accountDetails = await account.get()
      // console.log('accounDetails:',accountDetails)
      // console.log('accounDetails:',accountDetails.name)
      setUser(accountDetails)
      navigate('/')

      setCredentials({
        name: '',
        email: '',
        password1: '',
        password2: '',
      })
    } catch (error) {
      console.error(error)
    }
  }

  const contextData = {
    handleCloseModal,
    handleInputChange,
    handleSignupLogin,
    credentials,
    setModal,
    modal,
  }
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}
export default AuthProvider

export {AuthContext}