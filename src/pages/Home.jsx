import { useState } from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/Services';
import InspectionCTA from '../components/InspectionCTA';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  const [vinResult, setVinResult] = useState(null);

  return (
    <main>
      <Hero result={vinResult} setResult={setVinResult} />
      <HowItWorks />
      <WhyChooseUs />
      <InspectionCTA />
    </main>
  );
};

export default Home;
