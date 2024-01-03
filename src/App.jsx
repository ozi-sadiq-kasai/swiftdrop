import Navbar from './component/Navbar'
import Orders from './page/Orders'
import Home from './page/home'
import AuthProvider from './Context'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import OrderItems from './page/OrderItems'
import Modal from './component/Modal'
import Login from './component/Login'
import Payment from './page/Payment'
import PrivateRoutes from './component/PrivateRoutes'

function App() {
  return (
    <Router>
      <AuthProvider>
     <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OrderPlaces/:id" element={<OrderItems />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/signup" element={<Modal />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes/>}>
            <Route path="/payment" element={<Payment />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
