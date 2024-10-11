import { useSelector } from "react-redux";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";

export default function Hotels(){

    
    const data=useSelector((state)=>state.hotels.hotels)

    const [search,setSearch]=useSearchParams();
    const searchParams=search.get('fav')

    



    return(

     <div className=" md:flex md:flex-wrap md:justify-start w-[100%] md:gap-14  gap-y-5   py-5  h-[100%]   ">
        <h1 className=" text-4xl font-semibold w-[100%] h-auto self-start  ">Search properties to rent</h1>
        <div className="flex justify-center w-[100%]
        "><button className=" px-4 py-2 rounded-md bg-blue-500 text-white  hover:bg-blue-700 transition-all duration-500 " >All</button>
        <button className=" px-4 py-2 rounded-md bg-blue-500 text-white  hover:bg-blue-700 transition-all duration-500 ">Kietien</button></div>
         <Filter></Filter>

         
       
        

     
          {  data.length==0 ?<p className=" flex mx-auto h-[500px]  items-center text-blue-500 font-extrabold text-2xl">No Hotels Avilable In This Region</p>:
            data.map((hotel)=>(
                <Card  hotel={hotel}></Card>    
                        ))
            }
                


        
     </div>
    )
}