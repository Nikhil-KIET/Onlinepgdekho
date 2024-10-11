import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import { useState } from "react";
import { witch } from "./ReduxStore/HotelSlice";

export default function Hotels() {


    const data = useSelector((state) => state.hotels.hotels)
    const type=useSelector((state)=>state.hotels.type)

    const [search, setSearch] = useSearchParams();
    const searchParams = search.get('fav')

    let dispatch=useDispatch();
   





    return (

        <div className=" md:flex md:flex-wrap md:justify-start w-[100%] md:gap-14  gap-y-5   py-5  h-[100%]   ">
            <div className=" flex gap-4">

            <h1 className=" text-4xl font-semibold w-[100%] h-auto self-start  ">Search properties to rent</h1>


            <div className=" flex">
            <button className=" px-4 py-2 rounded-md bg-slate-500 text-white rounded-md  mx-2 transition-all duration-500 " style={type==='all' ? {backgroundColor:"blue"}:null} onClick={() => {
                    dispatch(witch("all"));
                }} >All</button>

                <button className=" px-4 py-2 rounded-md bg-slate-500 text-white rounded-md   transition-all duration-500 " style={type==='kiet'? {backgroundColor:"blue"}:null} onClick={() => {
                    dispatch(witch("kiet"))
                }} >Kietien</button>
            </div>
            </div>
            
            
            <Filter></Filter>






            {data.length == 0 ? <p className=" flex mx-auto h-[500px]  items-center text-blue-500 font-extrabold text-2xl">No Hotels Avilable In This Region</p> :

            (
                data.map((hotel) => (
                    <Card hotel={hotel}></Card>
                ))

            )


                
            }




        </div>
    )
}