import React from 'react'

function GreenStarlist({ items }) {

  return (
    <>
    <div className=' 2xl:flex-col 2xl:ml-10'> {items.map((item, index) => (
        <div key={index} className="mt-10 flex gap-5 mb-10 2xl:mb-14 ">
          {/* Green Star Icon */}
          <img
            src="../assets/images/star_icon_green.svg"
            alt="star_icon"
            className="w-6 h-6 2xl:h-10 2xl:w-10  xl:h-8 xl:w-8  lg:h-7 lg:w-7"
          />
          <div>
            {/* Title (if available) */}
            {item.title && (
              <h1 className=" text-xl  2xl:text-2xl xl:text-2xl lg:text-xl ">{item.title}</h1>
            )}

            {/* Description */}
            <p className="opacity-70 mt-1 2xl:text-2xl xl:text-xl lg:text-lg">{item.description}</p>
          </div>
        </div>
      ))}</div>
     
    </>
  );
}

export default GreenStarlist;

