import React from "react";
import Product from "./Product";

function Gigs({ data }) {
  
  return (
    <div id="gigs" className="mb-8 mt-5">
      <h1 className="text-4xl font-black mb-4 px-5">Gigs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((gig) => (
          <Product key={gig.id} product={gig} isScooter={false} />
        ))}
      </div>
    </div>
  );
}

export default Gigs;
