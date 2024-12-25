import React from "react";
import Product from "./Product";

function Newpro({ data }) {

  return (
    <div id="news1" className="mb-8 mt-5">
      <h1 className="text-4xl font-black mb-4 px-5">New Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((newProduct) => (
          <Product key={newProduct.id} product={newProduct} isScooter={false} />
        ))}
      </div>
    </div>
  );
}

export default Newpro;
