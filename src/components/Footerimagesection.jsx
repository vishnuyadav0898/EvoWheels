import React from 'react'

function Footerimagesection({title,para,images,btntext}) {
  return (<>
  
     {images.length>1?<> 
      <div className="  w-full flex flex-col   gap-2 2xl:justify-center 2xl:items-center  xl:justify-center xl:items-center lg:justify-center lg:items-center">
         <div className='p-6'>
            <h1 className="text-3xl font-semibold w-[80%] 2xl:text-6xl 2xl:w-fit  xl:text-5xl xl:w-fit lg:text-5xl lg:w-fit ">
          {title}
          </h1>
          <p className="mt-3 opacity-90 2xl:text-3xl 2xl:mt-5 xl:text-2xl xl:mt-5 lg:text-xl lg:mt-5 ">
           {para}
          </p>
          {btntext&&(
             <button className="bg-black text-white p-3 font-semibold mt-4">{btntext}</button>
          )}
          </div>
        
          <div className=' flex flex-col gap-3 bg-black '> 
            <img src={images[0]} alt="bottom-one" className="object-cover rounded-xl mt-3  2xl:w-full  xl:w-full  lg:w-full  " />
          <div className="flex gap-3  2xl:w-full 2xl:h-full  xl:w-full xl:h-full  lg:w-full lg:h-full  ">
            <img src={images[1]} alt="bottom-two" className="h-[15rem] 2xl:h-[55rem] xl:h-[45rem] lg:h-[35rem] md:h-[25rem] w-1/2 rounded-xl object-cover" />
            <img src={images[2]} alt="bottom-three" className="h-[15rem] 2xl:h-[55rem] xl:h-[45rem] lg:h-[35rem] md:h-[25rem] w-1/2 rounded-xl object-cover" />
          </div>
          <img src={images[3]}alt="bottom-four" className="object-cover rounded-xl 2xl:w-full 2xl:h-full  xl:w-full xl:h-full  lg:w-full lg:h-full  " /></div>
         
      </div>
      </>: <>
      <div className='mt-5 2xl:px-20  xl:px-16  lg:px-16 2xl:mt-20 '>
        <div className='p-4'>
          <h1 className='text-2xl font-semibold w-2/3 2xl:px-20 2xl:text-6xl  xl:text-5xl lg:text-5xl'>{title}</h1>
          <p className='font-medium opacity-50 mt-3 2xl:px-20 2xl:text-3xl  xl:text-2xl lg:text-2xl  2xl:mt-5'>{para}</p>
        </div>
        <img src={images[0]} alt="Future Section" className='w-full mt-5  2xl:rounded-xl xl:rounded-xl lg:rounded-xl' />
      </div>
      </>}
 
      </>
  
  
  
      
  )
}

export default Footerimagesection