import React from 'react';
import { useMediaQuery } from 'react-responsive';

function ReferandEarn({ title, imagesLgSc, imagesSmSc }) {
  // Use media query inside this component
  const isLargeSc = useMediaQuery({ query: "(min-width: 768px)" });

  // Select images based on the screen size
  const images = isLargeSc ? imagesLgSc : imagesSmSc;

  return (
    <div className="p-4 2xl:p-20">
      <h1 className="text-2xl font-semibold 2xl:text-6xl">{title}</h1>
      <img
        src={images[0]}
        alt="ref-img-one"
        className="mt-5 2xl:w-full 2xl:mt-10 2xl:h-[40rem]"
      />
      <img
        src={images[1]}
        alt="ref-img-two"
        className="mt-10 2xl:w-full"
      />
    </div>
  );
}

export default ReferandEarn;
