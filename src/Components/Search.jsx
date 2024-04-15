
import { MdOutlineTravelExplore } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';
function Search() {
  return (
    <div className=" max-w-[1240] py-6 px-6 mx-auto grid-cols-2 lg:px-28  lg:grid lg:grid-cols-3  gap-5">
    <div className=" col-span-2">
    <h2 className=" text-3xl font-bold">LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className='py-4'>
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
    </div>




    <div className=" row-span-3 ">
<div className=' py-3 w-full px-3 border'>
    <h1 className=' text-center capitalize text-base font-medium'>get additional 10% 0FF</h1>
    <p className=' text-center py-2 text-base font-medium'> 12 Days Left</p>
    <button className=' w-full py-2 text-white bg-black font-medium'>Book Now And Safe</button>
</div>
<div className=' w-full py-2'>
    <p>Check-in</p>
    <input  type='date' className=' w-full py-2 border' />
</div>
<div className=' w-full py-2'>
    <p>Check-out</p>
    <input  type='date' className=' w-full py-2 border' />
</div>
<button className=' w-full py-2 text-white bg-[#535ce2] font-medium mt-6'>Book Now And Safe</button>

    </div>




    <div className=' col-span-2 flex flex-col lg:flex-row  '>   
         <div className=" flex gap-4 py-12 lg:py-0 ">
        <div className=" h-22 w-28 bg-[#535ce2] text-white rounded-2xl flex justify-center items-center"> <RiCustomerService2Fill size={60} /></div>
        <div className=" flex justify-center items-center flex-col">
            <h1 className=' font-bold text-2xl'>Leading services</h1>
            <p className='py-1 text-center '>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
        </div>
    </div>
    <div className='flex  gap-4 '>
    <div className=" h-22 w-28 bg-[#535ce2] text-white rounded-xl flex justify-center items-center"> <MdOutlineTravelExplore size={60} /></div>
    <div className=" flex justify-center items-center flex-col">
            <h1 className=' font-bold text-2xl'>Leading services</h1>
            <p className='py-1 text-center '>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
        </div></div>

    </div>
    
    
    </div>
  )
}

export default Search