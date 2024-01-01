import {useState,useEffect,createContext} from 'react'
import { eatry } from './data'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
 const [loading,setLoading]= useState(true)
 const [eatries,setEatries] = useState([])

useEffect(()=>{
 const restaurant = eatry.map((i, index) => (
   <div key={index} className='hover:shadow-md w-44 px-4 h-58 xsm:h-48 cursor-pointer '>
     <img src={i.image} alt="restaurant" className="w-48 pb-3" key={index} />
     <p className='text-center font-semibold text-yellow-600'>{i.name}</p>
     <p className='text-xs text-green-700 text-center'>{i.specialty}</p>
   </div>
 ))
 setEatries(restaurant)
setLoading(false)
},[])




 const contextData = {
  eatries
 }
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <h1>Loading...</h1> : children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
export {AuthContext}