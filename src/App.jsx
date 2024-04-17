import Home from "./Home"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from "./Layout"


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App