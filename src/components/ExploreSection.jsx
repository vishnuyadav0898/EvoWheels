import React from 'react';

function ExploreSection({ image, heading, text, onClick }) {
  return (
    <div className="relative flex-none rounded-2xl w-full h-full  overflow-hidden shadow-lg">
      <img src={image} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-opacity-40 bg-black flex flex-col justify-between items-center text-white p-4 text-center">
        <div>
          <p className="text-2xl font-bold 2xl:mt-10 2xl:text-4xl xl:mt-10 xl:text-3xl lg:mt-10 lg:text-3xl">{heading}</p>
          <p className="mt-2 2xl:mt-5 2xl:text-2xl  xl:mt-5 xl:text-xl  lg:mt-5 lg:text-xl">{text}</p>
        </div>
        {/* Button as part of the ExploreSection */}
        <button
          onClick={onClick} // Trigger onClick function passed as prop
          className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 2xl:text-2xl 2xl:font-bold xl:text-xl lg:text-xl "
        >
          Explore more
        </button>
      </div>
    </div>
  );
}

export default ExploreSection;
