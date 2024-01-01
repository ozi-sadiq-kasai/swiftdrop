import {useContext} from 'react'
import { AuthContext } from '../Context'

const OrderPlaces = () => {
 const {eatries} = useContext(AuthContext)
  return (
    <div className='flex gap-4 items-center my-12 xsm:mx-2 justify-around '>
    {eatries}
    </div>
  )
}
export default OrderPlaces
