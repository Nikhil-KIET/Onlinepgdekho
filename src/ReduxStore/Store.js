

import { configureStore } from "@reduxjs/toolkit";

import  HotelContext  from "./HotelSlice";


export const store=configureStore({

    reducer:{
        hotels:HotelContext,
    }
})