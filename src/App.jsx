import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import InspectionCTA from './components/InspectionCTA';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  const [vinResult, setVinResult] = useState(null);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-200">
      <Navbar />
      
      <main>
        <Hero result={vinResult} setResult={setVinResult} />
        <Services />
        <InspectionCTA />
        <WhyChooseUs />
      </main>

      <Footer />
    </div>
  );
}

export default App;