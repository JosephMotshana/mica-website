import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-2">
        {/* Your Logo appearing in the Navbar */}
        <img src="/favicon.svg" alt="Mica Logo" className="w-8 h-8" />
        <span className="font-bold text-xl tracking-tight text-blue-600">MICA</span>
      </div>
      
      <div className="flex gap-6 font-medium text-gray-600">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/about" className="hover:text-blue-600 transition">About</Link>
        <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
        <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;