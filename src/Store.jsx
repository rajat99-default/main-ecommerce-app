import { configureStore } from '@reduxjs/toolkit';

import cartReducer from "./CartSlice";

const Store= configureStore({

    reducer:{
        mycart:cartReducer,
    }
});

export default Store;