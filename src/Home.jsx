import axios from "axios";

import { useState , useEffect} from "react";



const Home = () => {

  const [mydata, setMydata]=useState([]);

  // const dispatch= useDispatch();
  

const loadData=()=>{
  let url="http://localhost:4000/products";
  axios.get(url).then((res)=>{
      setMydata(res.data);
  })
}

useEffect(()=>{
   loadData();
}, []);

const productAns = mydata.map((key) => {
  return (
    <div id="proitems"> {/* Add container div */}
      <img src={"images/" + key.image}  />
      <br/>
      <div id="product-details"> {/* Container for name and price */}
        <p id="biketype" >{key.type}</p>
      <br/>
        <p id="bikename" >{key.name}</p>
      <br/>
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
        <h1 id="subtitle" >Kryo X26 <br/> MTB</h1>
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
        <i id="bullseye"  class="fa fa-bullseye" aria-hidden="true"></i>
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





    </>
  );
};

export default Home
