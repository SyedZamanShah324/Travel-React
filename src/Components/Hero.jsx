import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div className=" h-screen w-full  ">
<video src="beachVid.mp4" className=" h-screen w-full object-cover" loop autoPlay >
</video>
<div className=" h-full w-full absolute top-0 text-white flex flex-col justify-center text-center p-4  ">
    <h1 className=" text-4xl md:text-5xl lg:text-6xl capitalize font-bold">first class travel</h1>
    <h2 className=" text-3xl md:text-4xl lg:text-5xl capitalize font-base py-4">Top 1% Locations WorldWide</h2>
   <div className="mx-auto ">
    <div className=" flex items-center justify-center bg-white px-2 rounded-2xl ">
    <input type="text" className=" outline-none text-black w-[280px] md:w-[400px] lg:w-[480px] py-3 rounded-full  " placeholder="Search Your Destination" />
    <CiSearch size={20} className=" text-black/50" />
    </div>
   </div>

</div>
    </div>
  )
}

export default Hero