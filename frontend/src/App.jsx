// app.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './COMPONENTES/header.jsx';
import Login from './COMPONENTES/LOGIN.jsx'; 
import Carousel from './COMPONENTES/carousel.jsx';
import Offer from './COMPONENTES/service.jsx'; 

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  // Aca defini las diapositivas para el Carousel
  const slides = [
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>,
  ];

  return (
    <Router>
      <div className="App">
        <Header toggleLogin={toggleLogin} />
        {showLogin && <Login />}
        <div className="flex justify-center mt-8">
          <Carousel slides={slides} autoSlide={true} autoSlideInterval={3000} />
        </div>
        <Offer />
      </div>
    </Router>
  );
}

export default App;
