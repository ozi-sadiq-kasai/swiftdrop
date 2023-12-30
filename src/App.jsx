import Navbar from './component/Navbar'
import Orders from './page/Orders'
import Home from './page/home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders/>} />
      </Routes>
    </Router>
  )
}

export default App
