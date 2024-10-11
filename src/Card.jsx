import { FcLikePlaceholder } from "react-icons/fc";
import { IoBedSharp } from "react-icons/io5";
import { MdBathroom } from "react-icons/md";
import { FaSquare } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import './Card.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
import { number } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fav } from "./ReduxStore/HotelSlice";
import { NavLink } from "react-router-dom";

export default function Card({hotel}) {

    const dispatch =useDispatch();

    console.log("rerender");

    const favdata=useSelector((state)=>state.hotels.fav);


    return (
        <NavLink to={`/details/${hotel.hotel_id}`} >
            <div className="card border overflow-hidden w-[320px] object-contain rounded-lg  hover:scale-[1.04] transition-all duration-300 hover:shadow-lg  ">

<Swiper navigation={true} modules={[Navigation]} className="mySwiper overflow-hidden h-[200px]">




        <SwiperSlide className="img"> <img className="img" src={hotel.photo1} alt="" /></SwiperSlide>
        <SwiperSlide className="img"><img src={hotel.photo2} alt="" /></SwiperSlide>
        <SwiperSlide className="img"><img src={hotel.photo3} alt="" /></SwiperSlide>
        <SwiperSlide className="img"><img src={hotel.photo4} alt="" /></SwiperSlide>
        <SwiperSlide className="img"><img src={hotel.photo5} alt="" /></SwiperSlide>
        <SwiperSlide className="img"><img src="https://t3.ftcdn.net/jpg/00/62/13/24/360_F_62132429_pw8W4rc1qLlCAP9SS9pPFDZyyPJZHwpw.jpg" alt="" /></SwiperSlide>
       
      </Swiper>






            
            <div className=" p-1 px-2 relative space-y-3 flex-col  flex items-center  ">
                <p className=" text-blue-600  font-semibold text-md">{hotel.hotel_name.substring(0,30)}</p>
                
               <div className=" absolute right-3 top-5   ">
                {
                    favdata.some((h)=>h.hotel_id===hotel.hotel_id)?( <div>

< FcLike  onClick={()=>{
                dispatch(fav(hotel))
                console.log(hotel.hotel_id)
               }}> </FcLike>

                    </div>):(<div>
                        < FcLikePlaceholder  onClick={()=>{
                dispatch(fav(hotel))
                console.log(hotel.hotel_id)
               }}> </FcLikePlaceholder>
                        
                         </div>)
                }



             
               </div>
                <p  className=" self-start self-top text-zinc-400 "> <span className=" text-blue-600 font-bold text-xl  ">${parseInt(hotel.zipcode)===0 ?("100"):parseInt(hotel.zipcode)}</span> /month</p>

                <p >{hotel.overview.substring(0,100)}...</p>

                <div className='h-[2px] bg-black  w-[90%]'   ></div>

                <div className=" flex justify-between gap-4  ">
                    <div className=" flex gap-2 items-center">
                        <IoBedSharp />
                       
                        <span>Beds</span>
                        

                    </div>

                    <div className=" flex gap-2 items-center">
                        <MdBathroom />
                        <p>Bathrooms</p>

                    </div>

                    <div className=" flex gap-2 items-center">
                        <FaSquare />
                        <p>8x10 m</p>

                    </div>
                </div>
            </div>




        </div>
            
        </NavLink>

    
        
    )
}