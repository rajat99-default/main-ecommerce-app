import { Link, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';


const Layout = () => {
  return (
    <>

<img id="logo" src="/images/logo-1.png" />
<h1 id="brandname" >BikeHeaven.com</h1>

<nav id="mainnav">
      <ul>
        <li>
          <Link id="home" to="/home">HOME</Link>
        </li>
        <li>
          <Link id="bicycles" to="/bicycles">BICYCLES</Link>
        </li>
        <li>
          <Link id="accessories" to="/accessories">ACCESSORIES</Link>
        </li>
        <li>
          <Link id="about-us" to="/about-us">ABOUT US</Link>
        </li>
        <li>
          <Link id="contact" to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>

    <i id="cartlogo" class="fa fa-shopping-cart" aria-hidden="true"></i>

      <Outlet/>
    
    
    </>
  )
}

export default Layout