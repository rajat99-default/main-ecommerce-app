import axios from "axios";

import { useState, useEffect } from "react";



const Home = () => {

  const [mydata, setMydata] = useState([]);

  // const dispatch= useDispatch();


  const loadData = () => {
    let url = "http://localhost:4000/products";
    axios.get(url).then((res) => {
      setMydata(res.data);
    })
  }

  useEffect(() => {
    loadData();
  }, []);

  const productAns = mydata.map((key) => {
    return (
      <div id="proitems"> {/* Add container div */}
        <img src={"images/" + key.image} />
        <br />
        <div id="product-details"> {/* Container for name and price */}
          <p id="biketype" >{key.type}</p>
          <br />
          <p id="bikename" >{key.name}</p>
          <br />
          <div id="bikestars" ><i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
          </div>
          <p id="bikeprice" >{key.price}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <div>
        <h1 id="subtitle" >Kryo X26 <br /> MTB</h1>
        <div id="allspecs"  >

          <div id="specifications">
            Specifications :
          </div>
          <div id="specs">

            <div>
              <i id="bullseye" class="fa fa-bullseye" aria-hidden="true"></i>
              Lightweight 18" Frame
            </div>
            <div>
              <i id="bullseye" class="fa fa-bullseye" aria-hidden="true"></i>
              Steel Suspension Fork
            </div>
            <div>
              <i id="bullseye" class="fa fa-bullseye" aria-hidden="true"></i>
              Steel Hardtail Frame
            </div>
          </div>
        </div>

        <img id="bgImage" src="/images/backgroundImage.jpg" alt="" />
        <div id="blackdiv" />
        <br />
        <div id="reddiv" />
      </div>
      <button id="buynow" >
        Buy Now
      </button>

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
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Officia deserunt mollit
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Excepteur sint occaecat

          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Sunt in culpa qui
          </div>

        </div>

        <div id="rightmountain">
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Sunt in culpa qui
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Steel Suspension Fork
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Steel Hardtail Frame
          </div>
        </div>

        <button id="explorenow" >EXPLORE NOW</button>

      </div>


      <div id="parallax2"  >
        <h2 id="discollection" >Discover The Collection
        </h2>

        <h1 id="mountainbike" >City Bikes</h1>

        <p id="mountainpara" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit <br />
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>

        <div id="mountainbikespecs">
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Officia deserunt mollit
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Excepteur sint occaecat

          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Sunt in culpa qui
          </div>

        </div>

        <div id="rightmountain">
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Sunt in culpa qui
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Steel Suspension Fork
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Steel Hardtail Frame
          </div>
        </div>

        <button id="explorenow" >EXPLORE NOW</button>
      </div>


      <div id="parallax3"  >
        <h2 id="discollection" >Discover The Collection
        </h2>

        <h1 id="mountainbike" >Speciality Bikes</h1>

        <p id="mountainpara" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit <br />
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>

        <div id="mountainbikespecs">
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Officia deserunt mollit
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Excepteur sint occaecat

          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Sunt in culpa qui
          </div>

        </div>

        <div id="rightmountain">
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Sunt in culpa qui
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Steel Suspension Fork
          </div>
          <div>
            <i id="bullseye" style={{ color: '#df453e' }} class="fa fa-bullseye" aria-hidden="true"></i>
            Steel Hardtail Frame
          </div>
        </div>

        <button id="explorenow" >EXPLORE NOW</button>
      </div>
      <center>

        <h1 id="whychoose">Why Choose KRYO?</h1>
      </center>


      <center>

        <div id="kryo1div" >
          <div > <h1 id="lightweight">Light weight</h1>
            <p id="kryo1para">
              Lorem ipsum dolor sit amet, consectetur adipiscing.<br/>  Ut elit tellus, 
          luctus nec ullamcorper mattis, pulvinar.</p>
            <img id="kryo1" src="/images/specification1.jpg" />

          </div>
          <div > <img id="kryo2" src="/images/specification2.jpg" /> </div>
        </div>
      </center>


    </>
  );
};

export default Home
