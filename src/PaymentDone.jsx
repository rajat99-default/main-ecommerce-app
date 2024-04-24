import Loader from "./Loader";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {cartEmpty} from "./CartSlice";
const PaymentDone=()=>{
    const [isLoading, setIsLoading]= useState(true);

    const dispatch = useDispatch();

    useEffect(()=>{
         setTimeout(()=>{
            setIsLoading(false);
         }, 4000);

         dispatch(cartEmpty());
    }, []);
    
    return(
        <>
        
        <br />
        <br/>
        <br/>
 
     {  isLoading ?  <div style={{margin:"auto", width:"200px"}}>
        <h1 style={{color:'#df453e'}}>  Processing </h1>
        <   Loader/> 
        </div>   : (

         
<h1 style={{fontFamily:'sans-serif',color:'#df453e'}}  align="center"> Payment Successfull <br/>
Order Will arrive within 7 business days</h1>

     ) }
         
         
        
        
        </>
    )
}

export default PaymentDone;