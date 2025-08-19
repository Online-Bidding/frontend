import React, { useState } from "react";
import { Link } from "react-router-dom";

function OngoingAuctions() {
  const [price, setPrice] = useState([5000, 20000]);
  const [appliedPrice, setAppliedPrice] = useState([5000, 20000]);

  // Dummy products
  const products = [
    {
      id: 1,
      name: "Vintage Watch",
      price: "Rs.1200",
      seller: "TimeTreasures",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      description: "A beautiful vintage watch from the 1960s in excellent condition.",
      endTime: "2023-12-15T14:30:00"
    },
    {
      id: 2,
      name: "Leather Handbag",
      price: "Rs.2253",
      seller: "FashionHub",
      img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
      description: "Genuine leather handbag with multiple compartments.",
      endTime: "2023-12-16T10:45:00"
    },
    {
      id: 3,
      name: "Antique Vase",
      price: "Rs.3700",
      seller: "HeritageArts",
      img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
      description: "Ming dynasty replica vase with intricate designs.",
      endTime: "2023-12-14T18:20:00"
    },
    {
      id: 4,
      name: "Smartphone",
      price: "Rs.5020",
      seller: "TechDeals",
      img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
      description: "Latest smartphone with 128GB storage and high-resolution camera.",
      endTime: "2023-12-17T12:00:00"
    },
    {
      id: 5,
      name: "Oil Painting",
      price: "Rs.1900",
      seller: "ArtGallery",
      img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500",
      description: "Original oil painting of a landscape scene.",
      endTime: "2023-12-13T16:45:00"
    },
    {
      id: 6,
      name: "Rare Book",
      price: "Rs.2567",
      seller: "BookWorm",
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
      description: "First edition of a classic novel from 1920.",
      endTime: "2023-12-18T09:30:00"
    },
    {
      id: 7,
      name: "Vinyl Record",
      price: "Rs.2620",
      seller: "MusicMania",
      img: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=500",
      description: "Limited edition vinyl record from a famous artist.",
      endTime: "2023-12-15T20:15:00"
    },
    {
      id: 8,
      name: "Camera Lens",
      price: "Rs.5600",
      seller: "PhotoPro",
      img: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500",
      description: "Professional-grade camera lens with image stabilization.",
      endTime: "2023-12-16T15:40:00"
    },
    {
      id: 9,
      name: "Designer Shoes",
      price: "Rs.9020",
      seller: "EliteFootwear",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
      description: "Limited edition designer shoes from a luxury brand.",
      endTime: "2023-12-19T14:00:00"
    },
  ];

  // Parse "Rs.1200" → 1200
  const parsePrice = (str) =>
    parseInt(str.replace("Rs.", "").replace(/,/g, ""), 10);

  // Filter products based on applied price range
  const filteredProducts = products.filter((p) => {
    const pPrice = parsePrice(p.price);
    return pPrice >= appliedPrice[0] && pPrice <= appliedPrice[1];
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <style>
        {`
          /* Custom styles for the range inputs */
          input[type="range"].styled-slider {
            -webkit-appearance: none;
            height: 6px;
            width: 100%;
            border-radius: 5px;
            background: #e5e7eb;
            outline: none;
            margin: 10px 0;
          }
          
          input[type="range"].styled-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #9F3247;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          }
          
          input[type="range"].styled-slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #9F3247;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          }
          
          /* For Webkit browsers */
          input[type="range"].styled-slider::-webkit-slider-track {
            -webkit-appearance: none;
            height: 6px;
            border-radius: 5px;
            background: linear-gradient(to right, #e5e7eb 0%, #e5e7eb ${
              (price[0] / 20000) * 100
            }%, 
                          #9F3247 ${(price[0] / 20000) * 100}%, #9F3247 ${
          (price[1] / 20000) * 100
        }%, 
                          #e5e7eb ${(price[1] / 20000) * 100}%, #e5e7eb 100%);
          }
          
          /* For Firefox */
          input[type="range"].styled-slider::-moz-range-track {
            height: 6px;
            border-radius: 5px;
            background: linear-gradient(to right, #e5e7eb 0%, #e5e7eb ${
              (price[0] / 20000) * 100
            }%, 
                          #9F3247 ${(price[0] / 20000) * 100}%, #9F3247 ${
          (price[1] / 20000) * 100
        }%, 
                          #e5e7eb ${(price[1] / 20000) * 100}%, #e5e7eb 100%);
          }
        `}
      </style>

      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-4">
        <Link to="/dashboard" className="hover:text-[#9f3247]">
          Home &gt;
        </Link>{" "}
        <span className="text-[#9f3247]">Ongoing Auctions</span>
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Filter */}
        <div className="w-full md:w-64 bg-white p-6 rounded-xl shadow h-fit">
          <h2 className="font-bold text-lg mb-4 text-[#9F3247]">Filter</h2>
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-[#9F3247]">Price Range</h3>
            <div className="px-2">
              <input
                type="range"
                min="0"
                max="20000"
                value={price[0]}
                onChange={(e) => setPrice([+e.target.value, price[1]])}
                className="styled-slider"
              />
              <input
                type="range"
                min="0"
                max="20000"
                value={price[1]}
                onChange={(e) => setPrice([price[0], +e.target.value])}
                className="styled-slider"
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm font-semibold text-[#9F3247]">
                Rs.{price[0].toLocaleString()} - Rs.{price[1].toLocaleString()}
              </span>
            </div>
          </div>
          <button
            onClick={() => setAppliedPrice(price)}
            className="w-full py-2 bg-gradient-to-r from-[#9f3247] to-[#7b2334] text-white rounded-lg hover:from-[#7b2334] hover:to-[#5c1a26] transition"
          >
            Apply Filter
          </button>
        </div>

        {/* Products Section */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h1 className="text-2xl font-bold text-[#9f3247]">
              Ongoing Auctions
            </h1>
          </div>

          {/* Results info */}
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600 text-sm">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <p className="text-[#9f3247] text-sm font-medium">
              Price range: Rs.{appliedPrice[0].toLocaleString()} - Rs.
              {appliedPrice[1].toLocaleString()}
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="mt-3 font-semibold text-gray-800">{p.name}</h3>
                  <p className="text-[#9f3247] font-bold mt-1">{p.price}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Seller: <span className="font-medium">{p.seller}</span>
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      <span className="font-medium">Time left:</span> 2d 12h 45m
                    </p>
                    <Link 
                      to={`/viewall/${p.id}`}
                      className="block w-full mt-3 py-2 bg-gradient-to-r from-[#9f3247] to-[#7b2334] text-white rounded-lg text-sm hover:from-[#7b2334] hover:to-[#5c1a26] transition text-center"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <div className="text-gray-400 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg">
                  No products found in this price range.
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Try adjusting your filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OngoingAuctions;