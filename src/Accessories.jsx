import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addAccessoryToCart } from "./CartSlice";

const Accessories = () => {
    const [mydata2, setMydata2] = useState([]);
    const [sliderValue, setSliderValue] = useState(20);
    const [sortOption, setSortOption] = useState("default");

    const dispatch= useDispatch();

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

    const loadData2 = () => {
        let url = "http://localhost:4000/accessories";
        axios.get(url).then((res) => {
            setMydata2(res.data);
        })
    }

    useEffect(() => {
        loadData2();
    }, []);

    const handleSortChange = (event) => {
        const option = event.target.value;
        setSortOption(option);
        let sortedData = [...mydata2];
        if (option === "lowToHigh") {
            sortedData.sort((a, b) => a.price1 - b.price1);
        } else if (option === "highToLow") {
            sortedData.sort((a, b) => b.price1 - a.price1);
        }
        setMydata2([...sortedData]); // Update state with the sorted array
    };

    const productAns2a = mydata2.map((key) => {
        return (
            <div id="proitems1a" key={key.id}>
                <img id='accessorieimage' src={"images/" + key.image1} alt={key.name1} />
                <br />
                <div id="product-details1a">
                    <p id="biketype1a">{key.type1}</p>
                    <br />
                    <p id="bikename1a">{key.name1}</p>
                    <br />
                    <div id="bikestars1a">
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <p id="bikeprice1a">${key.price1}</p>
                    <button onClick={()=>{dispatch(addAccessoryToCart({id1:key.id1, name1:key.name1, price1:key.price1, image1:key.image1, type1:key.type1 }))}}  id="addtocarta" >ADD TO CART</button>
                    <div id="sizesa">
                        <button id="La">&nbsp;L&nbsp;</button>
                        <button>&nbsp;M&nbsp;</button>
                        <button id="xla">XL</button>
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
                    <input id="searchbicyclesbox" type="text" placeholder="Search products..." />
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
                    <div id='bicycletobicycle'  >/ Accessories</div>
                    <h1 id='bicyclesheading'>
                        Accessories
                    </h1>

                    <div id='showingresults'  >
                        Showing all 4 results
                    </div>

                    <select id='sortfilter' value={sortOption} onChange={handleSortChange}>
                        <option value="default">Default Sorting</option>
                        <option value="lowToHigh">Sort by price: low to high</option>
                        <option value="highToLow">Sort by price: high to low</option>
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

export default Accessories;
