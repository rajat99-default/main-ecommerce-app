import React from 'react'
import { Link } from 'react-router-dom'

const Buynow = () => {
  return (
    <>
      <div id='navbarbicycles' >

        <img id="logob" src="/images/logo-1.png" />


        <nav id="mainnavb">
          <ul>
            <li>
              <Link id="homeb" to="/home">HOME</Link>
            </li>
            <li>
              <Link id="bicyclesb" to="/bicycles">BICYCLES</Link>
            </li>
            <li>
              <Link id="accessoriesb" to="/accessories">ACCESSORIES</Link>
            </li>
            <li>
              <Link id="about-usb" to="/about-us">ABOUT US</Link>
            </li>
            <li>
              <Link id="contactb" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>

        <Link to="/cartitem" id="cartlogo">
          <i className="fa fa-shopping-cart" aria-hidden="true" />
        </Link>

      </div>

      <div>
        <input type='text' placeholder='Enter your name' style={{borderTop:'none',borderRight:'none',borderLeft:'none',borderBottom:'0.1px solid black',width:'800px',marginLeft:'70px',marginTop:'100px',fontSize:'20px'}} />
        <input type='text' placeholder='Enter Address' style={{borderTop:'none',borderRight:'none',borderLeft:'none',borderBottom:'0.1px solid black',width:'800px',marginLeft:'70px',marginTop:'30px',fontSize:'20px'}} />
      </div>

    </>
  )
}

export default Buynow