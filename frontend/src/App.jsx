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
  const [productsInfo, setProductsInfo] = useState(null)

  // const products = [{ name: 'product1', description: "lorem ipsum", price: 20.00 }, { name: 'product1', description: "lorem ipsum", price: 20.00 }, { name: 'product1', description: "lorem ipsum", price: 20.00 }]

  const fetchProducts = async () => {
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

  // fetchProducts()

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
