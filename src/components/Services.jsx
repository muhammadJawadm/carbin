import { FileSearch, ClipboardCheck, FileWarning, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'VIN Lookup',
      description: 'Instantly decode any 17-digit VIN to verify vehicle specifications, factory options, and original equipment.',
      icon: <FileSearch className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Registration Check',
      description: 'Verify current registration status, title history, and ensure there are no active liens or holds on the vehicle.',
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Full Vehicle Inspection',
      description: 'Request a comprehensive 150-point physical inspection by certified mechanics before making a purchase.',
      icon: <FileWarning className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Dealer Reports',
      description: 'Access exclusive wholesale data, auction histories, and market value estimations for dealerships.',
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Comprehensive Vehicle Data</h3>
          <p className="text-lg text-gray-600">
            We provide everything you need to make an informed decision, from instant background checks to on-site physical inspections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
