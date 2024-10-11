import { useSelector } from "react-redux"
import Card from "./Card";


export default function Fav(){
    const favdata=useSelector((state)=>state.hotels.fav)
    return(
    <>
    <h1 className=" text-4xl font-semibold flex flex-col items-start  self-start  ">Favourites properties to rent</h1>
    <div className=" flex flex-wrap justify-start self-start gap-14  gap-y-5   py-5   ">


                {
                    favdata.map((hotel)=>(
                        <Card hotel={hotel}></Card>    
                                ))
                }
             </div>
    </>
            
                
                
            

        
    )
}