import React from "react";

function Cart({ cartItems, onClose, onRemove }) {
  // Calculate total amount
  const totalAmount = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9]/g, "")); // Extract numeric value from price string
    return sum + price;
  }, 0);

  return (
    
    <div className="fixed  top-16 inset-0 overflow-y-auto z-10 bg-white shadow-lg p-5 h-screen  rounded-md w-full mx-auto ">
      <button
        onClick={onClose}
        className="absolute top-5 right-7 text-xl text-white bg-red-500 rounded-m w-8 h-8  2xl:right-[30rem]   xl:right-[20rem]   lg:right-[20rem] 2xl:w-10 2xl:h-10 flex justify-center items-center hover:bg-red-600"
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4 2xl:text-4xl 2xl:mx-10 xl:text-4xl xl:mx-10 lg:text-4xl lg:mx-10">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-700 2xl:text-5xl 2xl:mx-20  xl:text-4xl xl:mx-16">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4 2xl:justify-center 2xl:items-center xl:justify-center xl:items-center lg:justify-center lg:items-center">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center  2xl:bg-green-200 2xl:w-3/6 2xl:h-[10rem]  xl:bg-green-200 xl:w-3/6 xl:h-[8rem]  lg:bg-green-200 lg:w-3/6 lg:h-[8rem] gap-4 border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md 2xl:h-[8rem] 2xl:w-[8rem] 2xl:ml-5  xl:h-[6.5rem] xl:w-[7rem] xl:ml-5  lg:h-[6rem] lg:ml-5"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-700">{item.price}</p>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-sm bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 2xl:mr-5  xl:mr-5  lg:mr-5"
              >
                Remove
              </button>
            </div>
          ))}
          {/* Total Amount Section */}
          <div className=" fixed bottom-2 left-0 right-0 pb-10 bg-gray-300 flex flex-col justify-center items-center w-full"> 
            <div className="mt-2 flex justify-between text-lg font-semibold ">
            <span className="text-xl font-mono">Total Payable:</span>
            <span className="text-xl font-mono">₹ {totalAmount.toLocaleString()}</span>
            
          </div>
          <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
            Proceed to Pay
          </button></div>
         
        </div>
      )}
    </div>


  );
}

export default Cart;


