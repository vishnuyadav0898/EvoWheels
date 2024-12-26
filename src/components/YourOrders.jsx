import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";

const YourOrders = ({ onClose }) => {
  const [orders, setOrders] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [filteredOrder, setFilteredOrder] = useState(null); // To store the filtered order
  const [loading, setLoading] = useState(false); // State to manage loading

  useEffect(() => {
    // Fetch orders from localStorage when component mounts
    const storedOrders = localStorage.getItem("bookingInfo");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []); // Runs only once when the component mounts

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleEmailSubmit = () => {
    if (userEmail) {
      setLoading(true); // Set loading state to true

      setTimeout(() => {
        const order = orders.find((order) => order.email === userEmail);
        if (order) {
          setFilteredOrder(order); // Set the filtered order based on the email
        } else {
          alert("No order found for this email.");
        }
        setLoading(false); // Set loading state to false after 3 seconds
      }, 3000); // 3 seconds delay
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-20 shadow-lg p-5">
      <BackButton onClose={onClose} />
      <div className="p-6 mt-16 bg-gray-200 rounded-lg max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] mx-auto">
        <h2 className="text-3xl font-bold mb-4">Your Orders</h2>

        {loading ? (
          <p className="text-lg font-black">Loading your order, please wait...</p>
        ) : filteredOrder === null ? (
          <>
            <p className="text-lg font-black">Please enter your email to see your order:</p>
            <input
              type="email"
              value={userEmail}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="p-2 mt-3 border rounded mb-4 w-full sm:w-[70%] md:w-[60%]"
            />
            <button
              onClick={handleEmailSubmit}
              className="p-2 bg-blue-500 text-white rounded mt-4"
            >
              Submit
            </button>
          </>
        ) : (
          <div className="space-y-4">
            <p className="text-2xl font-black"><span className="text-xl font-medium">Model:</span> {filteredOrder.model}</p>
            {filteredOrder.color && (
              <p className="text-2xl font-black"><span className="text-xl font-medium">Color:</span> {filteredOrder.color}</p>
            )}
            <p className="text-2xl font-black"><span className="text-xl font-medium">Battery:</span> {filteredOrder.battery}</p>
            <p className="text-2xl font-black"><span className="text-xl font-medium">UserName:</span> {filteredOrder.name}</p>
            <p className="text-2xl font-black"><span className="text-xl font-medium">Email:</span> {filteredOrder.email}</p>
            <p className="text-2xl font-black"><span className="text-xl font-medium">Phone:</span> {filteredOrder.phone}</p>
            <p className="text-2xl font-black"><span className="text-xl font-medium">Address:</span> {filteredOrder.address}</p>
            <p className="text-2xl font-black"><span className="text-xl font-medium">PIN:</span> {filteredOrder.pin}</p>
          </div>
        )}
      </div>
      <p className="mt-2 text-sm font-semibold text-center px-5">
        ** Please ensure payment is completed through the selected method at your chosen experience center 3 days prior to delivery. **
      </p>
    </div>
  );
};

export default YourOrders;
