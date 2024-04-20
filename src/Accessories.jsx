import React from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import axios from "axios";

import { useState, useEffect } from "react";

const Accessories = () => {
    const [mydata2, setMydata2] = useState([]);
    const [sliderValue, setSliderValue] = useState(50);


    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    const loadData2 = () => {
        let url = "http://localhost:4000/accessories";
        axios.get(url).then((res) => {
          setMydata2(res.data);
        })
      }

    useEffect(() => {
        loadData2();

    }, []);


    const productAns2a = mydata2.map((key) => {
        return (
          <div id="proitems1a"> {/* Add container div */}
            <img src={"images/" + key.image1} />
            <br />
            <div id="product-details1a"> {/* Container for name and price */}
              <p id="biketype1a" >{key.type1}</p>
              <br />
              <p id="bikename1a" >{key.name1}</p>
              <br />
              <div id="bikestars1a" ><i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </div>
              <p id="bikeprice1a" >{key.price1}</p>
              <div id="sizesa" >
    
                <button id="La" >&nbsp;L&nbsp;</button>
                <button>&nbsp;M&nbsp;</button>
                <button id="xla" >XL</button>
              </div>
            </div>
          </div>
        );
      });

    return (
        <>


            <div  >

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

                    <i id="cartlogob" class="fa fa-shopping-cart" aria-hidden="true"></i>

                </div>

                <div id='mainbodybicycle'  >

                </div>


                <div id='searchbicycles' >
                    <div id='searchbicyclesname' >
                        Search
                    </div>
                    <input id="searchbicyclesbox" type="text" placeholder="Search products..." />
                    <button id="searchall" ><i class="fa fa-search" aria-hidden="true"></i></button>


                </div>
                <div id='filterb' >
                    <h1 id='filterbheading' >Filter by price</h1>


                    <div className="slidecontainer">

                        <input
                            type="range"
                            min="1"
                            max="100"
                            value={sliderValue}
                            className="slider"
                            id="myRange"
                            onChange={handleSliderChange}
                        />
                    </div>


                    <p>Value: {sliderValue}</p>
                </div>

                <div id='filterbycat' >
                    <h2 id='filterbycatpara1'  >filter by categories</h2>
                    <div id='filterbycatpara2' >Accessories (4)</div>
                    <div id='filterbycatpara3'  >Bicycles (4)</div>
                </div>

                <div id='showbikes'>
                    <Link id='bicycletohome' to="/home">Home</Link>
                    <div id='bicycletobicycle'  >/ Accessories</div>
                    <h1 id='bicyclesheading'>
                    Accessories
                    </h1>

                    <div id='showingresults'  >
                        Showing all 4 results
                    </div>

                    <select id='sortfilter'  >
                        <option>Default Sorting</option>
                        <option>Sort by price : low to high</option>
                        <option>Sort by price : high to low</option>
                    </select>

                    <div id="productsb">
                        {productAns2a}
                    </div>
                </div>



                <footer>
                    <div id="footerba"  >

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

                        <hr id="footerline" />

                        <div id="copyright"  >Copyright © 2024 Cycle Shop</div>
                        <div id="socials" >

                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                        </div>


                    </div>
                </footer>


            </div>
        </>
    );
}

export default Accessories;