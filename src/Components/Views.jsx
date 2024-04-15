
const Views = () => {
  return (
    <div className=" max-w-[1640px] pt-16 px-6  lg:p-28 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className=" relative"><img src="keywest.jpg" alt="" className=" h-[250px] object-cover w-full " /> <div className=" h-full w-full absolute top-0 left-0  hover:bg-black/30"><p className=" absolute  bottom-4 left-4 font-medium text-xl text-white">Maldives</p></div> </div>
        <div className=" relative"><img src="borabora2.jpg" className=" object-cover  h-[250px] w-full" alt="" /> <div className=" h-full w-full absolute top-0 left-0 hover:bg-black/25"><p className=" absolute bottom-4 left-4 font-medium text-xl text-white">Maldives</p></div> </div>
        <div className=" relative"><img src="borabora.jpg" className=" object-cover h-[250px] w-full" alt="" /> <div className=" h-full w-full absolute top-0 left-0 hover:bg-black/25"> <p className=" absolute bottom-4 left-4 font-medium text-xl text-white">Maldives</p></div></div>
        <div className=" relative"><img src="maldives.jpg" className=" object-cover h-[250px] w-full" alt="" /><div className=" h-full w-full absolute top-0 left-0 hover:bg-black/25"> <p className=" absolute bottom-4 left-4 font-medium text-xl text-white">Maldives</p></div> </div>
        <div className=" relative"><img src="maldives2.jpg" className=" object-cover h-[250px] w-full" alt="" /> <div className=" h-full w-full absolute top-0 left-0 hover:bg-black/25"> <p className=" absolute bottom-4 left-4 font-medium text-xl text-white">Maldives</p></div></div>
        <div className=" relative"><img src="maldives3.jpg" className=" object-cover h-[250px] w-full" alt="" /><div className=" h-full w-full absolute top-0 left-0 hover:bg-black/25"> <p className=" absolute bottom-4 left-4 font-medium text-xl text-white">Maldives</p></div> </div>
    </div>
  )
}

export default Views