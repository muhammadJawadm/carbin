import { FileSearch, ClipboardCheck, Mail } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Send us your VIN number',
      description: 'Enter your 17-digit Vehicle Identification Number into our secure platform.',
      icon: <FileSearch className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'We generate your vehicle history report',
      description: 'Our system compiles data from trusted sources to create a comprehensive report.',
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Receive your report via email in minutes',
      description: 'Get your detailed vehicle history report delivered straight to your inbox quickly.',
      icon: <Mail className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Simple Process</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">How It Works</h3>
          <p className="text-lg text-gray-600">
            Getting your vehicle history report is easy and fast. Follow these simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <div className="text-blue-600 font-bold text-xl mb-2">Step {index + 1}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
