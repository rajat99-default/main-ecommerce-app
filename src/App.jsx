import Home from "./Home"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from "./Layout"
import Bicycles from "./Bicycles"


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="home" element={<Home/>} />
          <Route path="bicycles" element={<Bicycles/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App