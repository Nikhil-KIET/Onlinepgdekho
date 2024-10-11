import { Routes,Route } from "react-router-dom";
import "./App.css";
import Filter from "./Filter";
import Hotels from "./Hotels";
import Navbar from "./Navbar";
import Fav from "./Fav";
import Details from "./Details";

function App() {
  return (

    < >

      <div className=" bg-slate-50 w-screen h-[auto] space-y-8 overflow-x-hidden  min-h-screen">
        <Navbar></Navbar>
        <div className="w-screen flex h-[100%]  flex-col  items-center my-8 space-y-8 mb-4 ">


          <div className=" w-[80%] flex flex-col items-center h-[100%] px-4 space-y-8">
            



            <Routes>
              <Route path="/" element={<Hotels></Hotels>}></Route>
              <Route path="/fav" element={<Fav></Fav>}></Route>
              <Route path="/details/:id" element={<Details/>}></Route>

            



            </Routes>

            




          </div>



        </div>

      </div>

    </>

  );
}

export default App;
