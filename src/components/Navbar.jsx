import React, { useState, useEffect } from 'react';
import ColapsNav from './ColapsNav';
import YourOrders from './YourOrders';

function Navbar() {
  const [colapsnav, setcopapsnav] = useState(false); // Collapsible navigation state
  const [showNavbar, setShowNavbar] = useState(false); // Navbar visibility on scroll
  const [Yourorder, setYourorder] = useState(false); // Modal visibility state
  const [activeNav, setActiveNav] = useState('#home'); // Active navigation state

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

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {Yourorder && <YourOrders onClose={() => setYourorder(false)} />}
      {colapsnav && <ColapsNav onClose={() => setcopapsnav(false)} />}

      <nav
        className={`w-full fixed top-0 left-0 z-10 flex justify-between items-center h-16 sm:h-16 md:h-20 lg:h-24 xl:h-20 2xl:h-20 bg-black text-white px-4 sm:px-6 md:px-8 transition-transform duration-300 ${
          showNavbar ? 'translate-y-0' : '-translate-y-20'
        }`}
      >
        {/* Mobile menu toggle */}
        <i
          onClick={() => setcopapsnav(true)}
          className="fa-solid fa-bars block xl:hidden text-3xl cursor-pointer"
          aria-label="Open navigation menu"
        ></i>

        {/* Logo */}
        <div className="text-4xl font-semibold">OLA</div>

        {/* Navigation items */}
        <ul className="hidden xl:flex 2xl:flex  justify-center items-center space-x-6">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setActiveNav(href)}
                className={`block rounded-md px-4 text-xl py-2 ${
                  activeNav === href ? 'bg-gray-400 text-black' : 'hover:bg-gray-400'
                }`}
                aria-current={activeNav === href ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* User icon */}
        <i
          onClick={() => setYourorder(true)}
          className="fa-solid fa-user text-3xl cursor-pointer"
          aria-label="View your orders"
        ></i>
      </nav>
    </>
  );
}

export default Navbar;