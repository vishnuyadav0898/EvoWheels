import React, { useState } from "react";
import BackButton from "./BackButton";
import Cart from "./Cart";
import CommonFooter from "./CommonFooter";

function AccesDetails({ onClose,Data }) {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  

  const handleAddToCart = (item) => {
    if (!cartItems.find((cartItem) => cartItem.id === item.id)) {
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== id)
    );
  };
  return (<>
    <div className="fixed inset-0 z-10 flex flex-col w-full overflow-y-auto h-screen bg-white pb-10 p-7">
     
      <h1 className="text-3xl font-bold mt-16 pb-7 2xl:text-5xl xl:text-4xl lg:text-4xl">Accessory Store</h1>
      <div className="  2xl:flex 2xl:flex-row 2xl:flex-wrap xl:flex xl:flex-row xl:flex-wrap lg:flex lg:flex-row lg:flex-wrap  md:flex md:flex-row md:flex-wrap gap-7 xl:gap-5 "> {Data.map((item) => (
        <div key={item.id} className="p-2  flex flex-col  justify-center 2xl:w-[30vw] 2xl:bg-gray-300  xl:w-[45vw] xl:bg-gray-300 lg:w-[43vw] lg:bg-gray-300 md:w-[40vw]">
          <img
            src={item.image}
            alt={item.name}
            className="h-64  rounded-lg object-cover   2xl:h-[30vw] xl:h-[35vw]  lg:h-[30rem]  md:h-[25rem]"
          />
          <p className="text-2xl font-semibold mt-2">{item.name}</p>
          <p className="text-lg  font-light mt-2">{item.description}</p>
          <div className="flex justify-between px-2 mt-3">
            <p className="font-bold text-xl">{item.price}</p>
            <button
              onClick={() => handleAddToCart(item)}
              className={`border-solid border-black border-2 rounded-xl h-10 w-20 p-2 xl:mx-10 text-sm ${
                cartItems.find((cartItem) => cartItem.id === item.id)
                  ? "bg-black text-white"
                  : ""
              }`}
              disabled={cartItems.find((cartItem) => cartItem.id === item.id)}
            >
              {cartItems.find((cartItem) => cartItem.id === item.id)
                ? "Picked"
                : "Pick Now"}
            </button>
          </div>
        </div>
      ))}</div>
     

      {/* Cart Icon with Badge */}
      <div
        onClick={() => setShowCart(true)}
        className="fixed top-20 bg-black text-white right-1 text-2xl rounded-xl flex w-[5.5rem] h-[3.5rem] items-end justify-evenly p-2 cursor-pointer"
      >
        <span className="text-white font-light absolute right-[20%] bottom-5">
          {cartItems.length}
        </span>
        <i className="fa-solid fa-cart-shopping text-white"></i>
      </div>

      {/* Show Cart */}
      {showCart && (
        <Cart
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
          onRemove={handleRemoveFromCart}
        />
      )}

      <BackButton onClose={onClose} /></div>
      <CommonFooter/>
     
    
      </>);
}

export default AccesDetails;


