// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white-200 p-4 text-white">
      <ul className="flex gap-4">
        <li className='text-xl text-black'><Link to="/">Home</Link></li>
        <li className='text-xl text-black'><Link to="/sell">Sell</Link></li>
        <li className='text-xl text-black'><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
