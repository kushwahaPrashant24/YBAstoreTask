"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown menu

  return (
    <nav className=" text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="/" className="flex items-center text-xl font-bold">
            <div className="flex gap-2">
              <div className="text-7xl text-blue-400">V</div>
              <div className="mt-2 text-2xl">
                <div>YB</div>
                <div>STORE</div>
              </div>
            </div>
          </a>

          {/* Search Bar (Medium Screens and Above) */}
          <div className="hidden md:flex items-center flex-grow max-w-lg mx-4 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 border border-gray-700 bg-gray-900 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-label="Search Icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 16a6 6 0 100-12 6 6 0 000 12zm0 0l4 4m4-4l-4-4"
              />
            </svg>
          </div>

          {/* Links and Dropdown */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/">
             
                Fav Creator
             
            </Link>

            <Link href="/about">
              
                Merchandise
             
            </Link>

            <Link href="/contact">
              
                Brand
              
            </Link>

            <Link href="/digital">
            
                Digital
            
            </Link>

            {/* Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="h-10 w-32 bg-gray-700 border border-gray-600 rounded-md shadow-md flex items-center justify-between px-4"
                aria-label="Open Dropdown"
              >
                {/* Contact Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"
                  />
                </svg>

                {/* Arrow or Close Icon */}
                {isDropdownOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10">
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                    onClick={() => setIsDropdownOpen(false)}
                    aria-label="Close Dropdown"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="flex flex-col p-2 space-y-2 text-gray-300">
                    <a href="/profile" className="hover:text-blue-400">
                      Profile
                    </a>
                    <a href="/dashboard" className="hover:text-blue-400">
                      Dashboard
                    </a>
                    <a href="/mystore" className="hover:text-blue-400">
                      My Store
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Hamburger Menu (Small Screens) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-300 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden relative">
          <div className="absolute right-3 top-0 h-[397px] w-[240px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg text-white p-4">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setMenuOpen(false)}
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
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Profile Section */}
            <div className="flex flex-col items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="font-semibold text-lg">Prashant Kushwaha</p>
                <p className="text-sm text-gray-400">
                  prashantkush24@gmail.com
                </p>
              </div>
            </div>

            {/* Menu Options */}
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition">
                Profile
              </button>
              <button className="w-full text-left px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition">
                Address
              </button>
              <button className="w-full text-left px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition">
                Contact
              </button>
              <button className="w-full text-left px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition">
                About Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
