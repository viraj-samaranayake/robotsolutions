import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-50 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/robotsolutions" className="text-2xl font-bold text-blue-600">
          Robot Solutions
        </Link>
        <div className="hidden md:flex space-x-6 text-gray-700 font-semibold">
          <Link to="/robotsolutions" className='hover:text-blue-600'>Home</Link>
          <Link to="/services" className='hover:text-blue-600'>Services</Link>
          <Link to="/about" className='hover:text-blue-600'>About</Link>
          <Link to="/contact" className='hover:text-blue-600'>Contact</Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col items-center space-y-2 text-gray-700">
          <Link to="/robotsolutions" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
