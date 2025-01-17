import Home from "./Home"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from "./Layout"
import Bicycles from "./Bicycles"
import Accessories from "./Accessories"
import CartItem from "./CartItem"
import Buynow from "./Buynow"
import PaymentDone from "./PaymentDone"
// import Slider from "./Slider"



const App = () => {
  return (
    <>

   

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="home" element={<Home/>} />
          <Route path="bicycles" element={<Bicycles/>} />
          <Route path="accessories" element={<Accessories/>} />
          <Route path="cartitem" element={<CartItem/>} />
          <Route path="buynow" element={<Buynow/>} />
          <Route path="paydone" element={<PaymentDone/>}  />
          
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App