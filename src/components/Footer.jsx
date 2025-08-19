import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";

import Logo from "../assets/logo.png";


function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-gray-600">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[#9f3247] to-[#7b2334] p-8 rounded-t-xl flex flex-col md:flex-row items-center justify-between max-w-[1350px] mx-auto">
        <h2 className="text-white text-2xl font-bold text-center md:text-left mb-4 md:mb-0">
          STAY UPTO DATE ABOUT OUR <br className="hidden md:block" />
          LATEST AUCTIONS
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 rounded-full w-72 outline-none"
          />
          <button className="px-6 py-2 bg-white text-[#9f3247] font-semibold rounded-full hover:bg-gray-100 transition">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Main */}
      <div className="w-[1400px] mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-5 gap-42 mt-6">
        {/* Logo + Description */}
        <div className="col-span-1 text-2xl">
          <img src={Logo} alt="" />
          <p className="mt-4 text-sm text-gray-600">
            Join online auctions and find unique items to buy and sell with
            excitement!
          </p>
          <div className="flex gap-4 mt-4 text-[#9f3247]">
            <FaTwitter className="cursor-pointer hover:text-black" />
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
            <FaGoogle className="cursor-pointer hover:text-black" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-[#9F3247] mb-3">COMPANY</h4>
          <ul className="space-y-2 text-sm text-[#c7909c]">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold text-[#9F3247] mb-3">HELP</h4>
          <ul className="space-y-2 text-sm text-[#c7909c]">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h4 className="font-semibold text-[#9F3247] mb-3">FAQ</h4>
          <ul className="space-y-2 text-sm text-[#c7909c]">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-[#9F3247] mb-3">RESOURCES</h4>
          <ul className="space-y-2 text-sm text-[#c7909c]">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t py-4 text-sm text-[#c7909c]  ">
        <p className="ml-25">Bidbuyy © 2000-2023, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
