import { Car } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50  bg-white">
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Car className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              VIN<span className="text-blue-600">Inspect</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About Us</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block text-gray-900 font-medium hover:text-blue-600 transition-colors">
              Dealer Login
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-600/30">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
