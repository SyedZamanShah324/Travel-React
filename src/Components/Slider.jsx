import { useState } from "react";
import { GrNext } from "react-icons/gr";

const Slider = () => {
    const [slide, setSlide] = useState(0);

    const pic = [
        {
            url: "https://plus.unsplash.com/premium_photo-1680340941711-547df61a7a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGRpdmVzfGVufDB8fDB8fHww"
        },
        {
            url: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGRpdmVzfGVufDB8fDB8fHww"
        },
        {
            url: "https://images.unsplash.com/photo-1505881402582-c5bc11054f91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGRpdmVzfGVufDB8fDB8fHww"
        },
    ];

    const length = pic.length;

    return (
        <div className="max-w-[1240px] mx-auto py-28 px-2 lg:px-16">
            <div className="relative">
                {pic.map((item, index) => (
                    <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
                        {index === slide && (<img src={item.url} alt="" className=" object-cover rounded-xl w-full h-[500px]" />)}
                    </div>
                ))}
                <div className="absolute top-0 left-0 flex justify-between items-center h-full w-full px-0 lg:px-6">
                    <button onClick={() => setSlide((slide === 0 ? length - 1 : slide - 1))} className="px-6 py-2 "><GrNext className=" rotate-180 text-white" size={30} /></button>
                    <button onClick={() => setSlide((slide === length - 1 ? 0 : slide + 1))} className="px-6 py-2 "><GrNext  size={30} className=" text-white"/></button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
