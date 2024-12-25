import React from "react";
import Product from "./Product";

function Bikes({ data }) {

  return (
    <div id="bikes" className="mb-8 mt-5">
      <h1 className="text-4xl font-black mb-4 mx-5">Bikes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((bike) => (
          
          <Product key={bike.id} product={bike} isScooter={false} />
        ))}
      </div>
    </div>
  );
}

export default Bikes;

