import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isRowenOpen, setIsRowenOpen] = useState(false);
  const [isSwissHdOpen, setIsSwissHdOpen] = useState(false);

  const toggleRowen = () => setIsRowenOpen(!isRowenOpen);
  const toggleSwissHd = () => setIsSwissHdOpen(!isSwissHdOpen);

  return (
    <header className="bg-blue-800 text-white shadow-md sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-2xl font-bold">
          <Link to="/">Dynavox Service</Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            {/* ROWEN Link */}
            <li className="relative">
              <button
                onClick={toggleRowen}
                className="hover:bg-blue-600 py-2 px-4 rounded focus:outline-none"
              >
                ROWEN
              </button>
              {isRowenOpen && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-48">
                  <li>
                    <Link
                      to="/absolute-pre"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Absolute Pre
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pr2"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      PR2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mono"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Mono
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pa1"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      PA1
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* SWISSHD Link */}
            <li className="relative">
              <button
                onClick={toggleSwissHd}
                className="hover:bg-blue-600 py-2 px-4 rounded focus:outline-none"
              >
                SWISSHD
              </button>
              {isSwissHdOpen && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-48">
                  <li>
                    <Link
                      to="/smartamp"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      SmartAmp
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Button for Add New Item */}
            <li>
              <Link to="/add-item">
                <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded text-white">
                  Add New Item
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
