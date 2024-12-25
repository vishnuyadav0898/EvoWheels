import React from "react";
import PropTypes from "prop-types";

function ColapsNav({ onClose }) {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#scooters", label: "Scooters" },
    { href: "#bikes", label: "Bikes" },
    { href: "#gigs", label: "Gigs" },
    { href: "#news1", label: "New S1" },
    { href: "#Accessories", label: "Accessories" },
    { href: "#about", label: "About" },
    { href: "#tech&design", label: "Tech & Design" },
    { href: "#ownership", label: "Ownership" },
  ];

  return (
    <div
      className="fixed top-0 left-0 z-20 shadow-lg p-5 sm:p-8 md:p-10 lg:p-12 xl:p-14 w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%] bg-white h-full overflow-y-auto"
      role="dialog"
      aria-labelledby="nav-menu"
      aria-modal="true"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close Navigation"
        className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-gray-900"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      {/* Navigation Menu */}
      <ul
        id="nav-menu"
        className="flex flex-col justify-start gap-5 text-xl font-semibold mt-16"
      >
        {navItems.map(({ href, label }) => (
          <li
            key={href}
            className="bg-gray-300 p-2 rounded-lg px-5 hover:bg-gray-400 cursor-pointer"
          >
            <a
              href={href}
              className="block w-full h-full"
              onClick={onClose}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// PropType validation to ensure onClose is passed as a function
ColapsNav.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ColapsNav;
