import React from 'react'

function CommonBtn({btnText}) {
  return (
    <button className="ml-3 mt-4 text-md 2xl:text-2xl xl:text-xl lg:text-lg text-green-600 font-medium flex justify-center items-center gap-2">
   {btnText} <i className="fa-solid fa-arrow-right "></i>
  </button>
  )
}

export default CommonBtn