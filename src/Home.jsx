import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { addBicycleToCart,addAccessoryToCart } from "./CartSlice";



const Home = () => {

  const [mydata, setMydata] = useState([]);
  const [mydata2, setMydata2] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);

  const dispatch= useDispatch();


  const loadData = () => {
    let url = "http://localhost:4000/products";
    axios.get(url).then((res) => {
      setMydata(res.data);
    })
  }
  const loadData2 = () => {
    let url = "http://localhost:4000/accessories";
    axios.get(url).then((res) => {
      setMydata2(res.data);
    })
  }

  useEffect(() => {
    loadData();
    loadData2();
  }, []);


const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  



  const productAns = mydata.map((key,index) => {
    return (
      <div id="proitems" key={index}  >
        
        <div className="image-container" onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative' }}
          >
            <img src={"images/" + key.image} alt={`Product ${index}`} />
            {hoveredItem === index && (

              <Link   >
              
              <i onClick={()=>{dispatch(addBicycleToCart({id:key.id, name:key.name, price:key.price, image:key.image, type:key.type }))}}   className="fa fa-shopping-cart" aria-hidden="true"  style={{ position: 'absolute', marginLeft:'-40px',marginTop:'20px' , color:'white',scale:'2' }} ></i>
              </Link>
            )}
          </div>
        <br />
        <div id="product-details"> {/* Container for name and price */}
          <p id="biketype" >{key.type}</p>
          <br />
          <p id="bikename" >{key.name}</p>
          <br />
          <div id="bikestars" ><i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </div>
          <p id="bikeprice" >${key.price}</p>
        </div>
      </div>
    );
  });
  const productAns2 = mydata2.map((key, index) => {
    return (
      <div id="proitems1" key={index}> {/* Add key prop */}
        <div className="image-container" onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{ position: 'relative' }}
        >
          <img src={"images/" + key.image1} alt={`Product ${index}`} />
          {hoveredItem === index && (
          
              <i onClick={() => { dispatch(addAccessoryToCart({ id1: key.id1, name1: key.name1, price1: key.price1, image1: key.image1, type1: key.type1 })) }} className="fa fa-shopping-cart" aria-hidden="true" style={{ position: 'absolute', marginLeft: '-40px', marginTop: '20px', color: 'black', scale: '2' }}></i>
            
          )}
        </div>
        <br />
        <div id="product-details1"> {/* Container for name and price */}
          <p id="biketype1">{key.type1}</p>
          <br />
          <p id="bikename1">{key.name1}</p>
          <br />
          <div id="bikestars1">
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </div>
          <p id="bikeprice1">${key.price1}</p>
          <div id="sizes">
            <button id="L">&nbsp;L&nbsp;</button>
            <button>&nbsp;M&nbsp;</button>
            <button id="xl">XL</button>
          </div>
        </div>
      </div>
    );
  });
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
    <Link to="/cartitem" id="cartlogo">
      <i className="fa fa-shopping-cart" aria-hidden="true" />
    </Link>




      <div>
        <h1 id="subtitle" >Kryo X26 <br /> MTB</h1>
        <div id="allspecs"  >

          <div id="specifications">
            Specifications :
          </div>
          <div id="specs">

            <div>
              <i id="bullseye" className="fa fa-bullseye" aria-hidden="true"></i>
              Lightweight 18" Frame
            </div>
            <div>
              <i id="bullseye" className="fa fa-bullseye" aria-hidden="true"></i>
              Steel Suspension Fork
            </div>
            <div>
              <i id="bullseye" className="fa fa-bullseye" aria-hidden="true"></i>
              Steel Hardtail Frame
            </div>
          </div>
        </div>

        <img id="bgImage" src="/images/backgroundImage.jpg" alt="" />
        <div id="blackdiv" />
        <br />
        <div id="reddiv" />
      </div>

      <Link to='/buynow' >
      
      <button id="buynow" >
        Buy Now
      </button>
      </Link>

      <center>

        <h1 id="newarrivals">New Arrivals</h1>

        <div id="products">
          {productAns}
        </div>

      </center>

      <div id="parallax">

        <h2 id="discollection" >Discover The Collection
        </h2>

        <h1 id="mountainbike" >Mountain Bikes</h1>

        <p id="mountainpara" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit <br />
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>

        <div id="mountainbikespecs">
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Officia deserunt mollit
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Excepteur sint occaecat

          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Sunt in culpa qui
          </div>

        </div>

        <div id="rightmountain">
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Sunt in culpa qui
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Steel Suspension Fork
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Steel Hardtail Frame
          </div>
        </div>

       

        <button onClick={() => window.scrollTo(0, 0)}  id="explorenow" >EXPLORE NOW</button>
      

      </div>


      <div id="parallax2"  >
        <h2 id="discollection" >Discover The Collection
        </h2>

        <h1 id="mountainbike" >City Bikes</h1>

        <p id="mountainpara" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit <br />
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>

        <div id="mountainbikespecs">
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Officia deserunt mollit
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Excepteur sint occaecat

          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Sunt in culpa qui
          </div>

        </div>

        <div id="rightmountain">
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Sunt in culpa qui
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Steel Suspension Fork
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Steel Hardtail Frame
          </div>
        </div>

        <button onClick={() => window.scrollTo(0, 0)}  id="explorenow" >EXPLORE NOW</button>
      </div>


      <div id="parallax3"  >
        <h2 id="discollection" >Discover The Collection
        </h2>

        <h1 id="mountainbike" >Speciality Bikes</h1>

        <p id="mountainpara" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit <br />
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>

        <div id="mountainbikespecs">
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Officia deserunt mollit
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Excepteur sint occaecat

          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Sunt in culpa qui
          </div>

        </div>

        <div id="rightmountain">
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Sunt in culpa qui
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Steel Suspension Fork
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} className="fa fa-bullseye" aria-hidden="true"></i>
            Steel Hardtail Frame
          </div>
        </div>

        <button onClick={() => window.scrollTo(0, 0)}  id="explorenow" >EXPLORE NOW</button>
      </div>
      <center>

        <h1 id="whychoose">Why Choose KRYO?</h1>
      </center>


      <center>

        <div id="kryo1div" >
          <div > <h1 id="lightweight">Light weight</h1>
            <p id="kryo1para">
              Lorem ipsum dolor sit amet, consectetur adipiscing.<br />  Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar.</p>
            <img id="kryo1" src="/images/specification1.jpg" />

          </div>

          <div id="kryo2div">

            <div >
              <h1 id="lightweight2">Lifetime Warranty</h1>
              <p id="kryo1para2">
                Lorem ipsum dolor sit amet, consectetur adipiscing.<br />  Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar.</p>

              <img id="kryo2" src="/images/specification2.jpg" /> </div>
          </div>
        </div>
      </center>


      <center>

        <div id="kryoidmediaquery"  >
          <div>
            <h2 id="kryo3para" >Biggest Service Network</h2>
            <img id="kryo3" src="/images/specification3.jpg" />
          </div>
          <div>
            <h2 id="kryo4para" >99% Assembled Delivery</h2>
            <img id="kryo4" src="/images/specification4.jpg" />
          </div>
          <div>
            <h2 id="kryo5para" >Free First Bike Service</h2>
            <img id="kryo5" src="/images/specification5.jpg" />
          </div>
        </div>



      </center>


      <center>
        <div>
          <h1 id="exploreaccess" >
            Explore Accessories
          </h1>
        </div>
        <div>
          <div id="productshelmet">
            {productAns2}
          </div>
        </div>
      </center>



      <center>

        <button  onClick={() => window.scrollTo(0, 0)}  id="viewall" >VIEW ALL</button>

      </center>

      <center >
        <div  >

          <h1 id="join" >Join #GoEcoBiking Programme</h1>
        </div>
      </center>


      <div>
        <img id="joinimage" src="/images/joinprogramme.jpg" />
      </div>

      <div id="joinpara"  >
        <h2 id="joinpara1"  >Duis aute irure dolor in
          <br />reprehenderit velit.</h2>
        <br />
        <p id="joinpara2" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
      </div>


      <button onClick={() => window.scrollTo(0, 0)}    id="joinprogramme" >JOIN THE PROGRAMME</button>

      <div id="parallax4">
        <div id="parallax4text"   >
          <center>

            <h2 id="parallax4h2"   >The All New</h2>
            <h1 id="parallax4h1"  >Kryo X26 MTB Is Here</h1>
            <p id="parallax4p"   >Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. className aptent taciti <br />  sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
