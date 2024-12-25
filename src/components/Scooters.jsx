import React from "react";
import Product from "./Product";

function Scooters({ Data }) {
    
  return (
    <div id="scooters" className="mb-8 mt-5 ">
      <h1 className="text-4xl font-black mb-3 px-5 ">Scooters </h1>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Data.map((scooter) => (
          <Product key={scooter.id} product={scooter} />
        ))}
      </div>
    </div>
  );
}

export default Scooters;
