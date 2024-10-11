import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

export default function Details(){

    let data=useSelector((state)=>state.hotels)
    let location =useLocation();
    let id=location.pathname.split("/").at(-1)


    let curr=data.hotels.find((h)=>h.hotel_id==id)
    let hotel=curr;
    console.log(curr);



    return(
        <div className="w-[80%] flex flex-col items-center  pb-5  ">

            <h1 className= " self-start text-3xl font-bold p-4 text-blue-700 " >{hotel.hotel_name} <span>&nbsp; &nbsp;</span><span style={hotel.rating_average < 5 ? {color:"red"}:hotel.rating_average > 5 && hotel.rating_average < 7 ?{color:"red"}:{color:"green"}}  >{hotel.rating_average}</span>   </h1>

            <div className=" grid grid-cols-4 grid-rows-2 object-cover gap-2 w-[100%] h-[500px] rounded-2xl overflow-hidden ">
                <img className=" row-span-2 col-span-2 w-[100%] h-[100%]  " src={hotel.photo1} alt="" />
                <img className="w-[100%] h-[100%]" src={hotel.photo2} alt="" />
                <img className="w-[100%] h-[100%]" src={hotel.photo3} alt="" />
                <img className="w-[100%] h-[100%]" src={hotel.photo4} alt="" />
                <img className="w-[100%] h-[100%]" src={hotel.photo5} alt="" />
                
                

            </div>
            <br />
            <br />
            <h1 className=" self-start text-xl font-semibold pb-2">
                About The Hotel
            </h1>

            {
                

                
                <p>{hotel.overview}</p>
            }
            <h1 className=" self-start text-xl font-semibold py-7">
            Where you’ll be
            </h1>
            {
                <ul className=" list-disc self-start px-2">
                    <li> Address : {hotel.addressline1}</li>
                    <li>zipcode : {hotel.zipcode}</li>
                    <li>
                    city :{`${hotel.city}, ${hotel.state} ${hotel.country}`}
                    </li>
                    <li>
                    checkin : {hotel.checkin}
                    </li>
                    <li>
                    checkout : {hotel.checkout}
                    </li>
                </ul>
            }


<h1 className=" self-start text-xl font-semibold py-4">

                Find us on Google Maps
            </h1>


        </div>
    )
}