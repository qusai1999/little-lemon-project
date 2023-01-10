import React from 'react';

import { AboutUs, SpecialMenu, Footer,  Header, Intro,  } from './container';
import { Navbar } from './components';
import {BookingPage} from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <BookingPage />
    <AboutUs />
    <SpecialMenu /> 
    <Intro />
    <Footer />
  </div>
);

export default App;
