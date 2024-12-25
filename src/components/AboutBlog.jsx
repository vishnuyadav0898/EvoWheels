import React from 'react'

function AboutBlog({title,data}) {
  return (
    <div className='p-4 mt-5 2xl:px-20  xl:px-16  lg:px-16 '>
        <h1 className='text-3xl font-semibold 2xl:px-20 2xl:text-6xl  xl:text-5xl lg:text-5xl'>{title}</h1>
        <div className="flex mt-5 gap-3 overflow-x-auto scrollbar-hide w-full 2xl:mt-10 xl:mt-10">
          {data.map((blog, index) => (
            <div key={index} className="relative flex-none rounded-md overflow-hidden shadow-lg w-full p-1 2xl:flex  xl:flex  lg:flex flex-col  items-center 2xl:w-[35rem]  xl:w-[40rem] lg:w-[30rem] ">
              <img
                src={blog.imgSrc}
                alt={blog.title}
                className="object-cover w-[23rem] h-[20rem] rounded-md 2xl:w-full 2xl:h-[30rem] 2xl:rounded-xl  xl:w-full xl:h-[25rem] xl:rounded-xl  lg:w-full lg:h-[20rem] lg:rounded-xl md:w-full"
              />
              <p className='text-2xl font-semibold opacity-50 mt-5 2xl:text-4xl  xl:text-3xl'>{blog.year}</p>
              <p className='text-lg font-light 2xl:text-2xl  xl:text-xl  lg:text-lg'>{blog.title}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default AboutBlog