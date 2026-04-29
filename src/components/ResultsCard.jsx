import { ShieldCheck, Activity, Calendar, CarFront, FileText, AlertTriangle } from 'lucide-react';

const ResultsCard = ({ data, onReset }) => {
  if (!data) return null;

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-w-4xl mx-auto mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col md:flex-row">
        {/* Car Image Area */}
        <div className="md:w-2/5 relative h-64 md:h-auto">
          <img 
            src={data.image} 
            alt={`${data.make} ${data.model}`} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">Verified Vehicle</span>
            <h3 className="text-white text-2xl font-bold">{data.year} {data.make}</h3>
            <p className="text-gray-200">{data.model}</p>
          </div>
        </div>

        {/* Details Area */}
        <div className="md:w-3/5 p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">VIN Number</p>
              <p className="font-mono text-lg font-bold text-gray-900">{data.vin}</p>
            </div>
            <button onClick={onReset} className="text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Check Another Car
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Registration Status</p>
                <p className="font-semibold text-gray-900">{data.status}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Recorded Mileage</p>
                <p className="font-semibold text-gray-900">{data.mileage}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-50 p-2 rounded-lg text-green-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Accident History</p>
                <p className="font-semibold text-gray-900">{data.accidents}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-50 p-2 rounded-lg text-purple-600">
                <CarFront className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Vehicle Type</p>
                <p className="font-semibold text-gray-900">Passenger Car</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-orange-500 w-6 h-6" />
              <div>
                <p className="font-bold text-gray-900 text-sm">Need a comprehensive check?</p>
                <p className="text-xs text-gray-500">Get a full 150-point inspection report.</p>
              </div>
            </div>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Request Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
