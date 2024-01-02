import { createContext,useState } from "react"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
 const [modal, setModal] = useState(false)
 const [credentials, setCredentials] = useState({
   lname: '',
   fname: '',
   email: '',
   phone:'',
 })

 const handleCloseModal = ()=>{
  setModal(false)
  console.log(modal)
 }
 // const handleOpenModal = ()=>{
 //  setModal(true)
 // }


 // handle input value
 const handleInputChange = (e) => {
   e.preventDefault()
   let name = e.target.name
   let value = e.target.value
   setCredentials({ ...credentials, [name]: value })
   console.log(credentials)
 }
 const contextData ={
  handleCloseModal,
   handleInputChange,
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