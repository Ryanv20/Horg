import React from 'react';
import Navbar from './components/Navbar';
import Mains from './components/Mains';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Navbar />
    <Mains />
    <Services />
    <Testimonials />
    <Footer />
  </div>
);

export default App;
