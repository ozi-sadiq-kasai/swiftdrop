import { createContext,useState } from "react"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
 const [modal, setModal] = useState(false)

 const handleCloseModal = ()=>{
  setModal(false)
 }
 const handleOpenModal = ()=>{
  setModal(true)
 }
 const contextData ={
  handleCloseModal,
  handleOpenModal,
  modal
 }
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}
export default AuthProvider

export {AuthContext}