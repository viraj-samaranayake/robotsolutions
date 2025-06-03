const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-sm">
      <div>
        <h3 className="font-bold text-lg mb-2">Robot Solutions</h3>
        <p>Empowering businesses with automation and intelligent systems.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Links</h4>
        <ul className="space-y-1">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/services" className="hover:underline">Services</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Contact</h4>
        <p>Email: <a href="mailto:info@robotsolutions.com">info@robotsolutions.com</a></p>
        <p>Phone: +1 (234) 567-8901</p>
      </div>
    </div>
    <div className="text-center text-gray-400 mt-6 text-xs">
      &copy; {new Date().getFullYear()} Robot Solutions. All rights reserved.
    </div>
  </footer>
);

export default Footer;
