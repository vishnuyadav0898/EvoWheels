import React, { useState, useEffect } from "react";
import BackButton from "./BackButton";
import CommonFooter from "./CommonFooter";

// Reusable Input Component
const InputField = ({ label, type, name, value, onChange, options = null }) => (
  <label className="block mb-2 text-xl font-semibold ml-3">
    <span className="ml-2">{label}</span>
    {options ? (
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 border rounded font-normal"
        required
      >
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 border rounded"
        required
      />
    )}
  </label>
);

const BookingForm = ({ product, closeBooking }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    model: product.name || "",
    color: "",
    battery: product.variants[0]?.battery || "",
    address: "",
    pin: "",
    payment: "",
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Load saved user info on mount
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (savedUsers.length) {
      const lastUser = savedUsers[savedUsers.length - 1];
      setUserInfo((prev) => ({
        ...prev,
        name: lastUser.Name || "",
        email: lastUser.Email || "",
        phone: lastUser.Phone || "",
        pin: lastUser.Pincode || "",
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission refresh

    // Calculate delivery date
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 10);

    // Update the confirmation message immediately
    setBookingConfirmed(
      `Get Your ${product.name} From Your Nearest Experience Center before ${deliveryDate.toLocaleDateString()}.`
    );

    // Save booking info to localStorage after updating the state
    setTimeout(() => {
      const existingBookings = JSON.parse(localStorage.getItem("bookingInfo")) || [];
      const updatedBookings = [...existingBookings, userInfo];

      // Make sure the existing bookings are always saved as an array
      localStorage.setItem("bookingInfo", JSON.stringify(updatedBookings));
    }, 100); // Delay ensures the state update completes first
  };

  const clearForm = () => {
    setUserInfo({
      name: "",
      email: "",
      phone: "",
      model: product.name || "",
      color: "",
      battery: product.variants[0]?.battery || "",
      address: "",
      pin: "",
      payment: "",
    });
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto  mt-16 2xl:mt-1 mb-5">
      <div onClick={clearForm} className="bg-black text-white absolute top-10 2xl:top-24 2xl:right-[30rem] md:right-44 md:top-4 r lg:right-[15rem] lg:top-10 p-2 rounded-md right-3 cursor-pointer">
        Clear Form
      </div>

      <form className="flex flex-col  px-5 md:px-24 lg:px-28  xl:px-48 2xl:px-[35rem]  2xl:gap-2 border h-full  overflow-y-auto rounded-lg shadow-lg bg-gray-300" onSubmit={handleSubmit}>
        <h2 className="text-3xl lg:text-5xl 2xl:text-5xl font-bold mb-4 mt-10  2xl:mt-28 lg:mt-10 mx-auto">Booking Form</h2>

        {/* Use InputField for all inputs */}
        <InputField label="Name" type="text" name="name" value={userInfo.name} onChange={handleChange} />
        <InputField label="Email" type="email" name="email" value={userInfo.email} onChange={handleChange} />
        <InputField label="Phone" type="tel" name="phone" value={userInfo.phone} onChange={handleChange} />
        <InputField label="PIN" type="text" name="pin" value={userInfo.pin} onChange={handleChange} />
        <InputField label="Address" type="text" name="address" value={userInfo.address} onChange={handleChange} />

        {/* Select Options */}
        <InputField
          label="Model"
          name="model"
          value={userInfo.model}
          onChange={handleChange}
          options={[{ label: product.name, value: product.name }]}
        />
        {product.Colours && (
          <InputField
            label="Select Colour"
            name="color"
            value={userInfo.color}
            onChange={handleChange}
            options={Object.keys(product.Colours).map((color) => ({ label: color, value: color }))}
          />
        )}
        <InputField
          label="Select Battery Option"
          name="battery"
          value={userInfo.battery}
          onChange={handleChange}
          options={product.variants.map((variant) => variant.battery)}
        />
        <InputField
          label="Select Payment Option"
          name="payment"
          value={userInfo.payment}
          onChange={handleChange}
          options={["Cheque", "Cash on delivery", "UPI"]}
        />

        {/* Submit and Back Buttons */}
        <div className="flex flex-col mt-1 pb-10  gap-2 items-center">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded font-mono">
            Submit Booking
          </button>
          <BackButton onClose={closeBooking} />
          <CommonFooter />
        </div>
      </form>

      {/* Confirmation Message */}
      {bookingConfirmed && (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold">
              Hey! {userInfo.name}, Your booking is confirmed! <br /> {bookingConfirmed}
            </h2>
            <p className="text-sm mt-1"> * Track through my orders *</p>
            <button
              onClick={closeBooking}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
