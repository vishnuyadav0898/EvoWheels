import React from 'react'

function Footer() {
  return (
    <div className='bg-black w-full text-white flex flex-col'>

    <div className='text-3xl flex justify-evenly  items-center p-5 2xl:text-5xl'>
    <i className="fa-brands fa-instagram cursor-pointer"></i>
    <i className="fa-brands fa-youtube cursor-pointer"></i>
    <i className="fa-brands fa-facebook cursor-pointer"></i>
    <i className="fa-brands fa-twitter cursor-pointer"></i>
    <i className="fa-brands fa-linkedin cursor-pointer"></i>
    
    </div>
    <div className='px-10  flex flex-col justify-center items-center'>
       <h1 className='text-3xl font-extrabold '>OLA</h1>
       <p>Copyright © 2024 Ola Electric Mobility Ltd. All Rights Reserved.</p>
    </div>
   
    </div>
  )
}

export default Footer