import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className=" flex justify-evenly items-center bg-white-100 border-b-2  shadow-md p-2  bg-white sticky  ">


            <img className="   " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdqfjNaZtfLe3jMPEucFREmpVeSzYZa8Mlg&s" alt="" height={20} width={100}  />

            <div className=" flex space-x-8    ">
                <Link className="  px-4 py-1 rounded-md text-lg hover:text-white transition duration-500 hover:bg-blue-300     " >
                <p>Rent</p>
                </Link>
                <Link  className="  px-4 py-1 rounded-md text-lg hover:text-white transition-colors duration-500 hover:bg-blue-300     " >
                <p>Buy</p>
                </Link>
                <Link className="  px-4 py-1 rounded-md text-lg transition-[background-color] hover:text-white  duration-500 hover:bg-blue-300     " >
                <p>Sell</p>
                </Link>
                <Link to={"/fav"} className="  px-4 py-1 rounded-md text-lg transition-[background-color] hover:text-white  duration-500 hover:bg-blue-300     " >
                <p>Favourites</p>
                </Link>
                
            </div>

            <div className=" flex gap-8" >

                <button className=" p-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700  transition-all duration-500 ">
                    Login
                </button>

                <button className=" px-4 py-2 rounded-md bg-blue-500 text-white  hover:bg-blue-700 transition-all duration-500 ">
                    Signup
                </button>


            </div>
        </div>
    )
}