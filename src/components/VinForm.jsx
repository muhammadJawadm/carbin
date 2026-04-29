import { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

const VinForm = ({ onResult }) => {
  const [vin, setVin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!vin.trim()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onResult({
        make: 'Tesla',
        model: 'Model 3 Long Range',
        year: '2023',
        status: 'Active / Clear',
        mileage: '12,450 mi',
        accidents: 'No accidents reported',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        vin: vin.toUpperCase()
      });
    }, 1500);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-white/20 max-w-2xl mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-4 bg-white text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none uppercase font-mono text-lg transition-all"
            placeholder="ENTER 17-DIGIT VIN"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            maxLength={17}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || vin.length < 5}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center min-w-[160px]"
        >
          {isLoading ? <Loader2 className="h-6 w-6 animate-spin" /> : 'Check VIN'}
        </button>
      </form>
    </div>
  );
};

export default VinForm;
