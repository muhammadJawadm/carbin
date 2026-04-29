import { Link } from 'react-router-dom';

const InspectionCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-blue-600"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Need a Full Inspection?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-2xl">
              Don't buy a lemon. Let our certified mechanics perform a comprehensive 150-point physical inspection before you sign any paperwork. We check the engine, transmission, frame, and more.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end w-full">
            <Link to="/contact" className="inline-block text-center bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 w-full md:w-auto hover:-translate-y-1">
              Request Inspection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspectionCTA;
