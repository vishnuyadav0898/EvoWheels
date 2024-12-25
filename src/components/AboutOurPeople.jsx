import React from 'react'

function AboutOurPeople({title,description,image}) {
  return (
    <div className='p-4  2xl:p-20  xl:p-16  lg:p-16  flex flex-col justify-center items-center'>
      <div className=' 2xl:flex 2xl:px-20 xl:flex xl:px-10 justify-around items-start gap-5'>
         <h1 className='text-2xl font-semibold 2xl:text-6xl  xl:text-5xl lg:text-5xl xl:my-10'>{title}</h1>
         <p className='mt-3 text-lg font-medium pb-3  2xl:w-[60%] 2xl:text-4xl 2xl:leading-snug 2xl:font-normal   xl:w-[70%] xl:text-3xl xl:leading-snug xl:font-normal'>{description}</p>
      </div>
   
    <img src={image} alt="Our People" className=' 2xl:w-[90%] 2xl:h-screen 2xl:mt-20  xl:mt-5' />
  </div>
  )
}

export default AboutOurPeople