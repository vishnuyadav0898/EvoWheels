// import React, { useState } from "react";
// import DetailedSpecifications from "./DetailedSpecifications";
// import BookingForm from "./BookingForm";

// function Product({ product }) {
//   const [ShowForm, setShowForm] = useState(false);
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   const closeBooking = () => {
//     setShowForm(!ShowForm);
//   };

//   return (<>  
//   <div
//       className="border w-full p-4 rounded-lg shadow-lg mb-6 transform transition-transform duration-300 
//       lg:p-6 lg:mb-8 lg:rounded-xl lg:shadow-2xl"
//     >
//       {/* Product Image */}
//       <img
//         src={product.images.default}
//         alt={product.name}
//         className="w-full h-72 object-cover rounded-md lg:h-96"
//       />

//       {/* Product Details */}
//       <h2 className="text-2xl font-bold mt-4 lg:text-3xl">{product.name}</h2>
//       <p className="text-xl font-semibold mt-2 lg:text-2xl">
//         Price: {product.variants[0].price}
//       </p>
//       <p className="text-xl font-semibold lg:text-2xl">
//         Range: {product.variants[0].range}
//       </p>
//       <p className="text-xl font-semibold lg:text-2xl">
//         Top Speed: {product.variants[0].topspeed}
//       </p>

//       {/* Buttons */}
//       <div className="flex justify-around">
//         <button
//           className="mt-7 bg-green-500 text-white font-mono px-4 py-2 rounded 
//           lg:px-6 lg:py-3 lg:text-lg"
//           onClick={() => setShowForm(true)}
//         >
//           Book Now
//         </button>

//         <button
//           onClick={toggleExpand}
//           className="mt-7 bg-zinc-700 text-white px-4 py-3 font-mono rounded 
//           lg:px-6 lg:py-3 lg:text-lg"
//         >
//           See More
//         </button>
//       </div>

//       {/* Conditional Rendering */}
     
//       {expanded && (
        
//         <DetailedSpecifications product={product} closeDetails={toggleExpand} />
//       )}
//     </div>
//     {ShowForm && <BookingForm product={product} closeBooking={closeBooking} />}
   
//     {expanded && (
        
//         <DetailedSpecifications product={product} closeDetails={toggleExpand} />
//       )}
//     </>
  
 
//   );
// }

// export default Product;

import React, { useState, useEffect } from "react";
import DetailedSpecifications from "./DetailedSpecifications";
import BookingForm from "./BookingForm";

function Product({ product }) {
  const [ShowForm, setShowForm] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to toggle expanded state
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Function to close booking form
  const closeBooking = () => {
    setShowForm(!ShowForm);
  };

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.matchMedia("(max-width: 1024px)").matches; // `sm` and `md` breakpoints
      setIsSmallScreen(isSmall);
    };

    // Add event listener to handle resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className="border w-full p-4 rounded-lg shadow-lg mb-6 transform transition-transform duration-300 
        lg:p-6 lg:mb-8 lg:rounded-xl lg:shadow-2xl"
      >
        {/* Product Image */}
        <img
          src={product.images.default}
          alt={product.name}
          className="w-full h-72 object-cover rounded-md lg:h-96"
        />

        {/* Product Details */}
        <h2 className="text-2xl font-bold mt-4 lg:text-3xl">{product.name}</h2>
        <p className="text-xl font-semibold mt-2 lg:text-2xl">
          Price: {product.variants[0].price}
        </p>
        <p className="text-xl font-semibold lg:text-2xl">
          Range: {product.variants[0].range}
        </p>
        <p className="text-xl font-semibold lg:text-2xl">
          Top Speed: {product.variants[0].topspeed}
        </p>

        {/* Buttons */}
        <div className="flex justify-around">
          <button
            className="mt-7 bg-green-500 text-white font-mono px-4 py-2 rounded 
            lg:px-6 lg:py-3 lg:text-lg"
            onClick={() => setShowForm(true)}
          >
            Book Now
          </button>

          <button
            onClick={toggleExpand}
            className="mt-7 bg-zinc-700 text-white px-4 py-3 font-mono rounded 
            lg:px-6 lg:py-3 lg:text-lg"
          >
            See More
          </button>
        </div>

        {/* Conditional Rendering: For lg, xl, 2xl */}
        {!isSmallScreen && expanded && (
          <DetailedSpecifications product={product} closeDetails={toggleExpand} />
        )}
      </div>

      {/* Conditional Rendering: For sm and md */}
      {isSmallScreen && expanded && (
        <DetailedSpecifications product={product} closeDetails={toggleExpand} />
      )}

      {/* Booking Form */}
      {ShowForm && <BookingForm product={product} closeBooking={closeBooking} />}
    </>
  );
}

export default Product;

