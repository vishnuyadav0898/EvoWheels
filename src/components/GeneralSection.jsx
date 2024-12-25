import React from "react";
import CityStore from "./CityStore";
import { useMediaQuery } from "react-responsive";

function GeneralSection({
  title,
  subtitle,
  images,
  buttonText,
  stats,
  units,
  additionalText,
  listItems,
  customContent,
  extrapara,
  endata,
}) {
 const isLarge = useMediaQuery({ query: "(min-width: 820px)" }); 
 
  
  return ( <> 
    {!images&&(
       <div className="p-5 flex flex-col justify-center items-center mt-10 gap-3">
       <h1 className="text-4xl font-extrabold">{title}</h1>
       <h1 className="text-3xl font-semibold">{subtitle}</h1>
     
       <button className="bg-black text-white p-2 text-lg font-normal mt-2">
         {buttonText}<i className="fa-solid fa-arrow-right ml-2"></i>
       </button>
     </div> 
    )}
    <div className="relative flex justify-center  items-center w-full bg-white text-white pb-3">
    <h1 className="absolute font-semibold top-20 left-auto opacity-70 text-2xl 2xl:text-4xl ">
      {title}
    </h1>
    <div className="flex flex-col gap-3 absolute left-13 top-28  2xl:top-36 xl:top-28 lg:top-28 md:top-24  mt-2 text-lg font-medium">
      <div className="text-3xl 2xl:text-5xl 2xl:gap-4  xl:text-4xl xl:gap-4  flex flex-col justify-center items-center">
        {subtitle.map((title,index)=>(
           <span key={index}>{title} </span> 
        ))}
      </div>
     
      {units&&(
        
         <div className="flex absolute gap-2  ml-2 top-16 2xl:top-[8rem] 2xl:left-[7%] 2xl:text-black 2xl:text-2xl 2xl:w-full  xl:top-[7rem]  xl:text-black xl:text-2xl xl:w-full  lg:top-[5rem]  lg:text-black lg:text-xl  lg:w-[45rem]  mt-5  text-gray-600 text-sm font-medium">
         {units.map((unit,index)=>(
              <h1 key={index} className="whitespace-nowrap">{unit}</h1>
         ))}
      </div>
      )}
      {additionalText&&(
         <p className="text-xl px-16 ml-5  2xl:text-2xl xl:text-2xl">
             {additionalText}
        </p>
      )}
      {buttonText&&(
         <button className="bg-white  w-fit text-black p-3  font-normal mt-2 mx-auto">
        {buttonText} <i className="fa-solid fa-arrow-right ml-1"></i>
      </button>
      )}
     
    </div>
    {customContent&&(
       <div className="absolute top-[57%] left-0 right-0 z-10 2xl:left-52  2xl:top-[60%] xl:left-5  xl:top-[65%]  lg:left-5  lg:top-[65%] md:left-5  md:top-[65%]">
       <CityStore/>
      </div>
    )}
    {listItems&&(
        <div className="flex absolute bottom-[5vh] items-center justify-center gap-2 w-96 2xl:text-lg">
          {listItems.map((item,index)=>(
              <h1 key={index}>{item}</h1>
          ))}
      </div>
    )}
    {stats&&(
       <div className="flex absolute bottom-[5vh]  items-center justify-around gap-3 w-full px-4 2xl:w-1/2  xl:w-1/2  lg:w-1/2 ">
        {stats.map((stat,index)=>(
          <div key={index} className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-black 2xl:font-normal 2xl:text-5xl  xl:text-4 ">{stat.value}</h1>
            <h1 className=" 2xl:text-2xl  xl:text-xl">{stat.label}</h1>
          </div>
        ))}
       </div>
    )}
      {extrapara&&(
        <p className=' absolute top-[75%] 2xl:top-[90%] 2xl:text-3xl  2xl:text-black    xl:font-medium xl:top-[85%] xl:text-3xl  xl:text-black  lg:top-[85%] text-2xl font-medium pl-16 text-white'>{extrapara}</p>
      )}
      {endata&&(
           <div className='flex justify-around  absolute  bottom-10  2xl:bottom-5 xl:bottom-5 md:bottom-7 w-full p-2 '>
      
           <div className=' flex flex-wrap  2xl:gap-5  xl:gap-5 lg:gap-5 justify-center'>
            {endata.map((e,index)=>(
               <div key={index} className=' flex flex-col justify-center   p-3'>
               <h1 className=' text-3xl font-black 2xl:text-5xl 2xl:font-semibold  xl:text-5xl xl:font-semibold '>{e.title}</h1>
               <div className="w-full xl:mt-5">
                 <p className='font-normal  2xl:text-3xl  2xl:font-semibold xl:text-3xl  xl:font-semibold  '>{e.detail[0]}</p>
                 <p className='font-normal  2xl:text-3xl  2xl:font-semibold xl:text-3xl  xl:font-semibold '>{e.detail[1]}</p>
                
               </div>
              
               </div>
            ))}
         
           </div>
         
        </div>
      )}
          {images&&(
        <img
        src={
          images.length === 1
            ? images[0] // If there's only one image
            : isLarge
            ? images[1] //  images[1] for large screens
            : images[0] //  images[0] for small screens
        }
      alt="cell-image"
      className=" object-cover h-[51rem] w-full 2xl:h-screen xl:h-screen lg:h-screen md:h-screen    "
    /> 
      )}
   
  </div></>
   
  );
}

export default GeneralSection;
// 