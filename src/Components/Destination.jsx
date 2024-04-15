
const Destination = () => {
  return (
    <div className=" max-w-[1240] py-16 px-6 mx-auto flex flex-col justify-center items-center">
        <h1 className=" text-3xl font-bold md:text-4xl lg:text-5xl">All-Inclusive Reports</h1>
        <p className=" py-4">On the Caribbean`s Best Beaches</p>
        <div className="  grid grid-cols-2  lg:grid-cols-4  gap-4 lg:px-24">
            <div className=" col-span-2 row-span-2"><img src="borabora.jpg" alt="" className=" h-full" /></div>
            <div className=" object-cover "> <img src="maldives2.jpg" className=" object-cover" alt="" /></div>
            <div className="  "> <img src="maldives3.jpg" className=" object-cover h-full" alt="" /></div>
            <div className=" "> <img src="keywest.jpg" className=" object-cover h-full" alt="" /></div>
            <div className=" "> <img src="maldives.jpg" className=" object-cover h-full" alt="" /></div>
        


        </div>


    </div>
  )
}

export default Destination