
import { createSlice } from '@reduxjs/toolkit';
const initialState={
    cart:[]
}
const CartSlice= createSlice({
    name:"mycart",
    initialState:initialState,
    reducers: {
        addBicycleToCart: (state, action) => {
            const { id, name, price, image, type } = action.payload;
            
         
            const existingProduct = state.cart.find((item) => item.id === id);
            if (existingProduct) {
                alert("Product already added!");
            } else {
               
                state.cart.push({ id, name, price, image, type, qnty: 1 });
            }
        },
    
        addAccessoryToCart: (state, action) => {
            const { id1, name1, price1, image1, type1 } = action.payload;
    
            const existingProduct = state.cart.find((item) => item.id1 === id1);
            if (existingProduct) {
                alert("Product already added!");
            } else {
           
                state.cart.push({ id1, name1: name1, price1: price1, image1: image1, type1: type1, qnty1: 1 });
            }
        },
    
    

        addQTY:(state, action)=>{
            let id=action.payload.id;
           
           for (var i=0; i<state.cart.length; i++)
           {
            if (state.cart[i].id==id)
            {
                state.cart[i].qnty++;
            }
           }

        },
        removeQTY:(state, action)=>{
            let id=action.payload.id;
           
           for (var i=0; i<state.cart.length; i++)
           {
            if (state.cart[i].id==id)
            {
                if (state.cart[i].qnty<=1)
                {
                    alert("atlest one product necessary!!");
                }
                else 
                {
                state.cart[i].qnty--;
                }
            }
           }

        },

       removeItem:(state, action)=>{
          state.cart=state.cart.filter((item)=>item.id!=action.payload);
       },

       cartEmpty:(state)=>{
        state.cart=[];
       }
    }
});

export const {addAccessoryToCart,addBicycleToCart, addQTY, removeQTY, removeItem, cartEmpty}= CartSlice.actions;
export default CartSlice.reducer;