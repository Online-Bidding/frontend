// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
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

      {/* Right: Login Button */}
      <div>
        <button className="w-[100px] h-10 bg-gradient-to-r from-[#9f3247] to-[#7b2334] rounded-lg text-white cursor-pointer mr-15">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
