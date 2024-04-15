
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";



const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
  return (
    <div className=" ">
    <div className=" w-full h-20 flex justify-between items-center px-8 absolute z-20 text-white ">
        {showNav ?<div className=" h-full w-full bg-black text-white fixed top-0 left-0 ">
        <RxCross1 size={30} onClick={()=>{setShowNav(!showNav)}} className=" fixed right-8 top-8" />
<div className=" flex justify-center items-center pt-[12rem] ">
        <ul className=" text-2xl   ">
                <li className=" font-bold pt-6 text-center">Home</li>
                <li className=" font-bold pt-6 text-center">Destinations</li>
                <li className=" font-bold pt-6 text-center">Travel</li>
                <li className=" font-bold pt-6 text-center">View</li>
                <li className=" font-bold pt-6 text-center">Book</li>
            </ul>
            </div>
        </div>:null}
        <div>
            <h1 className=" text-3xl text-[#62f7c8] font-bold">Beaches</h1>
        </div>
        <div className=" hidden lg:block">
            <ul className=" flex justify-center items-center gap-6">
                <li className=" font-bold">Home</li>
                <li className=" font-bold">Destinations</li>
                <li className=" font-bold">Travel</li>
                <li className=" font-bold">View</li>
                <li className=" font-bold">Book</li>
            </ul>
        </div>
        <div className=" hidden lg:flex gap-2 ">
        <CiSearch size={25} />
            <MdOutlineAccountCircle size={25} />

        </div>
        <div className="    lg:hidden">
        <BiMenuAltRight size={30} onClick={()=>{setShowNav(!showNav)}} />

        </div>


    </div>
    </div>



  )
}

export default Navbar