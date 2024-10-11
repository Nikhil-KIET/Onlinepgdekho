import { data } from "../hotel";
import { createSlice } from "@reduxjs/toolkit";
import { kiet } from "../kiet";

const initialState = {
    hotels: data,
    fav:[],
    type:'all'
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
                    if(state.type=="all"){

                    
                        state.hotels=data.filter( h=>h.state.toLowerCase()===val.city.toLowerCase()  )}else{
                            state.hotels=kiet.filter( h=>h.state.toLowerCase()===val.city.toLowerCase()  )
                        }

                    
                }else{
                    if(state.type=="all"){

                    
                    state.hotels=data}else{
                        state.hotels=kiet
                    }


                }
                console.log("city->->->-.",JSON.stringify(state.hotels))
                if(val.price!=="all"){
                    state.hotels=state.hotels.filter( h=>Number(h.zipcode)>= val.price.split("-")[0]  &&  Number(h.zipcode)<= val.price.split("-")[1])
                }
                console.log("price->->->-.-.",JSON.stringify(state.hotels))

               
                return state;
                

            


            },
            witch:(state,action)=>{
                if(action.payload==='all'){
                    state.hotels=data;
                    state.type="all"
                    
                }else{
                    state.hotels=kiet;
                    state.type="kiet"

                }
                return state;
            }


            

        }

    }


 );
 export const { fav,search,witch} = HotelContext.actions;
export default HotelContext.reducer;

