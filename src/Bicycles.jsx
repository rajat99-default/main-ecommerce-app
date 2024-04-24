import React from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import axios from "axios";
// import Search from './Search';

import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addBicycleToCart } from "./CartSlice";

const Bicycles = () => {
    const [mydata, setMydata] = useState([]);
    const [sliderValue, setSliderValue] = useState(20);


    const dispatch = useDispatch();

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
        updateSliderValueDisplay(event.target.value);
    };

    const updateSliderValueDisplay = (value) => {
        const slider = document.getElementById('myRange');
        const display = document.getElementById('sliderValueDisplay');
        const thumbWidth = slider.offsetWidth * (value - slider.min) / (slider.max - slider.min) - (display.offsetWidth / 2);
        display.style.left = `${thumbWidth}px`;
        display.textContent = `Value: ${value}`;
    };

    const loadData = () => {
        let url = "http://localhost:4000/products";
        axios.get(url).then((res) => {
            setMydata(res.data);
        })
    }

    useEffect(() => {
        loadData();

    }, []);


    const productAnsb = mydata.map((key) => {
        return (
            <div id="proitemsb"> 
                <img src={"images/" + key.image} />
                <br />
                <div id="product-detailsb"> 
                    <p id="biketypeb" >{key.type}</p>
                    <br />
                    <p id="bikenameb" >{key.name}</p>
                    <br />
                    <div id="bikestarsb" ><i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <p id="bikepriceb" >${key.price}</p>
                    <button onClick={() => { dispatch(addBicycleToCart({ id: key.id, name: key.name, price: key.price, image: key.image, type: key.type })) }} id="addtocartb" >ADD TO CART</button>
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

                    <Link to="/cartitem" id="cartlogo">
                        <i className="fa fa-shopping-cart" aria-hidden="true" />
                    </Link>

                </div>

                <div id='mainbodybicycle'  >

                </div>


                <div id='searchbicycles' >
                    <div id='searchbicyclesname' >
                        Search
                    </div>
                    <input   id="searchbicyclesbox" type="text" placeholder="Search products..." />
                    <button id="searchall" ><i className="fa fa-search" aria-hidden="true"></i></button>


                </div>
                <div id='filterb' >
                    <h1 id='filterbheading' >Filter by price</h1>


                    <div id="slidecontainer">
                        <input
                            type="range"
                            min="20"
                            max="350"
                            value={sliderValue}
                            className="slider"
                            id="myRange"
                            onChange={handleSliderChange}
                        />
                    </div>
                    <p id="sliderValueDisplay">{sliderValue}</p>

                    <div id='sliderstart'  >
                        $20
                    </div>
                    <div id='sliderend' >
                        $350
                    </div>

                </div>

                <div id='filterbycat' >
                    <h2 id='filterbycatpara1'  >filter by categories</h2>
                    <Link id='filterbycatpara2' to="/accessories">Accessories (6)</Link>
                    <Link id='filterbycatpara3' to="/bicycles">Bicycles (4)</Link>
                </div>

                <div id='showbikes'>
                    <Link id='bicycletohome' to="/home">Home</Link>
                    <div id='bicycletobicycle'  >/ Bicycles</div>
                    <h1 id='bicyclesheading'>
                        Bicycles
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
                        {productAnsb}
                    </div>
                </div>



                <footer>
                    <div id="footerb"  >

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

                            <i className="fa fa-facebook-official" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                        </div>


                    </div>
                </footer>


            </div>
        </>
    );
}

export default Bicycles;
