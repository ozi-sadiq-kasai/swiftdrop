import { Outlet, Navigate } from 'react-router-dom'

const Payment = () => {
  const user = false
  return user ? <Outlet /> : <Navigate to="/signup" />
}
export default Payment
