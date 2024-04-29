import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './COMPONENTES/header.jsx';
import Login from './COMPONENTES/LOGIN.jsx'; 
import Carousel from './COMPONENTES/carousel.jsx';
import Offer from './COMPONENTES/service.jsx'; 
import CardCarousel from './COMPONENTES/novedades.jsx';  
import Section from './COMPONENTES/feactures.jsx';
import ChakraCard from './COMPONENTES/calltoaction.jsx';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleClose = () => {
    setShowLogin(false);
  };

  // Aca defini las diapositivas para el Carousel
  const slides = [
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>,
  ];
  const [productsInfo, setProductsInfo] = useState(null)

  // const products = [{ name: 'product1', description: "lorem ipsum", price: 20.00 }, { name: 'product1', description: "lorem ipsum", price: 20.00 }, { name: 'product1', description: "lorem ipsum", price: 20.00 }]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const json = await response.json()
        if (response.ok) {
          setProductsInfo(json)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <Router>
      <div className="App">
        <Header toggleLogin={toggleLogin} />
        {showLogin && <Login onClose={handleClose} />}
        <div className="flex justify-center mt-8">
          <Carousel slides={slides} autoSlide={true} autoSlideInterval={3000} />
        </div>
        <Offer />
        <CardCarousel/> 
        <Section />
        <ChakraCard />
      </div>
    </Router>
  );
}

export default App;
