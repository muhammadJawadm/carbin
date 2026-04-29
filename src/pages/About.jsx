const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center">
            About <span className="text-blue-600">VINCheckStudio</span>
          </h1>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              VINCheckStudio is a digital vehicle data service dedicated to providing accurate and timely vehicle history reports.
            </p>
            <p>
              Our platform is built to serve individuals, resellers, and automotive businesses looking for quick access to essential vehicle information. We aim to simplify the process of verifying a vehicle's background by delivering reliable data in a clear and easy-to-understand format.
            </p>
            <p>
              Our mission is to provide transparency in the automotive market by making vehicle history information accessible, affordable, and efficient.
            </p>
            <p>
              We are committed to maintaining high standards of service, accuracy, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
