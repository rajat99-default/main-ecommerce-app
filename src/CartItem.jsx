import {useSelector, useDispatch} from "react-redux";
import {addQTY, removeQTY, removeItem} from "./CartSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const CartItem = () => {
  const cartData = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
  const mynav = useNavigate();
  let netAmount = 0;

  const ans = cartData.map((key) => {
    netAmount += key.price * key.qnty;
    return (

      <>
      
      <tr id="maincartitems"  key={key.id}>
        <td> <   img src={"images/" + (key.image || key.image1)}  id="cartimage" /> </td>
        <td id="carttype"  > {key.type || key.type1} </td>
        <td  id="cartname" > {key.name || key.name1} </td>
        <td id="cartprice" > {key.price || key.price1} </td>
        <td id="cartqty" >
          <button id="cartqtyplus"  onClick={() => { dispatch(addQTY({ id: key.id })) }}> + </button>
          <span id="cartqtyqty" > {key.qnty} </span>
          <button id="cartqtyminus"  onClick={() => { dispatch(removeQTY({ id: key.id })) }}> - </button>
        </td>
        <td id="carttotalprice"  >
          {key.price * key.qnty}
        </td>
        <td>
          <button id="cartremoval"  onClick={() => { dispatch(removeItem(key.id)) }}>Remove</button>
        </td>
        
      </tr>
    

    <hr style={{width:'1200px',position:'absolute'}}  />
      
  </>
    )
  })

  const BuyNow = () => {
    mynav("/buynow");
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

        <i id="cartlogob" className="fa fa-shopping-cart" aria-hidden="true"></i>

      </div>


      <div id="mainbodycart"  >

        <div id="tablecart"  >
          <div id="tablecartheading">Cart</div>
          <table id="cartTable">
            <thead>
              <tr>
                
                <th  id="cartproduct" >Product</th>
                <th >Price</th>
                <th >Quantity</th>
                <th >Subtotal</th>
              </tr>
            </thead>
          </table>
            <tbody>{ans}</tbody>
        </div>

      </div>

      
        <button  id="buynow"  > Buy Now </button>
      
    </>
  )
}
export default CartItem;

  