import React from 'react'

function SoftwareDetailCard({ title,description,image ,btntext }) {
  return ( <>

    <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-xl"/>
      <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-start items-start  p-3">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 w-2/3">{description}</p>
      </div>
      </>
  )
}

export default SoftwareDetailCard
