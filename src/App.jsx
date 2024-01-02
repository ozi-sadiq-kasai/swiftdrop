import Navbar from './component/Navbar'
import Orders from './page/Orders'
import Home from './page/home'
import AuthProvider from './Context'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import OrderItems from './page/OrderItems'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OrderPlaces/:id" element={<OrderItems />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
