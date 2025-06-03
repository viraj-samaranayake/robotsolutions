import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Robot Solutions
        </Link>
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
