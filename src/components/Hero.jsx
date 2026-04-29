import VinForm from './VinForm';
import ResultsCard from './ResultsCard';

const Hero = ({ result, setResult }) => {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden bg-gray-900">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Car" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">
            Trusted by Dealerships Nationwide
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Check Any Car <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Instantly with VIN</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Get instant access to vehicle history, registration status, mileage records, and expert inspection reports before you buy.
          </p>

          {!result ? (
            <VinForm onResult={setResult} />
          ) : null}
        </div>

        {result && (
          <ResultsCard data={result} onReset={() => setResult(null)} />
        )}
      </div>
    </div>
  );
};

export default Hero;
