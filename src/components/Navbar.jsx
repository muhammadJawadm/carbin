import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Car className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              VIN<span className="text-blue-600">CheckStudio</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About Us</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:block text-gray-900 font-medium hover:text-blue-600 transition-colors">
              Dealer Login
            </Link>
            <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-600/30">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