<Link to='/bicycles'  >
            <button id="shopnow" >SHOP NOW</button>
</Link>

          </center>
        </div>
      </div>

      <footer>
        <div id="footer"  >

          <img id="hlogo" src="/images/logo-1.png" />

          <h2 id="usefulllinks"  >
            Usefull Links
          </h2>
          <h2 id="outcollections"  >
            Our Collection
          </h2>
          <h2 id="accounts"  >
            Account
          </h2>

          <div id="usefull" >

            <div>Home</div>
            <div>Shop</div>
            <div>About Us</div>
            <div>Contact Us</div>
          </div>

          <div id="bikesfooter"   >

            <div>Mountain Bikes</div>
            <div>City Bikes</div>
            <div>Speciality Bikes</div>
            <div>Electric Bikes</div>
          </div>

          <div id="Accountsfooter"  >

            <div>Customer Login</div>
            <div>Dealer Login</div>
            <div>Addresses</div>
            <div>Payment Methods</div>
          </div>

        <hr id="footerline"  />

        <div  id="copyright"  >Copyright © 2024 Cycle Shop</div>
<div id="socials" >

        <i className="fa fa-facebook-official" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        <i className="fa fa-youtube-play" aria-hidden="true"></i>
</div>


        </div>
      </footer>

    </>
  );
};

export default Home
