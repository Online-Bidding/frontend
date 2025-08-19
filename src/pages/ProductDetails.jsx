import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [timeLeft, setTimeLeft] = useState({});

  // Mock product data - in a real app, you would fetch this from an API
  const products = [
    {
      id: 1,
      name: "Vintage Watch",
      price: "Rs.1200",
      currentBid: "Rs.1500",
      seller: "TimeTreasures",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      description: "A beautiful vintage watch from the 1960s in excellent condition. This timepiece features a genuine leather strap and keeps accurate time. Perfect for collectors or as a statement accessory.",
      endTime: "2023-12-15T14:30:00",
      bids: 12,
      condition: "Excellent",
      year: "1965"
    },
    {
      id: 2,
      name: "Leather Handbag",
      price: "Rs.2253",
      currentBid: "Rs.2400",
      seller: "FashionHub",
      img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
      description: "Genuine leather handbag with multiple compartments. Features a secure zip closure and adjustable shoulder strap. Perfect for everyday use or special occasions.",
      endTime: "2023-12-16T10:45:00",
      bids: 8,
      condition: "Like New",
      material: "Genuine Leather"
    },
    {
      id: 3,
      name: "Antique Vase",
      price: "Rs.3700",
      currentBid: "Rs.3900",
      seller: "HeritageArts",
      img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
      description: "Ming dynasty replica vase with intricate designs. This beautiful piece features hand-painted details and makes for an elegant addition to any home decor.",
      endTime: "2023-12-14T18:20:00",
      bids: 15,
      condition: "Very Good",
      era: "Ming Dynasty Replica"
    },
    {
      id: 4,
      name: "Smartphone",
      price: "Rs.5020",
      currentBid: "Rs.5200",
      seller: "TechDeals",
      img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
      description: "Latest smartphone with 128GB storage and high-resolution camera. Includes original charger and protective case. Fully functional with no scratches on screen.",
      endTime: "2023-12-17T12:00:00",
      bids: 22,
      condition: "Like New",
      storage: "128GB"
    },
    {
      id: 5,
      name: "Oil Painting",
      price: "Rs.1900",
      currentBid: "Rs.2100",
      seller: "ArtGallery",
      img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500",
      description: "Original oil painting of a landscape scene. Signed by the artist and ready to hang. This piece captures the beauty of nature with vibrant colors and detailed brushwork.",
      endTime: "2023-12-13T16:45:00",
      bids: 7,
      condition: "Excellent",
      artist: "Local Artist"
    },
    {
      id: 6,
      name: "Rare Book",
      price: "Rs.2567",
      currentBid: "Rs.2700",
      seller: "BookWorm",
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
      description: "First edition of a classic novel from 1920. Well-preserved with minimal wear. A must-have for collectors of rare literature.",
      endTime: "2023-12-18T09:30:00",
      bids: 14,
      condition: "Good",
      year: "1920"
    },
    {
      id: 7,
      name: "Vinyl Record",
      price: "Rs.2620",
      currentBid: "Rs.2800",
      seller: "MusicMania",
      img: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=500",
      description: "Limited edition vinyl record from a famous artist. Still in original packaging. Includes rare bonus tracks not available on digital platforms.",
      endTime: "2023-12-15T20:15:00",
      bids: 19,
      condition: "Mint",
      artist: "Classic Artist"
    },
    {
      id: 8,
      name: "Camera Lens",
      price: "Rs.5600",
      currentBid: "Rs.5800",
      seller: "PhotoPro",
      img: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500",
      description: "Professional-grade camera lens with image stabilization. Compatible with most DSLR cameras. Includes lens cap and protective case.",
      endTime: "2023-12-16T15:40:00",
      bids: 11,
      condition: "Excellent",
      focalLength: "50mm"
    },
    {
      id: 9,
      name: "Designer Shoes",
      price: "Rs.9020",
      currentBid: "Rs.9200",
      seller: "EliteFootwear",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
      description: "Limited edition designer shoes from a luxury brand. Worn only once and maintained in perfect condition. Comes with original box and dust bag.",
      endTime: "2023-12-19T14:00:00",
      bids: 25,
      condition: "Like New",
      brand: "Luxury Brand"
    },
  ];

  useEffect(() => {
    // Find the product with the matching ID
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    
    // Set up timer for countdown
    const timer = setInterval(() => {
      if (foundProduct && foundProduct.endTime) {
        calculateTimeLeft(foundProduct.endTime);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [id]);

  const calculateTimeLeft = (endTime) => {
    const difference = new Date(endTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    setTimeLeft(timeLeft);
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit the bid to your backend
    alert(`Bid of Rs.${bidAmount} submitted for ${product.name}`);
    setBidAmount("");
  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-500">Product not found.</p>
        <Link to="/ongoing-auctions" className="text-[#9f3247] hover:underline mt-4 inline-block">
          Back to Auctions
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-4">
        <Link to="/dashboard" className="hover:text-[#9f3247]">
          Home &gt;
        </Link>{" "}
        <Link to="/viewall" className="hover:text-[#9f3247]">
          Ongoing Auctions &gt;
        </Link>{" "}
        <span className="text-[#9f3247]">{product.name}</span>
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">Seller: {product.seller}</p>
          
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Current Bid:</span>
              <span className="text-2xl font-bold text-[#9f3247]">{product.currentBid}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Starting Price:</span>
              <span className="text-lg text-gray-800">{product.price}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600">Bids:</span>
              <span className="text-lg text-gray-800">{product.bids}</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Auction Ends In:</h3>
            <div className="flex gap-4">
              {timeLeft.days > 0 && (
                <div className="text-center">
                  <div className="bg-gray-800 text-white rounded-lg py-2 px-3">
                    <span className="text-xl font-bold">{timeLeft.days}</span>
                  </div>
                  <span className="text-xs text-gray-600">Days</span>
                </div>
              )}
              <div className="text-center">
                <div className="bg-gray-800 text-white rounded-lg py-2 px-3">
                  <span className="text-xl font-bold">{timeLeft.hours || 0}</span>
                </div>
                <span className="text-xs text-gray-600">Hours</span>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 text-white rounded-lg py-2 px-3">
                  <span className="text-xl font-bold">{timeLeft.minutes || 0}</span>
                </div>
                <span className="text-xs text-gray-600">Minutes</span>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 text-white rounded-lg py-2 px-3">
                  <span className="text-xl font-bold">{timeLeft.seconds || 0}</span>
                </div>
                <span className="text-xs text-gray-600">Seconds</span>
              </div>
            </div>
          </div>

          {/* Bid Form */}
          <form onSubmit={handleBidSubmit} className="mb-6">
            <div className="flex gap-2">
              <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder="Enter your bid amount"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9f3247]"
                min={parseInt(product.currentBid.replace('Rs.', '')) + 1}
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#9f3247] to-[#7b2334] text-white rounded-lg px-6 py-2 hover:from-[#7b2334] hover:to-[#5c1a26] transition"
              >
                Place Bid
              </button>
            </div>
          </form>

          {/* Product Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Product Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Details</h3>
            <ul className="text-gray-600">
              <li className="py-1 border-b border-gray-100">Condition: {product.condition}</li>
              {product.year && <li className="py-1 border-b border-gray-100">Year: {product.year}</li>}
              {product.material && <li className="py-1 border-b border-gray-100">Material: {product.material}</li>}
              {product.era && <li className="py-1 border-b border-gray-100">Era: {product.era}</li>}
              {product.storage && <li className="py-1 border-b border-gray-100">Storage: {product.storage}</li>}
              {product.artist && <li className="py-1 border-b border-gray-100">Artist: {product.artist}</li>}
              {product.focalLength && <li className="py-1 border-b border-gray-100">Focal Length: {product.focalLength}</li>}
              {product.brand && <li className="py-1 border-b border-gray-100">Brand: {product.brand}</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;