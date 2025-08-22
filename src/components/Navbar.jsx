// src/components/Navbar.jsx - Advanced version with dropdown menu
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Check if user is logged in on component mount
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
      const email = localStorage.getItem('userEmail') || sessionStorage.getItem('userEmail');
      setIsLoggedIn(!!token);
      setUserEmail(email || "");
    };

    checkAuthStatus();

    // Listen for storage changes
    const handleStorageChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Remove tokens from both storage types
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    sessionStorage.removeItem("userEmail");
    
    // Update state
    setIsLoggedIn(false);
    setUserEmail("");
    setShowDropdown(false);
    
    // Redirect to login page
    navigate("/login");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md">
      {/* Left: Logo + Nav Links */}
      <div className="flex items-center gap-10 ml-15">
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
        <ul className="flex gap-6">
          <li className="text-lg text-black">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg text-black">
            <Link to="/sell">Sell</Link>
          </li>
          <li className="text-lg text-black">
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 flex justify-center px-6">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-100 w-full max-w-[600px] h-10 px-4 rounded-3xl outline-none"
        />
      </div>

      {/* Right: Login/User Menu */}
      <div className="mr-15">
        {isLoggedIn ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#9f3247] to-[#7b2334] rounded-lg text-white cursor-pointer"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                {userEmail ? userEmail.charAt(0).toUpperCase() : "U"}
              </div>
              <span className="text-sm">
                {userEmail ? userEmail.split('@')[0] : 'User'}
              </span>
              <svg 
                className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="py-1">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/my-bids"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    My Bids
                  </Link>
                  <hr className="my-1" />
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button 
            onClick={() => navigate("/login")}
            className="w-[100px] h-10 bg-gradient-to-r from-[#9f3247] to-[#7b2334] rounded-lg text-white cursor-pointer"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;