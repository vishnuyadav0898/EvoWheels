import React from 'react'
import CommonBtn from './CommonBtn'
import { useMediaQuery } from 'react-responsive'

function HyperServiceContent({sections}) {
   const isLargeSc = useMediaQuery({ query: "(min-width: 820px)" });
  return (
    <>
      {sections.map((section, index) => (
  <div
    key={index}
    className="mt-5 2xl:px-20 2xl:mt-20"
  >
    {section.imageSmSc && (
      
      <img
        src={
          isLargeSc?section.imageLgSc:section.imageSmSc}
        alt={`section_img_${index}`}
        className="w-full object-cover " 
      />
     
    )}
    {section.title && (
      <h1 className="text-2xl font-semibold mt-3 px-4 2xl:text-5xl xl:text-5xl lg:text-5xl ">
        {section.title}
      </h1>
    )}
    {section.description && (
      <p className="opacity-50 px-4 mt-2 2xl:text-3xl xl:text-4xl lg:text-3xl">{section.description}</p>
    )}
    {section.buttonText && <CommonBtn btnText={section.buttonText} />}
  </div>
))}

    </>
  )
}

export default HyperServiceContent