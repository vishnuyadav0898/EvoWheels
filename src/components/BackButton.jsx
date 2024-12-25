import React from 'react'

function BackButton({onClose}) {
    return (<div className='fixed top-0 left-0 flex justify-between items-center inset-0 z-30 bg-black h-14  lg:h-20 xl:h-16  2xl:h-16 px-2'> 
       <button
          onClick={onClose}
          className="  text-white  w-8 h-8 flex justify-center rounded-md items-center ">
         <i className="fa-solid fa-arrow-left font-black text-2xl border-solid border-gray-800  hover:border-white border-2 rounded-lg px-2"></i>
        </button>
        <h1 className="text-3xl font-extrabold text-white ">OLA</h1>
        </div>
      
       
      );
}

export default BackButton