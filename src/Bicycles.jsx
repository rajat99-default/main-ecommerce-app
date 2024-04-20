import React from 'react';
import { Link } from 'react-router-dom';

const Bicycles = () => {
    return (
        <>


<div id='mainbodybicycle'  >

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
</div>
        </>
    );
}

export default Bicycles;
