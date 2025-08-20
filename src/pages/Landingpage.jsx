import React from "react";
import Landing from "../assets/landing.png";
import { FaHeadphones, FaGamepad, FaDesktop, FaMobileAlt, FaCamera, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";  


function LandingPage() {

  const products = [
    { id: 1, name: "Product name", price: "Rs.129", img: "https://via.placeholder.com/200" },
    { id: 2, name: "Product name", price: "Rs.129", img: "https://via.placeholder.com/200" },
    { id: 3, name: "Product name", price: "Rs.129", img: "https://via.placeholder.com/200" },
    { id: 4, name: "Product name", price: "Rs.129", img: "https://via.placeholder.com/200" },
    { id: 5, name: "Product name", price: "Rs.129", img: "https://via.placeholder.com/200" },
    { id: 6, name: "Product name", price: "Rs.129", img: "https://via.placeholder.com/200" },
    { id: 7, name: "Product name", price: "Rs.129", img: "https://via.placeholder.com/200" },
    { id: 8, name: "Product name", price: "Rs.129", img: "https://via.placeholder.com/200" },
  ];

  // Categories
  const categories = [
    { id: 1, name: "HeadPhones", icon: <FaHeadphones size={36} /> },
    { id: 2, name: "Gaming", icon: <FaGamepad size={36} /> },
    { id: 3, name: "Computers", icon: <FaDesktop size={36} /> },
    { id: 4, name: "Phones", icon: <FaMobileAlt size={36} /> },
    { id: 5, name: "Camera", icon: <FaCamera size={36} /> },
    { id: 6, name: "SmartWatch", icon: <FaClock size={36} /> },
  ];

  return (
    <>
      <div className="bg-[#F2F0F1]">
        <div className=" ml-15 flex items-center justify-between">
          <div>
            <h1 className="text-7xl font-bold text-[#9F3247] -mt-5">
              YOUR GATEWAY TO <br />
              EXCITING <br /> AUCTIONS
            </h1>
            <p className="text-[#c7909c] text-lg mt-4">
              Discover treasures at BidBuyy - where bidding meets buying. Join
              online <br />
              auctions and find unique items to buy and sell with excitement!
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white text-center">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-sm font-bold">23</span>
                  <span className="text-xs">Hours</span>
                </div>
              </div>

              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white text-center">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-sm font-bold">05</span>
                  <span className="text-xs">Days</span>
                </div>
              </div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white text-center">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-sm font-bold">59</span>
                  <span className="text-xs">Minutes</span>
                </div>
              </div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white text-center">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-sm font-bold">35</span>
                  <span className="text-xs">Seconds</span>
                </div>
              </div>
            </div>
            <button className="mt-6 w-[200px] h-12 bg-gradient-to-r from-[#9f3247] to-[#7b2334] rounded-4xl text-white cursor-pointer">
              Bid Now
            </button>
          </div>
          <div className="hidden md:block mt-30">
            <img src={Landing} alt="Auction" className="w-[488px] h-[488px]" />
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] bg-gradient-to-r from-[#9f3247] to-[#7b2334] flex items-center justify-center ">
        <h1 className="text-bold text-white text-3xl">ONGOING AUCTIONS</h1>
      </div>
        <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition">
            <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="mt-3 text-sm font-semibold">{product.name}</h3>
            <p className="text-[#9f3247] font-bold">{product.price}</p>
            <p className="text-xs text-gray-500">Inclusive of taxes</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-gradient-to-r from-[#9f3247] to-[#7b2334] text-white rounded-full hover:scale-105 transition">
          <Link to='/viewall'>View All</Link>
        </button>
      </div>

      {/* Categories */}
      <h2 className="text-center mt-12 mb-6 text-2xl font-bold text-[#9f3247]">
        BROWSE BY CATEGORIES
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center justify-center h-60 bg-[#f8e9ec] text-[#9f3247] p-6 rounded-xl hover:bg-[#9f3247] hover:text-white transition cursor-pointer"
          >
            {cat.icon}
            <p className="mt-2 font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default LandingPage;
