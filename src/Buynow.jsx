import React from 'react'
import { Link } from 'react-router-dom'
import CashOnDelivery from "./CashOnDelivery";
import Upi from "./Upi";
import Card from "./Card";
import Banking from "./Banking";
import { useState } from "react";

import { useNavigate } from "react-router-dom";


const Buynow = () => {

  const [paymethod, setPaymethod] = useState("");
  const navigate = useNavigate();

  const handlePayMethod = (e) => {
    let method = e.target.value;

    if (method === "cashPay") {
      setPaymethod(<CashOnDelivery />)
    }
    if (method === "UPIPay") {
      setPaymethod(<Upi />)
    }
    if (method === "CardPay") {
      setPaymethod(<Card />)
    }
    if (method === "BankingPay") {
      setPaymethod(<Banking />)
    }

  }


  const paymentDone = () => {

    navigate("/paydone");
  }


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
        <input type='text' placeholder='Enter Your Name' id='EnterName'  />
        <br/>
        <input type='text' placeholder='Enter Phone Number' id='EnterPhone'  />
        <br/>
        <input type='text' placeholder='Enter Zip Code' id='EnterZip'  />
        <br/>
        <input type='text' placeholder='Enter State/Province' id='EnterState'  />
        <br/>
        <input type='text' placeholder='Enter Address' id='EnterAdd'  />
        <br/>
      </div>


      <div id='wholePayment'  >

        
          <h1 id='SelectPayment'  > Select Your Payement Method</h1>
      </div>

      <div id='wholePayment2'  >

          <input type="radio" name="m1" value="cashPay" onClick={handlePayMethod} /> Cash On Delivery
          <br/>
          <input type="radio" name="m1" value="UPIPay" onClick={handlePayMethod} /> UPI/Phone Pe
          <br/>
          <input type="radio" name="m1" value="CardPay" onClick={handlePayMethod} /> Credit/Debit Card
          <br/>
          <input type="radio" name="m1" value="BankingPay" onClick={handlePayMethod} /> Internet Banking
          <br/>
      </div>
          

          {paymethod}

        

     
        <button id='makePayment'
          onClick={() => { paymentDone() }}

        > Make Payment</button>
   



    </>
  )
}

export default Buynow