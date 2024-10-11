import { data } from "../hotel";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hotels: data,
    fav:[]
};

 export const HotelContext=createSlice(
    {
        name:'hotels',
        initialState,
        reducers:{
            fav:(state,action)=>{
                let id=action.payload.hotel_id
                
                
                let hotel=state.fav.find(hotel=>hotel.hotel_id===id)
                console.log(JSON.stringify(state.fav))
                
                if(hotel){
                    state.fav=state.fav.filter(hotel=>hotel.hotel_id!==id)
                }else{
                    state.fav.push(action.payload)
                }
                return state
                


            },
            search:(state,action)=>{
                let val=action.payload
                console.log(val);
                if(val.city!=="all"){
                    state.hotels=data.filter( h=>h.state.toLowerCase()===val.city.toLowerCase()  )
                }else{
                    state.hotels=data

                }
                console.log("city->->->-.",JSON.stringify(state.hotels))
                if(val.price!=="all"){
                    state.hotels=state.hotels.filter( h=>Number(h.zipcode)>= val.price.split("-")[0]  &&  Number(h.zipcode)<= val.price.split("-")[1])
                }
                console.log("price->->->-.-.",JSON.stringify(state.hotels))

               
                return state;
                

            


            }

            

        }

    }


 );
 export const { fav,search } = HotelContext.actions;
export default HotelContext.reducer;

