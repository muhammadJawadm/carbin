import { Zap, Database, CheckCircle, Lock } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Fast Delivery',
      description: 'Fast delivery within minutes immediately after entering the VIN. No waiting.',
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Trusted Data Insights',
      description: 'Trusted data insights from verified national databases.',
      icon: <Database className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Secure Process',
      description: 'Easy and secure process to ensure confidentiality.',
      icon: <Lock className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Dedicated Support',
      description: 'Dedicated support team ready to assist you 24/7.',
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-600">
            We are committed to delivering trusted vehicle history information using verified data sources. Our goal is to provide transparency and help our customers avoid costly mistakes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h4>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
