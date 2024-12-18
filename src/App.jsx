import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import AboutMe from './components/AboutMe';
import Contactme from './components/Contactme';
import Portfolio from './components/Portfolio';
import Footer from './components/ContactFooter';

const App = () => {
  return (
<div className='main'>
<Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Banner/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactme" element={<Contactme />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
</div>
  )
};

export default App;

