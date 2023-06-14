import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsServicesDropdownOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (

    <nav className="bg-gray-800  fixed z-700 w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-lg">WestK9</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/shop" className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
                Shop
              </Link>

              <Link
                to="/services"
                className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={toggleDropdown}
              >
                Services
              </Link>
              {/* Dropdown Menu */}
              <div className={`relative inline-block text-left ${isDropdownOpen ? 'open' : ''}`}>
                <div>
                  <button
                    type="button"
                    className="text-gray-300 bg-sky-100hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                    onClick={toggleDropdown}
                  >
                  </button>
                </div>
                <div
                  
                  className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition duration-500 transform ${isDropdownOpen ? 'scale-y-100' : 'scale-y-0'}`}
                >
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link to="/services/product1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Product 1</Link>
                    <Link to="/services/product2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Product 2</Link>
                    <Link to="/services/product3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Product 3</Link>
                    <Link to="/services/product4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Product 4</Link>
                    <Link to="/services/product5" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Product 5</Link>
                  </div>
                </div>
              </div>
              {/* End of Dropdown Menu */}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {/*text-xlbile Dropdown Menu */}
{isDropdownOpen && (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        Home
      </Link>
      <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        About
      </Link>
      <Link to="/shop" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
        Shop
      </Link>
      <div className="text-center"> {/* Add this div to center the Services link */}
        <button
          type="button"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          onClick={toggleServicesDropdown}
        >
          <FontAwesomeIcon icon={faAngleDown} className="mr-1"/>
          Services
        </button>
      </div> 
      {/* Services Dropdown Menu */}
      {isServicesDropdownOpen && (
        <div className="pl-5">
          <Link to="/services/product1" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Product 1
          </Link>
          <Link to="/services/product2" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Product 2
          </Link>
          <Link to="/services/product3" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Product 3
          </Link>
          <Link to="/services/product4" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Product 4
          </Link>
          <Link to="/services/product5" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Product 5
          </Link>
        </div>
      )}
       {/* End of Services Dropdown Menu */}
     </div>
     </div>
      )}

      </div>
    </nav>
    
   );
 };

export default Navbar;
